// Desktop replies come from Figma's top frame, above the immediate UI wrapper.
export function isFigmaHostReply(event, frames) {
  return event.origin === 'https://www.figma.com'
    && (event.source === frames.parent || event.source === frames.top);
}

// Figma's main VM has no browser URL constructor. Keep the authority exact.
export function mindsExternalLink(value) {
  if (typeof value !== 'string' || value.length > 16384
    || !/^https:\/\/getminds\.ai(?:[/?#]|$)/.test(value)
    || /[\\\s\u0000-\u001f\u007f]/u.test(value)) {
    throw new Error('Unsupported Minds link.');
  }
  return value;
}
