# Home design preview

The Home hero uses a text-left/image-right composition and layered SVG curves,
inspired by https://ict.up.ac.th/hackathon2025/. Its heading uses the full
conference name from https://incit2026.siam.edu/, with the year changed to 2027.
On desktop, the heading breaks after “on”, with 2027 on the second line.
Mobile layouts allow additional wrapping for readability. The hero contains
only the heading and action links beside the illustration. Its layered curves
sweep down to the right, and the globe is shifted right on wide screens.
Header, page sections, and footer share the same 1280px content container
and responsive side margins.

The existing palette and Montserrat font are retained. Shared `section-light`
and `section-paper` classes provide subtle background changes between sections.
About content and all Important Dates are illustrative and must be replaced
with approved information. The page labels these examples explicitly.

## Hero asset

Generated with the built-in ImageGen tool. The transparent result is stored as
`frontend/public/images/incit-2027-hero.webp`, at 1024 × 1024 pixels, and displayed
through Next.js Image with responsive `sizes`. SVG waves are native page code.

Generation prompt:

> Use case: stylized-concept. Asset type: right-hand hero illustration for an academic information technology conference website, InCIT 2027. Create an elegant premium 3D editorial illustration of a connected globe made of fine navy meridians and softly luminous pale cyan network nodes, surrounded by three tasteful floating technology objects: a slim laptop displaying abstract data shapes, a small layered processor chip, and a transparent research/data panel. Compact cohesive composition, slightly isometric perspective, globe as central focal point. Matte ceramic navy and slate, frosted glass, pale blue surfaces. Strict palette #132238, #364E68, #98CCD3, #EBF0F6 and white. Designed to sit on a dark navy curved SVG background in a website, with light cyan rim illumination and clear silhouette. Transparent background with real alpha; all objects fully within frame, no clipping. Sophisticated academic visual, no people, no text, no logos, no watermark, no ground plane, no background rectangle. Square composition.
