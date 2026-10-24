---
title: FileUpload
description: Drop zone with a file picker button that lists the chosen files.
react: FileUpload
---
# Control / FileUpload

**NOT IN FIGMA** (repo-owned). 2px dashed `border-default` zone (3:1 boundary), `radius-tile`, padding 24; drag-over turns solid `action-default` on `info-bg`.

## Usage

- State accepted types and size in the description.
- Do not promise security, privacy or anonymity for uploads; restricted report attachments stay disabled until policy is confirmed.

## Accessibility

The "Choose file" button is the keyboard path; dropping is an addition, never the only way. Selected file names are listed as text.

## React

```tsx
<FileUpload label="Attachment" description="PDF up to 5 MB." acceptedFileTypes={["application/pdf"]} onSelect={setFiles} />
```

## Reference markup

```html
<div class="ds-dropzone"><span class="ds-label">Attachment</span><span>PDF up to 5 MB.</span><button class="ds-btn ds-btn--secondary ds-btn--sm">Choose file</button></div>
```
