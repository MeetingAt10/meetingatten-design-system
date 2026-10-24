# Role and status badges

Two kinds. **Status badge**: pill, dot + label, color from status tokens. **Role badge**: small-radius, mono uppercase, neutral blue-tint; roles are identity, not state.

| Badge | Class | Tokens | Use |
|---|---|---|---|
| Neutral | `ds-badge` | `surface-sunken`, `ink-secondary` | New, draft, closed |
| Info | `ds-badge--info` | `info-bg/fg` | In review, assigned |
| Success | `ds-badge--success` | `success-bg/fg` | Resolved, active |
| Warning | `ds-badge--warning` | `warning-bg/fg` | Overdue, expiring |
| Danger | `ds-badge--danger` | `danger-bg/fg` | Blocked, rejected |
| Accent | `ds-badge--accent` | `accent-bg/fg` | Featured, new feature |
| Role | `ds-badge--role` | `action-subtle(-fg)`, mono | Student, Moderator, Dept. admin, Super admin |

| Rule | Detail |
|---|---|
| Always text | Dot is decoration; label carries meaning |
| One badge per attribute | Do not stack status badges in one cell |
| Vocabulary | Fixed set per object (request: New, In review, Resolved, Blocked, Overdue); do not invent synonyms |
| Not interactive | Use buttons or chips for filters |
| Confidential items | Add a `lock` icon and the word "Confidential" |

All variants pass 4.5:1 in light and dark.

```html
<span class="ds-badge ds-badge--warning">Overdue</span>
<span class="ds-badge ds-badge--role">Moderator</span>
```
