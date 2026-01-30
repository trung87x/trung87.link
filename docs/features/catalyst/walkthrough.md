# Catalyst Showcase Walkthrough

I have successfully implemented the Catalyst Showcase feature with 4 new pages using `ui/catalyst` atom components.

## Feature Overview

The showcase demonstrates how to build pages of varying complexity using Tailwind Catalyst.

### 1. Landing Page

- **URL**: `http://localhost:3000/catalyst`
- **Features**:
  - Introduction to the showcase.
  - Links to Basic, Intermediate, and Advanced examples.

### 2. Basic: Contact Form

- **URL**: `http://localhost:3000/catalyst/contact`
- **Components Used**:
  - `Fieldset`, `Field`, `Label` for layout.
  - `Input`, `Textarea` for data entry.
  - `Button` for submission.

### 3. Intermediate: Settings

- **URL**: `http://localhost:3000/catalyst/settings`
- **Components Used**:
  - `AvatarButton` for profile picture.
  - `Select` for language choice.
  - `Switch` for toggles.
  - `RadioGroup` for visibility settings.

### 4. Advanced: Dashboard

- **URL**: `http://localhost:3000/catalyst/dashboard`
- **Components Used**:
  - `Table` for data display.
  - `Badge` for status indication.
  - `Dropdown` for row actions (click the ellipsis icon).
  - `Pagination` for navigation.

## How to Verify

1.  Start your development server:
    ```bash
    pnpm dev
    ```
2.  Open your browser to [http://localhost:3000/catalyst](http://localhost:3000/catalyst).
3.  Click through each example card to verify the pages render correctly.
