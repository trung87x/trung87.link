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

### 4. Phân quyền (Security Enforcement)

Hiện tại hệ thống chỉ kiểm tra đăng nhập cơ bản. Cần bổ sung các lớp bảo mật sau:

- **Middleware Enforcement**:
  - Cập nhật `src/middleware.js` (qua `src/utils/auth/index.js`) để kiểm tra `auth?.user?.role === 'admin'`.
  - Tự động chuyển hướng người dùng không có quyền về trang chủ `/` hoặc `/unauthorized`.
- **Layout-level Guard**:
  - Bổ sung kiểm tra server-side trong `src/app/admin/layout.jsx` bằng cách gọi `auth()`.
  - Chặn đứng truy cập ngay cả khi middleware bị vượt qua (ví dụ: trong môi trường dev hoặc test).

## Kế hoạch kiểm tra

1. **Kiểm tra đăng nhập**:
   - Admin (`job.dinhquangtrung@gmail.com`) truy cập bình thường.
   - User thường (email khác) bị chặn và redirect.
2. **Kiểm tra tính năng CRUD**: Đảm bảo các Server Actions trong `/admin` cũng kiểm tra quyền admin.
3. **Kiểm tra Bypass**: Đảm bảo chế độ Bypass cho E2E test vẫn hoạt động với role `admin` giả lập.
