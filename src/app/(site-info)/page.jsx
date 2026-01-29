export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Sử dụng màu Xanh SHL làm chủ đạo */}
      <section className="bg-[#5FB446] py-24 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Xin chào 👋 Tôi là Trung
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
            Xây dựng web hiện đại với{" "}
            <span className="font-bold text-[#FCEA1D]">React, Tailwind v4</span>{" "}
            và các giải pháp tối ưu cho sản phẩm công nghiệp.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-lg bg-[#FCEA1D] px-8 py-3 font-bold text-[#003366] shadow-lg transition-colors hover:bg-yellow-300"
          >
            Liên hệ ngay
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <h3 className="mb-6 flex items-center text-3xl font-bold text-[#5FB446]">
          <span className="mr-4 h-1 w-10 bg-[#FCEA1D]"></span>
          Giới thiệu
        </h3>
        <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
          Tôi là một Frontend Developer đam mê tạo ra các giao diện người dùng
          trực quan và hiệu quả. Trong các dự án về dầu nhớt và hóa chất, tôi
          tập trung vào việc thể hiện sự chuyên nghiệp thông qua thiết kế sạch
          sẽ và tốc độ tải trang cực nhanh.
        </p>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto border-t border-gray-100 px-4 py-20">
        <h3 className="mb-10 text-3xl font-bold text-[#5FB446]">
          Dự án tiêu biểu
        </h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card Dự án 1 */}
          <div className="group rounded-2xl border border-gray-200 p-6 transition-all hover:border-[#5FB446] hover:shadow-xl">
            <h4 className="mb-3 text-xl font-bold text-[#003366] group-hover:text-[#5FB446]">
              UI Kit / Component Library
            </h4>
            <p className="text-gray-600">
              Hệ thống thành phần UI tùy biến cho các ứng dụng quản lý sản phẩm.
            </p>
          </div>

          {/* Card Dự án 2 */}
          <div className="group rounded-2xl border border-gray-200 p-6 transition-all hover:border-[#5FB446] hover:shadow-xl">
            <h4 className="mb-3 text-xl font-bold text-[#003366] group-hover:text-[#5FB446]">
              Personal Blog
            </h4>
            <p className="text-gray-600">
              Nơi tôi viết về trải nghiệm sử dụng Tailwind CSS v4 và BEM.
            </p>
          </div>

          {/* Card Dự án 3 */}
          <div className="group rounded-2xl border border-gray-200 p-6 transition-all hover:border-[#5FB446] hover:shadow-xl">
            <h4 className="mb-3 text-xl font-bold text-[#003366] group-hover:text-[#5FB446]">
              Portfolio Website
            </h4>
            <p className="text-gray-600">
              Trang web cá nhân hiển thị năng lực lập trình và thiết kế.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#F9FAFB] py-20 text-center">
        <h3 className="mb-6 text-3xl font-bold text-[#003366]">
          Liên hệ công việc
        </h3>
        <p className="mb-6 text-lg text-gray-600">
          Bạn có dự án cần tư vấn thiết kế website? Đừng ngần ngại:
        </p>
        <a
          href="mailto:trung.dinhquang@hotmail.com"
          className="text-2xl font-bold text-[#5FB446] underline decoration-[#FCEA1D] decoration-4 underline-offset-8 hover:text-[#4a8f37]"
        >
          trung.dinhquang@hotmail.com
        </a>
      </section>
    </main>
  );
}
