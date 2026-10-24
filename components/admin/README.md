# Admin components

Specs for the ACCS admin portal (`accs-admin`, `accs-admin-dark`). Snippets use the reference classes in `dist/components.css`; React implementations must produce the same DOM, tokens and states.

| Component | Spec |
|---|---|
| Table | [table.md](table.md) |
| Form field | [form-field.md](form-field.md) |
| Select | [select.md](select.md) |
| Modal | [modal.md](modal.md) |
| Toast | [toast.md](toast.md) |
| Empty state | [empty-state.md](empty-state.md) |
| Pagination | [pagination.md](pagination.md) |
| Role and status badges | [badges.md](badges.md) |
| Sidebar nav | [sidebar-nav.md](sidebar-nav.md) |
| Tabs | [tabs.md](tabs.md) |

Common rules: sizes come from `control-h`/`row-h`; every state below must be implemented; focus ring is `2px solid var(--ds-focus)`; no hex or primitive tokens in component code.
