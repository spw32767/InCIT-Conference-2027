# UI development

For frontend UI work, read and use both project-local skills:

- `.agents/skills/impeccable/SKILL.md` for design, layout, typography, responsive behavior, and visual review.
- `.agents/skills/shadcn/SKILL.md` for component discovery, installation, composition, and customization.

Run shadcn commands in `frontend/`, where `components.json` lives. Prefer the
official shadcn registry for standard controls and add only needed components.
Preserve the approved conference palette and Montserrat font. Use semantic
tokens in `frontend/src/app/globals.css` when styling shadcn components.
Follow the user's requested scope; skill installation does not authorize
redesigning existing pages. Read `frontend/AGENTS.md` for Next.js guidance.

Before completing UI changes, check the affected desktop and mobile layouts
in the browser and run appropriate typecheck/build validation.
