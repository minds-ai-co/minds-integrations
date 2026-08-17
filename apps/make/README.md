# Minds for Make

This directory is the source of truth for the first Minds custom app in Make.
Make custom apps are configured in the web app editor, so each JSON file maps
to a named Make component or component tab.

The package provides five bounded modules:

- List Panels
- Create a Panel
- Get a Panel
- Preview a Research Plan
- Get a Panel Summary

It deliberately excludes deletion and study execution. Users review and
confirm consequential research work in Minds.

## Installation order

1. Create one custom app named Minds in a Minds-owned Make developer account.
2. Copy `base.json` into the Base component.
3. Create one API-key connection and copy the files in `connection/` into its
   Parameters and Communication tabs.
4. Create the five modules described by `modules/manifest.json`, then copy each
   module's parameters and communication files into the matching tabs.
5. Test the connection and all five modules with a dedicated reviewer API key.
6. Keep the app private until error handling, output mapping, and a complete
   scenario pass end-to-end testing.

The API key is a password field. Authorization is sanitized from Make logs, and
all module requests inherit the canonical `https://getminds.ai/api/v1` base URL.

API documentation: <https://getminds.ai/api>

Support: <https://getminds.ai/contact>
