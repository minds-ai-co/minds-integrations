import io
import unittest

import requests

from minds.client import MindsClient, MindsError
from minds.media import BoundedBuffer, images_to_creatives, video_to_creative


class Response:
    status_code = 200

    def json(self):
        return {"id": "10000000-0000-4000-8000-000000000001"}


class Session:
    def __init__(self):
        self.calls = []
        self.response = Response()

    def request(self, *args, **kwargs):
        self.calls.append((args, kwargs))
        return self.response


class ClientTests(unittest.TestCase):
    def test_authentication_is_only_sent_to_fixed_minds_origin_without_redirects(self):
        session = Session()
        client = MindsClient("test-key-not-a-secret", session=session)
        client.identity()
        args, options = session.calls[0]
        self.assertEqual(args, ("GET", "https://getminds.ai/api/v1/auth/me"))
        self.assertFalse(options["allow_redirects"])
        for path in ("https://example.org/api/", "//example.org/api/", "/elsewhere"):
            with self.assertRaises(MindsError):
                client.request("GET", path)
        self.assertEqual(len(session.calls), 1)

    def test_http_errors_never_echo_credentials_or_upstream_bodies(self):
        session = Session()
        for status in (302, 401, 402, 403, 409, 413, 429, 500):
            session.response.status_code = status
            with self.assertRaises(MindsError) as caught:
                MindsClient("test-private-key", session=session).identity()
            self.assertNotIn("test-private-key", str(caught.exception))
            self.assertEqual(caught.exception.status, status)

    def test_network_error_does_not_expose_request_details(self):
        class Broken:
            def request(self, *args, **kwargs):
                raise requests.ConnectionError("Authorization: never-echo")

        with self.assertRaises(MindsError) as caught:
            MindsClient("test-private-key", session=Broken()).identity()
        self.assertNotIn("never-echo", str(caught.exception))

    def test_upload_drops_signed_capability_and_uses_owned_path(self):
        session = Session()
        session.response.json = lambda: {
            "path": "chat/owner/image.png",
            "url": "/api/uploads/chat/owner/image.png?sig=private",
        }
        receipt = MindsClient("test-key", session=session).upload(b"pixels", "creative-1.png", "image/png")
        self.assertEqual(receipt["url"], "/api/uploads/chat/owner/image.png")
        self.assertNotIn("private", str(receipt))


class MediaTests(unittest.TestCase):
    def test_native_video_and_audio_are_retained_and_container_is_explicit(self):
        class Video:
            def save_to(self, stream, **kwargs):
                self.options = kwargs
                stream.write(b"video-including-audio")

        video = Video()
        creative = video_to_creative(video, "Clip")[0]
        self.assertIs(creative["native"], video)
        self.assertEqual(video.options, {"format": "mp4"})
        self.assertEqual(creative["content"], b"video-including-audio")

    def test_bounded_encoder_rejects_oversize_without_unbounded_buffer(self):
        from unittest.mock import patch

        with patch("minds.media.MAX_UPLOAD_BYTES", 4):
            stream = BoundedBuffer()
            stream.write(b"1234")
            with self.assertRaises(MindsError):
                stream.write(b"5")

    def test_images_use_real_tensors_and_keep_native_pixels(self):
        import torch
        from PIL import Image

        images = torch.tensor([[[[0.0, 0.5, 1.0]]], [[[1.0, 0.0, 0.0]]]])
        creatives = images_to_creatives(images, '["Blue", "Red"]')
        self.assertEqual(Image.open(io.BytesIO(creatives[0]["content"])).getpixel((0, 0)), (0, 128, 255))
        self.assertTrue(torch.equal(creatives[1]["native"], images[1:2]))
        self.assertNotEqual(creatives[0]["sha256"], creatives[1]["sha256"])

    def test_invalid_pixels_and_label_count_do_not_get_uploaded(self):
        import torch

        for image in (torch.full((1, 1, 1, 3), float("nan")), torch.full((1, 1, 1, 3), 2.0)):
            with self.assertRaises(MindsError):
                images_to_creatives(image, '["A"]')
        with self.assertRaises(MindsError):
            images_to_creatives(torch.zeros(2, 1, 1, 3), '["A"]')
