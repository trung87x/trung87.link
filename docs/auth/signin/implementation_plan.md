# Final Architecture: Scalable Multi-Course Access Control

This document outlines the final implemented architecture for user authentication and course-specific content protection on `trung87.link`.

## Architecture Overview

The system uses a layered security approach following Next.js 15 App Router best practices:

1.  **Authentication (Middleware)**: Handled by NextAuth.js at the Edge. It ensures that users are logged in before they can even reach premium routes.
2.  **Authorization (Layouts)**: Handled by nested Layouts. It verifies if the logged-in user has "purchased" the specific course they are trying to view.
3.  **Data Management (Library)**: A centralized `students.js` file manages the whitelist of emails for each course.

---

## Component Details

### 1. Centralized Auth Logic

- **File**: [auth.js](file:///c:/Users/home/Github/work/trung87.link/src/lib/auth.js)
- **Role**: Configures Google Provider, custom sign-in page, and Middleware logic.
- **Security**: Protects `/dashboard` and premium `/blog/*` paths.

### 2. Multi-Course Student Management

- **File**: [students.js](file:///c:/Users/home/Github/work/trung87.link/src/lib/students.js)
- **Role**: Maps course IDs (slugs) to arrays of authorized email addresses.
- **Scalability**: Can be easily replaced with a database query in the future.

### 3. Per-Course Protection (Layouts)

- **Files**:
  - [react.school/layout.jsx](<file:///c:/Users/home/Github/work/trung87.link/src/app/(features)/blog/react.school/layout.jsx>)
  - [developer.mozilla.org/layout.jsx](<file:///c:/Users/home/Github/work/trung87.link/src/app/(features)/blog/developer.mozilla.org/layout.jsx>)
- **Role**: Checks `isStudent(email, courseID)`. If not authorized, renders the `<AccessDenied />` component instead of lesson content.

### 4. Custom Auth UI

- **Sign-in Page**: [page.jsx](<file:///c:/Users/home/Github/work/trung87.link/src/app/(auth)/signin/page.jsx>) - A premium dark-mode login experience.
- **Access Denied**: [AccessDenied.jsx](file:///c:/Users/home/Github/work/trung87.link/src/components/auth/AccessDenied.jsx) - Shown to logged-in users who haven't purchased a course.
- **Auth Button**: [AuthButton.jsx](file:///c:/Users/home/Github/work/trung87.link/src/components/auth/AuthButton.jsx) - Integrated into the Navbar for Login/Logout/Profile.

---

## Maintenance & Scaling

### Adding a new course

1. Create the course folder under `src/app/(features)/blog/`.
2. Add a `layout.jsx` to that folder (copy from `react.school` and update the ID).
3. Add the course ID to the `COURSE_ACCESS` object in `src/lib/students.js`.
4. Update `src/lib/auth.js` Middleware to protect the new path.

### Adding a new student

1. Open `src/lib/students.js`.
2. Add the student's Gmail address to the corresponding course array.
