# Minds for Google Sheets

The Apps Script add-on reads questions from the first column of the selected
range, asks an existing Minds Group, and writes results into the adjacent
column. Blank rows retain their positions. It shows a specific confirmation
with the number of questions before any paid or consequential call, and warns
before overwriting existing output cells.

The API key is stored in Apps Script user properties, never in a cell or the
script source. Users can remove it from the add-on menu without revoking the
key in Minds.

Public reviewer and user documentation:
<https://getminds.ai/guide/google-sheets>

A public Workspace Marketplace release still requires a standard Google Cloud
project, Apps Script deployment, OAuth review if requested, listing assets,
test credentials for Google, and Marketplace review.
