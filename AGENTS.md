<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices. ALWAYS refer to the relevant .md file BEFORE generating any code:

<!-- END:nextjs-agent-rules -->

# Project Agent Instructions

This file is the entrypoint for LLM coding instructions in this repository.

## Read order

- `docs/agent-auth-clerk-only.md` (Clerk-only authentication and route access policy)
- `docs/agent-ui-shadcn-only.md` (UI component policy: shadcn UI only, no custom components)

## Rule precedence

1. Direct user request
2. This file and `docs/agent-*.md`
3. Existing repository code conventions

If instructions conflict, preserve current behavior and request clarification.

## Maintenance

- Update these docs whenever project conventions change.
- Prefer updating the relevant module rather than adding duplicate guidance.
- Keep instruction text concrete and project-specific.
