# Walkthrough: Kiểm thử Tự động với Playwright

Chúng ta đã tích hợp thành công Playwright để kiểm tra tự động trang web, giúp phát hiện lỗi giao diện và chức năng sớm nhất có thể.

## 1. Cài đặt & Cấu hình

- **Cài đặt thư viện**: Đã thêm `@playwright/test` vào dự án.
- **File cấu hình**: `playwright.config.js` được tạo ở thư mục gốc, thiết lập sẵn `baseURL: http://localhost:3000`.

## 2. Kịch bản Test đã viết

### A. Site Info (`tests/site-info.spec.js`)

Kịch bản này kiểm tra 3 trang cơ bản nhất của website:

1.  **Trang chủ (`/`)**: Đảm bảo tải thành công, tiêu đề đúng, có thanh điều hướng (Navbar).
2.  **Giới thiệu (`/about`)**: Đảm bảo truy cập được và hiển thị đúng nội dung.
3.  **Liên hệ (`/contact`)**: Đảm bảo truy cập được và hiển thị đúng thông tin.

### B. Auth Database (`tests/db-auth.spec.js`)

Kịch bản này kiểm tra logic lưu trữ dữ liệu người dùng (Integration Test):

- **Mục tiêu**: Đảm bảo khi người dùng đăng nhập, thông tin được lưu đúng vào bảng `profiles` trong SQL.
- **Cách thức**: Test kết nối trực tiếp đến Supabase, giả lập việc tạo profile và kiểm tra dữ liệu sau khi tạo.

## 3. Cách chạy test

Để chạy kiểm thử, bạn mở Terminal và gõ:

```bash
npx playwright test
```

Nếu muốn xem giao diện trực quan khi test (Browser mode):

```bash
npx playwright test --ui
```

## 4. Báo cáo kết quả

Sau khi chạy xong, Playwright sẽ tạo một báo cáo HTML chi tiết. Bạn có thể xem bằng lệnh:

```bash
npx playwright show-report
```
