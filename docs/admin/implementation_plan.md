# Kế hoạch mở rộng Database và tính năng Quản trị (Admin)

Kế hoạch này bao gồm việc chuẩn hóa cấu trúc Database để quản lý động giá tiền, khóa học, người dùng và đơn hàng, thay vì ghi cứng trong code.

## Đề xuất thay đổi

### 1. Database Schema (SQL trên Supabase)

Tạo các bảng mới để quản lý dữ liệu chuyên nghiệp hơn.

#### Bảng `courses` (Khóa học)

- `id`: UUID (Primary Key)
- `slug`: Text (Unique - dùng cho URL, ví dụ: 'react.school')
- `title`: Text (Tên khóa học)
- `description`: Text (Mô tả)
- `price`: Integer (Giá bán gốc)
- `price_sale`: Integer (Giá khuyến mãi)
- `created_at`: Timestamp

#### Bảng `profiles` (Thông tin người dùng)

#### Bảng `profiles` (Thông tin người dùng)

    - `id`: UUID (Primary Key, Tự sinh - Đã gỡ bỏ ràng buộc FK với Auth để hỗ trợ NextAuth)
    - `email`: Text (Unique)
    - `full_name`: Text
    - `role`: Text (Mặc định là 'user', tự động chuyển thành 'admin' cho email được chỉ định)
    - `created_at`: Timestamp

#### Bảng `enrollments` (Cập nhật)

- Thêm cột `status`: 'pending', 'paid', 'cancelled'.
- Thêm cột `updated_at`.

### 2. Tính năng Admin (Quản trị)

Tạo khu vực `/admin` dành riêng cho quản trị viên.

- **Dashboard**: Xem tổng doanh thu, số lượng người dùng mới, và các khóa học bán chạy nhất.
- **Quản lý Khóa học**: Thêm, sửa, xóa khóa học và cập nhật giá tiền nhanh chóng.
- **Quản lý Người dùng**: Xem danh sách học viên, chi tiết các khóa học họ đã mua.
- **Quản lý Hóa đơn**: Theo dõi toàn bộ lịch sử giao dịch từ PayOS.

### 3. Cập nhật Code Logic

- Cập nhật `/api/payment/create` để tự động lấy giá tiền từ bảng `courses` dựa trên `courseId`.
- Cập nhật logic Webhook để cập nhật trạng thái đơn hàng vào Database.

### 4. Phân quyền (Security)

- Tạo Middleware hoặc kiểm tra Session để chỉ cho phép User có `role === 'admin'` truy cập vào các trang `/admin`.

## Kế hoạch kiểm tra

1. Kiểm tra việc tạo đơn hàng với giá tiền động từ DB.
2. Kiểm tra các chức năng CRUD (Thêm/Sửa/Xóa) của Admin.
3. Kiểm tra tính bảo mật: Người dùng bình thường không thể vào trang Admin.
