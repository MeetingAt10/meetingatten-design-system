---
title: File Upload
description: A dashed drop sheet that turns solid when files hover over it; each file becomes a ruled row with its size, a progress line and a remove action.
react: FileUpload
---
# File Upload

File upload is a dashed drop sheet with a browse button. The dashed edge means it is waiting for files; it turns solid navy on the schedule wash while files hover over it. Each chosen file becomes a ruled row with its size, a progress line along the bottom edge and a remove button.

## When to use

- Use it to attach files to a post, a request or a report draft.
- Use `description` for the accepted types and size limit in words ("PDF, PNG or JPG, up to 10 MB each.").
- Use `status` to show progress, completion and errors per file while your app uploads.
- Don't describe uploads as secure or private; state only what is true, such as who can open the attachment.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Drop sheet | `.ds-dropzone` | 1.5px dashed `border-default` edge, radius 12, paper, centered content, 32px 24px padding |
| Icon block | `.ds-dropzone__icon` | 44px solid navy block with a 24px `upload` icon |
| Title | `.ds-dropzone__title` | The visible label, label style |
| Browse | `.ds-dropzone__browse` | Underlined navy text button that opens the file picker |
| Hint | `.ds-dropzone__hint` | Caption lines: how to add files, accepted types and size |
| File list | `.ds-file-list` | Rows 8px apart |
| File row | `.ds-file` | Hairline rule, radius 8, icon, name and meta, remove button |
| Name | `.ds-file__name` | Label style, truncates with an ellipsis |
| Meta | `.ds-file__meta` | Size or progress ("40% of 1.2 MB") in the `time` style; the error text replaces it |
| Progress line | `.ds-file__progress` | 2px line along the bottom edge that springs to `--value` |
| Remove | `.ds-icon-btn` | `x` icon, named "Remove" plus the file name |

## States

| State | Looks | Set by |
|---|---|---|
| Waiting | Dashed edge (pending: no files yet) | none |
| Hover | Edge darkens to `border-strong` | `:hover`, `[data-hovered]` |
| Drop target | Solid navy edge on the schedule wash; the icon block lifts 2px with the lift shadow | `[data-drop-target]` |
| Focus | 2px focus ring with a 2px gap | `[data-focus-visible]` |
| Disabled | Disabled ground and ink | `isDisabled`, `[data-disabled]` |
| Uploading | Meta reads "40% of 1.2 MB"; the progress line fills | `status[name].progress`, `--value` |
| Done | Row icon turns into a success check | `status[name].done`, `.ds-file--done` |
| Error | Danger rule and meta; the error text replaces the size | `status[name].error`, `.ds-file--error` |

## Behavior and accessibility

- React Aria `DropZone` and `FileTrigger`: drop files on the sheet, or press "browse your device" to open the system picker. The drop zone is named by its title and can also take files from the keyboard and paste.
- `acceptedFileTypes` limits the picker and refuses drops of other types. With `allowsMultiple`, new files join the list (a file with the same name is not added twice); without it, a new file replaces the old one.
- The component keeps its own list of chosen files and reports every change through `onChange`.
- Progress lines are hidden from assistive tech; the meta text carries the same percentage in words. Announce a finished or failed upload in a status message as well.
- Reduced motion: the icon lift and the progress spring land at once.
- Forced colors: the drop sheet keeps a dashed edge, file rows a `CanvasText` edge, and the progress line paints itself in `Highlight`.

## React

```tsx
import { FileUpload } from '@meetingat10/design-system/react';

<FileUpload
  label="Attachments"
  description="PDF, PNG or JPG, up to 10 MB each."
  acceptedFileTypes={['application/pdf', 'image/png', 'image/jpeg']}
  allowsMultiple
  onChange={setFiles}
  status={{
    'timetable-week.pdf': { progress: 40 },
    'whiteboard-notes.png': { done: true },
    'scan-form.jpg': { error: 'Too large. Choose a file under 10 MB.' },
  }}
/>
```

`status` is keyed by file name. `isDisabled` turns off the sheet and the browse button.

## Plain CSS

```html
<div class="ds-field">
  <div class="ds-dropzone">
    <span class="ds-dropzone__icon" aria-hidden="true"><svg class="ds-icon ds-icon--24"><use href="sprite.svg#ds-upload"/></svg></span>
    <p class="ds-dropzone__title">Drop files or <button class="ds-dropzone__browse" type="button">browse</button></p>
    <p class="ds-dropzone__hint">PDF or PNG, up to 10 MB</p>
  </div>
  <ul class="ds-file-list" aria-label="Selected files">
    <li class="ds-file">
      <svg class="ds-icon ds-file__icon" aria-hidden="true"><use href="sprite.svg#ds-file"/></svg>
      <div><p class="ds-file__name">timetable-week.pdf</p><p class="ds-file__meta">40% of 1.2 MB</p></div>
      <button class="ds-icon-btn" type="button" aria-label="Remove timetable-week.pdf">
        <svg class="ds-icon" aria-hidden="true"><use href="sprite.svg#ds-x"/></svg>
      </button>
      <span class="ds-file__progress" aria-hidden="true"><span style="--value: 40"></span></span>
    </li>
  </ul>
</div>
```

In plain markup, connect the browse button to a hidden `<input type="file">` and handle drops with a script.
