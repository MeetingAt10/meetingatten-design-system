# Imagery

Twenty transparent 3D renders for the marketing surfaces: the ACCS landing, the Meeting At 10 site and this showcase. They are decoration, not documentation: glass, wireframe and ribbon forms in the system's navy, amber and emerald that float over the cool canvas next to the real product. Everything is proposed, not approved.

The files live in `assets/imagery/` (WebP with alpha, 720px on the long side, 55 to 245 KB each) and are listed in `assets/imagery/imagery.json`. They ship in the package under `@meetingat10/design-system/assets/imagery/<name>.webp`.

## The renders

| Name | Subject |
|---|---|
| `linked-c-liquid-glass` | Linked C mark in liquid glass (proposed ACCS motif, not an approved logo) |
| `linked-c-frosted` | Linked C mark in frosted acrylic (proposed ACCS motif, not an approved logo) |
| `neural-cluster` | Network of glass nodes around a core sphere |
| `neural-sphere` | Sphere of connected glowing nodes |
| `fiber-ring` | Ring of fibre-optic light strands |
| `microchip-wafer` | Silicon wafer with a grid of chips |
| `cipher-rings` | Interwoven rings with ribbed bands |
| `frosted-dodecahedron` | Frosted glass dodecahedron |
| `frosted-polyhedron` | Faceted crystal polyhedron |
| `ribbon-torus` | Twisted ribbon torus in navy and ice blue |
| `glass-discs` | Two intersecting glass discs |
| `wire-tetrahedron` | Wireframe tetrahedron with nodes |
| `wire-octahedron` | Wireframe octahedron with nodes |
| `glass-sphere` | Liquid glass sphere |
| `swirl-sphere` | Glass sphere with a swirling core |
| `mobius-loop` | Triangular Mobius loop |
| `faceted-mobius` | Faceted infinity loop |
| `grid-cube` | Cube built from glass cells |
| `wire-cube` | Nested structural grid cube |
| `fin-sculpture` | Flame-like iridescent fin sculpture |

## How they were made

The renders are AI-generated 3D images from the `meeting-at-ten-assets` set (2026-10-28), made on a white ground. `scripts/key-imagery.py` (Python with Pillow) turns the white into transparency with a colour-to-alpha pass: alpha comes from each pixel's distance to white, the colour is un-premultiplied so edges stay clean, the result is trimmed to the artwork and resized to at most 720px, then saved as WebP. The script is the record of how to key a new render; the manifest names each source.

## Using them

```tsx
import { FloatingArt, imagery } from '@meetingat10/design-system/react';
import sphere from '@meetingat10/design-system/assets/imagery/neural-sphere.webp';

const { width, height } = imagery['neural-sphere'];

<FloatingArt src={sphere.src} width={width} height={height} depth={24} priority />
```

`imagery` is a typed record of every render: `file`, `width`, `height` and `subject`. Import the image file itself so the bundler fingerprints it (Next.js gives an object, so pass `.src`; Vite gives the URL string), and always give `width` and `height` so the render never shifts the layout. In plain CSS, use `<img class="ds-art ds-art--float" src="..." alt="" width="720" height="700">`. See [FloatingArt](../components/expressive/floating-art.md).

| Rule | Detail |
|---|---|
| Sizing | Show a render at most at its intrinsic width (720px) or at half that for a constellation; they are not vector files and soften when stretched. Let `width: 100%` inside a sized wrapper do the scaling |
| Loading | `priority` only for the one or two renders in the first viewport; everything else stays lazy |
| Ground | Use them on the canvas or a sheet. The soft ink shadow (`--ds-art-shadow`) is drawn for light and dark; do not add a second shadow or a frame |
| Count | Three to five on a screen. They are an accent next to the product, not wallpaper |
| Motion | The float, the pointer parallax and the scroll parallax belong to the [expressive layer](motion.md) and stop under reduced motion |

## Alt text

The renders carry no information, so they are decorative: `alt=""` (the FloatingArt default). Give `alt` text only when a render is the content of the page, and then describe what it shows in a few words ("A glass sphere with a swirling core"), not what it stands for. Never put a lane, permission or confidentiality meaning on a render.

## What they are not

- The linked-C renders are a proposed motif for ACCS, not an approved logo. Do not use them as the ACCS mark, in the navbar, on the door plate or anywhere the logo belongs. The ACCS wordmark is still the [door plate](../components/identity/door-plate.md); the Meeting At 10 mark is the [Logo](../components/identity/logo.md).
- Never place a render beside an official QCU seal or logo, and never use one to imply that the college, the university or any office endorses the product.
- A render does not stand in for a real screenshot. Show the product (a [Timetable](../components/scheduling/timetable.md), a slot picker) at its real scale and use renders around it.

## Pairings

A pairing is a suggestion for a section's mood, not a rule that a lane owns a form.

| Section | Renders |
|---|---|
| Community | `neural-cluster`, `neural-sphere` |
| Consultations | `glass-discs`, `glass-sphere` |
| Reports | `frosted-dodecahedron`: contained and faceted, to read as careful. Keep it small, and still never use color or imagery to signal confidentiality |
| Evaluations | `mobius-loop` |
| Assistant | `swirl-sphere` |
| Admin | `grid-cube` |
| Notifications | `fiber-ring` |
