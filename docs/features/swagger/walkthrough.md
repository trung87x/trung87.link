# Walkthrough - Tích hợp Swagger API Documentation

Mục tiêu: Cài đặt hệ thống tài liệu API tự động Swagger (OpenAPI) để quản lý và chạy thử các API trong dự án.

## Các thay đổi đã thực hiện

### 1. Cài đặt thư viện

Đã cài đặt `swagger-jsdoc` và `swagger-ui-react` để xử lý định dạng OpenAPI và hiển thị giao diện người dùng.

### 2. Thiết lập Hệ thống Swagger

- **Library**: Tạo file [src/lib/swagger.js](file:///c:/Users/home/Github/work/trung87.link/src/lib/swagger.js) để cấu hình thông tin chung của API.
- **Spec API**: Tạo Route Handler tại [api/docs/spec/route.js](file:///c:/Users/home/Github/work/trung87.link/src/app/api/docs/spec/route.js) để tự động quét code và trả về dữ liệu JSON chuẩn Swagger.
- **Swagger UI**: Tạo trang hiển thị tại [(features)/swagger/page.jsx](<file:///c:/Users/home/Github/work/trung87.link/src/app/(features)/swagger/page.jsx>).

### 3. Gắn tài liệu vào API (Annotations)

Đã thêm các đoạn chú thích (OpenAPI Annotations) vào:

- **Payment Create**: [api/payment/create/route.js](file:///c:/Users/home/Github/work/trung87.link/src/app/api/payment/create/route.js)
- **PayOS Webhook**: [api/webhook/payos/route.js](file:///c:/Users/home/Github/work/trung87.link/src/app/api/webhook/payos/route.js)

## Kết quả

Bây giờ bạn có thể truy cập vào đường dẫn:
👉 **`http://localhost:3000/swagger`**

Tại đây, bạn sẽ thấy toàn bộ danh sách API, mô tả chi tiết các tham số và có thể nhấn nút **"Try it out"** để chạy thử API ngay lập tức mà không cần dùng trình tải bên ngoài.
