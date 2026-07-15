# Shadcn-Only UI Policy

All UI elements in this app must use shadcn UI components.

## Required Rules

- Do not create custom UI components for app interfaces.
- Build buttons, inputs, cards, dialogs, menus, tables, and other UI with shadcn UI components only.
- If a needed component is missing, add the corresponding shadcn component instead of implementing a custom one.
- Keep styling and variants aligned with shadcn conventions already used in this repository.

## Implementation Guidance

- Prefer composing existing shadcn components over introducing new custom abstractions.
- If behavior is not covered by an existing component, extend through shadcn-supported props/variants and utility classes.
- If this policy changes, update this file and keep AGENTS.md references in sync.
