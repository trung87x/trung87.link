# Task Checklist: Admin Courses Feature

- [x] Create Edit Page UI (`/admin/courses/[id]`)
- [x] Implement `updateCourse` server action
- [x] Update List Page to link to Edit Page
- [x] Create E2E Tests (`tests/admin-courses.spec.js`)
  - [x] Test Auth Bypass
  - [x] Test Create Course
  - [x] Test Edit Course
- [ ] Verify manually
- [x] Fix Dynamic Pricing
  - [x] Refactor `AccessDenied.jsx` to receive `courseData`
  - [x] Update Layouts to fetch and pass course data
  - [x] Verify pricing is dynamic and correct
