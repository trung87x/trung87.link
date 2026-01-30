# Kế hoạch Kiểm tra Tự động (Automated Testing)

Mục tiêu: Đảm bảo tính ổn định của website thông qua kiểm thử tự động End-to-End (E2E) với Playwright.

## 1. Cài đặt Playwright

- Cài đặt thư viện: `npm init playwright@latest` (hoặc thủ công).
- Cấu hình `playwright.config.js`:
  - Base URL: `http://localhost:3000`
  - Browser: Chromium, Firefox, Webkit.
  - Test Dir: `tests/`

## 2. Kịch bản Test: Site Info

Kiểm tra các trang thông tin cơ bản để đảm bảo không có lỗi 404 hoặc vỡ giao diện.

### File: `tests/site-info.spec.js`

1. **Trang chủ (`/`)**:
   - Truy cập trang chủ.
   - Kiểm tra tiêu đề trang (Title).
   - Kiểm tra sự tồn tại của các thành phần chính (Navbar, Footer).

2. **Trang Giới thiệu (`/about`)**:
   - Truy cập `/about`.
   - Kiểm tra heading chính.

3. **Trang Liên hệ (`/contact`)**:
   - Truy cập `/contact`.
   - Kiểm tra form liên hệ (nếu có) hoặc thông tin liên hệ.

## 3. Chạy Test

- Lệnh: `npx playwright test`
- Xem báo cáo: `npx playwright show-report`
