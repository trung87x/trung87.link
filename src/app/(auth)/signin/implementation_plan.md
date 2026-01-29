# Reorganizing Authentication Structure

The user pointed out that auth-related files are scattered and redundant. This plan streamlines the structure.

## Proposed Changes

### [Centralizing Logic]

- Move [auth.js](file:///c:/Users/home/Github/work/trung87.link/src/auth.js) to `src/lib/auth.js`.

### [Cleaning up Routes]

- Move [page.jsx](<file:///c:/Users/home/Github/work/trung87.link/src/app/(auth)/auth/signin/page.jsx>) to `src/app/(auth)/signin/page.jsx` to remove the redundant `/auth/` prefix in the URL.
- Delete the empty `src/app/(auth)/auth` folder.

### [Grouping Components]

- Move [AuthButton.jsx](file:///c:/Users/home/Github/work/trung87.link/src/components/AuthButton.jsx) to `src/components/auth/AuthButton.jsx`.

### [Updating Imports]

- Update all files referencing these moved files (Layout, Middleware, API Route).

## Verification Plan

1. Verify `/signin` page renders correctly.
2. Verify Navbar `AuthButton` still works.
3. Verify sign-in flow still redirects correctly.
