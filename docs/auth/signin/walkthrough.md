# Walkthrough: Xác thực & Phân quyền khóa học

Chúng ta đã hoàn thiện hệ thống xác thực (Authentication) và phân quyền (Authorization) chuyên nghiệp cho dự án `trung87.link`.

## Các tính năng chính

### 1. Trải nghiệm Đăng nhập Premium

Người dùng sẽ được chào đón bằng giao diện đăng nhập thiết kế riêng (Dark mode) cực đẹp tại `/signin`.
![Sign-in Page Preview](<file:///c:/Users/home/Github/work/trung87.link/src/app/(auth)/signin/page.jsx#L4-L80>)

### 2. Tích hợp Navbar thông minh

Component `AuthButton` tự động nhận diện trạng thái phiên làm việc:

- **Chưa đăng nhập**: Hiện nút "Đăng nhập với Google".
- **Đã đăng nhập**: Hiện tên, email và avatar chất lượng cao cùng nút "Đăng xuất".
  ![Navbar Preview](file:///c:/Users/home/Github/work/trung87.link/src/components/auth/AuthButton.jsx#L6-L39)

### 3. Phân quyền mở rộng (Dựa trên Database)

Hệ thống đã chuyển từ danh sách tĩnh sang quản lý động qua Database:

- **Logic**:
  1. **Tự động tạo Profile**: Khi đăng nhập Google lần đầu, hệ thống tự động tạo bản ghi trong bảng `profiles`.
  2. **Đồng bộ Quyền**: Tự động nhận diện quyền `admin` (cho email chỉ định) hoặc `user`.
  3. **Kiểm tra Mua khóa học**: Xác thực quyền truy cập dựa trên bảng `enrollments` trong Supabase.

### 4. Điều hướng sau Đăng nhập (Post-Login Redirect)

Hệ thống ghi nhớ trang bạn đang cố gắng truy cập trước khi đăng nhập:

- **Logic**: Khi truy cập một trang bảo mật (ví dụ: một bài học Premium), Middleware sẽ tự động gán tham số `callbackUrl` vào đường dẫn `/signin`.
- **Xử lý**: Trang Đăng nhập sẽ trích xuất `callbackUrl` này và yêu cầu Google chuyển hướng bạn quay lại đúng trang đó ngay sau khi đăng nhập thành công, thay vì đưa bạn về Trang chủ.

### 5. Giao diện Từ chối truy cập (Access Denied)

Nếu người dùng đã đăng nhập nhưng chưa mua khóa học, họ sẽ thấy trang thông báo hướng dẫn cách đăng ký.
![Access Denied Preview](file:///c:/Users/home/Github/work/trung87.link/src/components/auth/AccessDenied.jsx#L5-L55)

---

## Danh sách kiểm tra Triển khai (Vercel)

Để đưa hệ thống lên môi trường Production, hãy đảm bảo các Biến môi trường sau đã được thiết lập trên Vercel:

- `AUTH_SECRET`: Tạo chuỗi ngẫu nhiên mới bảo mật.
- `AUTH_GOOGLE_ID`: Google Client ID của bạn.
- `AUTH_GOOGLE_SECRET`: Google Client Secret của bạn.
- `GITHUB_TOKEN`: Để fetch nội dung blog (nếu cần).

---

## Quản trị & Bảo trì

### Quản lý Người dùng

Cách làm thủ công (sửa file `src/lib/students.js`) đã **BỊ LOẠI BỎ**.

- **Người dùng**: Được quản lý tự động qua bảng `profiles` khi đăng nhập.
- **Admin**: Cấp quyền bằng cách sửa cột `role` thành `admin` trong bảng `profiles`.
- **Học viên**: Cấp quyền truy cập khóa học bằng cách thêm dòng mới vào bảng `enrollments` (hoặc để họ tự mua và thanh toán).
