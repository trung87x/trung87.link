# Implementation Plan - Catalyst Showcase

Goal: Create a new feature section `src/app/(features)/catalyst` to demonstrate the capabilities of the `ui/catalyst` atom components through pages ranging from basic to advanced complexity.

## User Review Required

- **Topics Selection**: I propose the following themes:
  1.  **Basic**: `Contact Form` - Demonstrates form elements (Input, Button, Text, Heading).
  2.  **Intermediate**: `User Settings` - Demonstrates layout and state controls (Switch, Select, Avatar, Fieldset).
  3.  **Advanced**: `Data Dashboard` - Demonstrates complex data presentation (Table, Pagination, Badge, Dropdown, Dialog).

## Proposed Changes

### [New Feature] Catalyst Showcase

#### [NEW] `src/app/(features)/catalyst/page.jsx`

- Main landing page for the showcase.
- Links to the sub-pages.

#### [NEW] `src/app/(features)/catalyst/contact/page.jsx` (Basic)

- detailed contact form using `Fieldset`, `Input`, `Textarea`, `Button`.

#### [NEW] `src/app/(features)/catalyst/settings/page.jsx` (Intermediate)

- Profile settings page.
- Uses `Switch`, `Avatar`, `Select`, `Radio`.

#### [NEW] `src/app/(features)/catalyst/dashboard/page.jsx` (Advanced)

- Data view with a `Table`.
- Uses `Badge`, `Dropdown` (for row actions), `Pagination`.

## Verification Plan

### Manual Verification

- Navigate to `/catalyst` and verify links work.
- Interact with form elements in `/catalyst/contact`.
- Toggle switches in `/catalyst/settings`.
- Check table rendering and dropdowns in `/catalyst/dashboard`.
