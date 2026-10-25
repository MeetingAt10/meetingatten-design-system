---
title: Modal
description: A dialog sheet over a scrim for a decision or a short form, with protected focus; a bottom sheet on phones.
react: Modal
---
# Modal

A modal is a sheet that rises over a scrim and blocks the page until a decision is made: confirm a removal, edit a few details. Focus stays inside until it closes, then returns to the trigger. On phones it becomes a bottom sheet. Use `role="alertdialog"` for destructive confirmations.

## When to use

- Use it for a decision that needs protected focus: "Discard draft DEMO-024?", "Edit consultation details".
- Use `role="alertdialog"` for destructive or irreversible confirmations; the actions decide and there is no close button.
- Name the object and the consequence in the title, and say in the body whether it can be undone.
- Don't use it for reading or long forms; use the page, or a [Drawer](drawer.md) for secondary work that keeps the page in view.
- Don't open a modal from a modal, and don't put a card inside one.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Overlay | `.ds-modal-overlay` | Fixed scrim (`--ds-scrim`), `z-index` modal (400); centers the sheet with 16px padding |
| Sheet | `.ds-modal` | 32rem wide (`.ds-modal--lg` 44rem), radius 16, overlay background and overlay shadow, no rule |
| Dialog | `.ds-modal__dialog` | `role="dialog"` or `role="alertdialog"`; `display: contents` |
| Head | `.ds-modal__head` | Title and the close button, 24px padding |
| Title | `.ds-modal__title` | h3 style (Plus Jakarta Sans 700 20/26), balanced lines; names the dialog |
| Close | `.ds-modal__close` | "Close" icon button, only in `dialog` |
| Body | `.ds-modal__body` | Text and fields in secondary text color; scrolls when tall |
| Actions | `.ds-modal__actions` | Ruled row at the bottom, right-aligned; secondary first, primary last |

## States

| State | Looks | Set by |
|---|---|---|
| Entering | The scrim fades in; the sheet rises 8px into place | `[data-entering]` |
| Exiting | The sheet sinks and fades; the scrim fades out | `[data-exiting]` |
| Phone (below 600px) | Full-width bottom sheet with a rounded top; slides up on the gentle spring; actions stack full width with the primary on top | viewport width |
| Large | 44rem wide | `size="lg"`, `.ds-modal--lg` |
| Dialog | Close button; a click on the scrim closes it | `role="dialog"` (default) |
| Alert dialog | No close button; a click on the scrim does nothing | `role="alertdialog"` |

## Behavior and accessibility

- React Aria `ModalOverlay`, `Modal` and `Dialog`: focus moves into the sheet and stays there, the page behind is inert, and focus returns to the trigger when it closes.
- Escape closes the modal unless `isKeyboardDismissDisabled` is set. A scrim click closes a `dialog` (`isDismissable` defaults to true) but not an `alertdialog`.
- The title is the dialog's accessible name.
- Open it with `DialogTrigger` around a trigger button, or control it with `isOpen` and `onOpenChange`.
- `children` can be a function that receives `close`, so action buttons can close the dialog.
- Elevation is declared once: the sheet floats on the overlay shadow, with no rule.
- Reduced motion: no rise or slide; the sheet appears and leaves at once.
- Forced colors: the sheet keeps a `CanvasText` edge.

## React

```tsx
import { Button, DialogTrigger, Modal, ModalActions, ModalBody, TextField } from '@meetingat10/design-system/react';

<DialogTrigger>
  <Button variant="secondary" icon="pencil">Edit details</Button>
  <Modal title="Edit consultation details">
    {({ close }) => (
      <>
        <ModalBody><TextField label="Subject" defaultValue="Thesis topic review" /></ModalBody>
        <ModalActions>
          <Button variant="secondary" onPress={close}>Cancel</Button>
          <Button onPress={close}>Save details</Button>
        </ModalActions>
      </>
    )}
  </Modal>
</DialogTrigger>

<DialogTrigger>
  <Button variant="destructive" icon="trash">Discard draft</Button>
  <Modal title="Discard draft DEMO-024?" role="alertdialog">
    {({ close }) => (
      <>
        <ModalBody><p>The draft and its attachments are removed. This cannot be undone.</p></ModalBody>
        <ModalActions>
          <Button variant="secondary" onPress={close}>Keep draft</Button>
          <Button variant="destructive" onPress={() => { discardDraft(); close(); }}>Discard draft</Button>
        </ModalActions>
      </>
    )}
  </Modal>
</DialogTrigger>
```

`size` is `md` (default) or `lg`. `ModalBody` and `ModalActions` take only children. Other `ModalOverlay` props (`isOpen`, `onOpenChange`, `defaultOpen`, `isDismissable`, `isKeyboardDismissDisabled`) pass through.

## Plain CSS

```html
<div class="ds-modal-overlay">
  <section class="ds-modal" role="alertdialog" aria-modal="true" aria-labelledby="discard-title" aria-describedby="discard-body">
    <header class="ds-modal__head"><h2 class="ds-modal__title" id="discard-title">Discard draft DEMO-024?</h2></header>
    <div class="ds-modal__body"><p id="discard-body">The draft and its attachments are removed. This cannot be undone.</p></div>
    <footer class="ds-modal__actions">
      <button class="ds-btn ds-btn--secondary" type="button">Keep draft</button>
      <button class="ds-btn ds-btn--destructive" type="button">Discard draft</button>
    </footer>
  </section>
</div>
```

In plain markup, move focus into the sheet, keep Tab inside, close on Escape and return focus to the trigger yourself.
