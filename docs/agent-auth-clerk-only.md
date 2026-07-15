# Clerk-Only Auth Policy

This app uses Clerk for all authentication and authorization.

## Required Rules

- Use Clerk only. Do not add or use any other auth provider, custom auth flow, or session system.
- Keep `/dashboard` protected. Unauthenticated users must not be able to access this route.
- Redirect authenticated users away from `/` to `/dashboard`.
- Sign-in and sign-up must always open as Clerk modals.

## Implementation Guidance

- Use Clerk middleware and Clerk server/client APIs for route protection and auth state checks.
- If auth behavior changes, update this file and keep AGENTS.md references in sync.
