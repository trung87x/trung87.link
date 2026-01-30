# Walkthrough - Tính năng Thêm khóa học mới

Mục tiêu: Cho phép Admin dễ dàng mở rộng danh mục khóa học bằng cách thêm dữ liệu trực tiếp từ giao diện quản trị.

## Các thay đổi đã thực hiện

### 1. Giao diện Form Tạo mới

Đã xây dựng trang [src/app/admin/courses/new/page.jsx](file:///c:/Users/home/Github/work/trung87.link/src/app/admin/courses/new/page.jsx) với đầy đủ các trường thông tin:

- Tên khóa học, Slug (URL).
- Mô tả chi tiết.
- Giá bán và Giá khuyến mãi (VND).
- Tích hợp sẵn nút "Hủy" và "Lưu" tiện lợi.

### 2. Xử lý Logic (Server Action)

Đã triển khai [src/app/admin/courses/actions.js](file:///c:/Users/home/Github/work/trung87.link/src/app/admin/courses/actions.js) để:

- Kiểm tra quyền Admin trước khi lưu để đảm bảo bảo mật.
- Tự động insert vào bảng `courses` trong database.
- Tự động làm mới danh sách (Revalidate) ngay khi lưu thành công.

### 3. Cập nhật trang Quản lý

Nút "Thêm khóa học mới" tại trang [Quản lý khóa học](file:///c:/Users/home/Github/work/trung87.link/src/app/admin/courses/page.jsx) hiện đã được kích hoạt và dẫn trực tiếp đến Form tạo mới.

## Kết quả

Bạn hiện đã có thể:

1. Truy cập vào trang Quản lý khóa học.
2. Nhấn nút **Thêm khóa học mới**.
3. Nhập thông tin và nhấn **Lưu**.
4. Khóa học sẽ xuất hiện ngay lập tức trong bảng danh sách và database.

Hệ thống quản trị của bạn giờ đây đã thực sự hoàn thiện các thao tác cơ bản để vận hành nội dung!

## Kiểm thử Tự động (Automated Testing)

Đã tích hợp **Playwright** - Công cụ kiểm thử hiện đại để đảm bảo chất lượng phần mềm.

- **Cấu hình**: `playwright.config.js` đã được thiết lập.
- **Test Suite**: `tests/site-info.spec.js` kiểm tra các trang Site Info (`/`, `/about`, `/contact`).
- **Kết quả**: 3/3 Tests Passed (đã xác thực tiêu đề và nội dung trang).
- **Cách chạy**: Dùng lệnh `npx playwright test`.

Xem chi tiết tại: [docs/testing/walkthrough.md](file:///c:/Users/home/Github/work/trung87.link/docs/testing/walkthrough.md)
