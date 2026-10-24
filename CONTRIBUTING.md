# Contributing

## Proposing a token

| Step | Do |
|---|---|
| 1 | Open an issue: name, value(s) per theme, where it is used, why an existing token fails |
| 2 | Prefer a semantic token that aliases an existing primitive. New primitives need a design reason (new hue/step) |
| 3 | Edit `tokens/foundations/*.json` or `tokens/themes/*.json` (DTCG: `$value`, `$type`, aliases as `{color.blue.800}`). Add the token to **all five themes** |
| 4 | If it is a text/background or UI-boundary token, add pairs to `tokens/contrast-pairs.json` |
| 5 | `npm run check`; commit the regenerated `dist/` together with the source |
| 6 | Update the relevant foundation/theme doc and `CHANGELOG.md` |

Naming: kebab-case, role not appearance (`ink-muted`, not `gray-text`). Do not rename tokens without a **BREAKING** changelog entry.

## Proposing a component

| Step | Do |
|---|---|
| 1 | Issue with the real use case from one of the three repos (a second use before promoting) |
| 2 | Add `components/<surface>/<name>.md`: anatomy, all states, tokens used, a11y notes, HTML snippet |
| 3 | Add token-only CSS to `src/components.css` (`ds-` prefix, zero hex) |
| 4 | Add it to `preview/index.html` and check all five themes |
| 5 | Complete the [accessibility checklist](docs/accessibility-checklist.md) in the PR |

## Review rules

| Rule | Detail |
|---|---|
| Reviewers | At least 1 approval; design-affecting changes need the design owner |
| CI gate | `npm run check` passes; `dist/` is up to date (rebuild yields no diff) |
| No raw color | No hex in `src/components.css`, templates or preview (grep gate: `grep -rnE '#[0-9a-fA-F]{3,8}\b' src templates preview`) |
| No purple, no emoji icons, no gradient decoration | See [principles](docs/principles.md) |
| Logo | Do not add logo files until the team approves one |
| Commits | Conventional commits: `feat(tokens):`, `fix(components):`, `docs:`, `build:` |
| Releases | Maintainer bumps `package.json`, edits CHANGELOG, tags `vX.Y.Z` |
