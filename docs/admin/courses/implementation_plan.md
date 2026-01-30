# Kế hoạch: Module Admin Courses

Mục tiêu: Hoàn thiện tính năng quản lý khóa học (Thêm/Sửa/Xóa) và kiểm thử tự động.

## 1. Tính năng Edit Course

Đã hoàn thành các bước:

- Backend: Thêm `updateCourse` vào `actions.js`.
- Frontend: Tạo trang `/admin/courses/[id]` với form pre-fill dữ liệu.
- Navigation: Gắn link vào nút "Sửa" ở trang danh sách.

## 2. Kiểm thử Tự động (Playwright)

File test: `tests/admin-courses.spec.js`

### Chiến lược Bypass Auth

Để Playwright vào được Admin mà không cần Google Login:

- Gửi Header: `x-e2e-bypass: true`.
- Server logic (`src/utils/auth/index.js`): Nhận diện header này và trả về session Admin giả lập.

### Kịch bản Test

1. **Create**:
   - Vào `/admin/courses/new`.
   - Điền form (Tên: Test Course, Giá: 100k).
   - Submit -> Redirect về list -> Check có tên khóa học.
2. **Edit**:
   - Vào lại khóa học vừa tạo (hoặc dùng ID).
   - Sửa tên thành "Updated Course".
   - Submit -> Redirect -> Check tên mới.

## 3. Deployment

- Đảm bảo biến môi trường `NODE_ENV` không phải là `production` khi chạy test bypass.
