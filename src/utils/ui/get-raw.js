import { promises as fs } from "fs";
import path from "path";

/**
 * Đọc nội dung của một file dưới dạng chuỗi (string) từ thư mục gốc của dự án.
 * Thường dùng để lấy mã nguồn của file và hiển thị lên UI.
 * * @param {string} relativePath - Đường dẫn tương đối tính từ thư mục gốc (Project Root).
 * @example getRaw("src/components/Button.jsx")
 * @returns {Promise<string>} Nội dung file hoặc chuỗi thông báo lỗi.
 */
export async function getRaw(relativePath) {
  // Sử dụng path.resolve để đảm bảo đường dẫn chính xác khi build
  const filePath = path.join(process.cwd(), relativePath);
  try {
    const content = await fs.readFile(filePath, "utf8");
    return content;
  } catch (err) {
    console.error("Lỗi đọc file:", err);
    return "// Không thể tải mã nguồn";
  }
}
