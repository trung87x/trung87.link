# Cài đặt Swagger API Documentation

Dự án sẽ được tích hợp Swagger (OpenAPI) để tự động tạo tài liệu cho các API hiện có, cho phép kiểm tra và chạy thử trực tiếp trên trình duyệt.

## Đề xuất thay đổi

### 1. Cài đặt Thư viện

Cài đặt các thư viện cần thiết để tạo và hiển thị tài liệu API.

- `swagger-jsdoc`: Dùng để đọc các chú thích (annotations) trong code và tạo file cấu hình OpenAPI.
- `swagger-ui-react`: Thành phần giao diện React để hiển thị tài liệu Swagger.

### 2. Cấu hình Swagger (Backend)

Tạo một Route Handler để trả về dữ liệu chuẩn OpenAPI (JSON).

- [NEW] [api/docs/spec/route.js](file:///c:/Users/home/Github/work/trung87.link/src/app/api/docs/spec/route.js): File này sẽ quét toàn bộ thư mục `app/api` để tìm các chú thích JSDoc và trả về định dạng JSON của Swagger.

### 3. Giao diện Swagger (Frontend)

Tạo một trang giao diện để người dùng truy cập.

- [NEW] [(features)/swagger/page.jsx](<file:///c:/Users/home/Github/work/trung87.link/src/app/(features)/swagger/page.jsx>): Một Client Component sử dụng `swagger-ui-react` để hiển thị dữ liệu từ API Spec.

### 4. Gắn nhãn API (Annotations)

Thêm các đoạn chú thích chuẩn OpenAPI vào các file Route hiện có:

- [MODIFY] [api/payment/create/route.js](file:///c:/Users/home/Github/work/trung87.link/src/app/api/payment/create/route.js)
- [MODIFY] [api/webhook/payos/route.js](file:///c:/Users/home/Github/work/trung87.link/src/app/api/webhook/payos/route.js)

## Kế hoạch kiểm tra

1. Truy cập `localhost:3000/swagger` để kiểm tra giao diện Swagger.
2. Kiểm tra xem các API đã hiện đầy đủ các phương thức (POST, GET) và mô tả chưa.
3. Chạy thử tính năng "Try it out" của API `payment/create` trực tiếp trên giao diện Swagger.
