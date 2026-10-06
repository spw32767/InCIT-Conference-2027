# UI development

For frontend UI work, read and use both project-local skills:

Read `frontend/PRODUCT.md` and `frontend/DESIGN.md` first. These record the
owner-confirmed information-only scope and visual system. The latest baseline
audit is `docs/ui-audit-2026-10-06.md`; its follow-up records the implemented fixes.
Run Impeccable from `frontend/` using the skill launcher at
`../.agents/skills/impeccable/scripts/impeccable.cmd` on Windows.

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

# Conference copy

Preserve owner-supplied/authorized text verbatim. UI redesign does not authorize rewriting, summarizing or adding conference copy. The owner handles development and a separate reviewer checks wording. Request supplied text if external-source reproduction is restricted; do not silently replace it with paraphrases.
