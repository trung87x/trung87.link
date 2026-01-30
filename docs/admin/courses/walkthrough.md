# Walkthrough: Quản lý Khóa học & Auto Test

Tài liệu này tổng hợp toàn bộ module Admin Courses, bao gồm tính năng mới "Sửa khóa học" và bộ kiểm thử tự động.

## 1. Tính năng người dùng

### Thêm khóa học mới

- Truy cập: `/admin/courses/new`
- Nhập thông tin và lưu.

### Sửa khóa học

- Truy cập: Danh sách khóa học -> Nhấn nút "Sửa" màu xanh.
- Form sẽ tự động điền thông tin cũ.
- Cập nhật và lưu lại (hỗ trợ sửa Slug, Giá, Trạng thái bán).

## 2. Kỹ thuật (Technical)

- **Server Action**: Sử dụng `createCourse` và `updateCourse` trong `actions.js` để thao tác dữ liệu an toàn.
- **Auth Bypass**: Cơ chế đặc biệt cho phép Playwright "giả danh" Admin bằng header `x-e2e-bypass`.

## 3. Kiểm thử (Testing)

Chúng ta sử dụng Playwright để tự động hóa quy trình kiểm tra (tránh việc phải click tay mỗi lần sửa code).

### File test: `tests/admin-courses.spec.js`

```bash
# Chạy test module này
npx playwright test tests/admin-courses.spec.js
```

### Kết quả mong đợi

- ✅ Test tự động đăng nhập (Bypass).
- ✅ Test tạo khóa học mới thành công.
- ✅ Test cập nhật khóa học thành công.
