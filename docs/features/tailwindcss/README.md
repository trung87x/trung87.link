# Tailwind CSS UI Lab

The **Tailwind CSS UI Lab** is a feature module designed to showcase a comprehensive collection of UI components, layouts, and page examples built with Tailwind CSS. It serves as both a development playground, a reference library, and a learning hub for the project.

## Directory Structure

The module is located at `src/app/(features)/tailwindcss` and follows a structured hierarchy:

```
src/app/(features)/tailwindcss/
├── (ui)/               # Core library implementation
│   ├── items.jsx       # Single source of truth for navigation data
│   ├── layout.jsx      # Main layout with Sidebar and Content area
│   ├── page.jsx        # Landing page displaying all categories
│   ├── application-ui/ # 'Application UI' category routes
│   ├── marketing/      # 'Marketing' category routes
│   ├── ecommerce/      # 'Ecommerce' category routes
│   └── kit/            # 'UI Kit' category routes
│
└── learn/              # Educational resources and roadmaps
    ├── blocks/         # "Building Blocks" Learning Roadmap
    │   ├── marketing/  # Marketing track exercises
    │   ├── ecommerce/  # Ecommerce track exercises
    │   └── page.jsx    # Roadmap overview page
    │
    └── kit/            # "Catalyst Kit" Mastery
        ├── 01-fundamentals/
        ├── 02-forms/
        ├── ...
        └── page.jsx    # Unified Showcase & Tutorial Index
```

## Key Components

### 1. Navigation Data (`(ui)/items.jsx`)

This file exports the `NAVIGATION` constant, which defines the entire structure of the feature.

- **Purpose**: Centralizes the definition of categories regarding the UI Lab.
- **Updates**: Now includes a **"Learn"** tab with references to:
  - **Building Blocks**: The structured roadmap for mastering layouts.
  - **Catalyst Kit**: The dedicated area for mastering the Catalyst component library.

### 2. Learning Resources (`learn/`)

This directory allows for a focused learning experience, separated from the raw component library.

- **Blocks (`/learn/blocks`)**: A structured roadmap divided into "Marketing Master", "Application UI Pro", and "Ecommerce Specialist". It guides you through building complex layouts from scratch.
- **Kit (`/learn/kit`)**: A combined Showcase and Tutorial hub for the Tailwind Catalyst library. It includes interactive modules (Fundamentals, Forms, Data Display) and full-page examples.

## How to Add New Components

To add a new component or page example to the main library:

1.  **Create the Page Component**:
    - Create your folder and `page.jsx` inside the appropriate category directory in `src/app/(features)/tailwindcss/(ui)/...`.

2.  **Register in Navigation**:
    - Open `src/app/(features)/tailwindcss/(ui)/items.jsx`.
    - Add your new item to the `items` array of the respective section.

3.  **Verify**:
    - The new item will automatically appear in the Sidebar and on the Landing Page.

## Categories

- **Learn**: Educational roadmaps (Blocks) and component mastery (Kit).
- **Application UI**: Components for building web application interfaces (Forms, Lists, Navigation).
- **Marketing**: Components for landing pages and marketing sites (Heroes, Features, Footers).
- **Ecommerce**: Components for online stores (Product lists, Carts, Checkout).
- **UI Kit**: Atomic components and base elements.

<!--  -->
