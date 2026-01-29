# Walkthrough: Authentication & Course Access Control

We have completed the implementation of a professional-grade authentication and authorization system for `trung87.link`.

## Key Features Implemented

### 1. Premium Sign-in Experience

Users are now greeted with a custom-designed, dark-mode sign-in page at `/signin`.
![Sign-in Page Preview](<file:///c:/Users/home/Github/work/trung87.link/src/app/(auth)/signin/page.jsx#L4-L80>)

### 2. Intelligent Navbar Integration

The `AuthButton` component automatically detects the session state:

- **Logged Out**: Displays a "Đăng nhập với Google" button.
- **Logged In**: Displays the user's name, email, and high-resolution avatar with a "Đăng xuất" button.
  ![Navbar Preview](file:///c:/Users/home/Github/work/trung87.link/src/components/auth/AuthButton.jsx#L6-L39)

### 3. Scalable Authorization

We implemented a course-specific protection system. Even if logged in, only students who purchased the specific course can view it.

- **Path**: `src/app/(features)/blog/react.school/layout.jsx`
- **Logic**: Uses `isStudent(email, "course-id")`.

### 4. Access Denied UI

Authorized-but-unpurchased users see a dedicated page explaining how to get access.
![Access Denied Preview](file:///c:/Users/home/Github/work/trung87.link/src/components/auth/AccessDenied.jsx#L5-L55)

---

## Deployment Checklist for Vercel

To go live, ensure these Environment Variables are set in your Vercel Dashboard:

- `AUTH_SECRET`: Generate a new one for production.
- `AUTH_GOOGLE_ID`: Your Google Client ID.
- `AUTH_GOOGLE_SECRET`: Your Google Client Secret.
- `GITHUB_TOKEN`: For blog content fetching.

---

## Maintenance

To add a new student, simply update the `COURSE_ACCESS` map in `src/lib/students.js`.

```javascript
const COURSE_ACCESS = {
  "react.school": [
    "job.dinhquangtrung@gmail.com",
    "new-student@gmail.com", // Add here
  ],
};
```
