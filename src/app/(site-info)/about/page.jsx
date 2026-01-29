export const metadata = {
  title: "Giới thiệu | Portfolio",
  description:
    "Tìm hiểu thêm về tôi, kinh nghiệm và đam mê trong lập trình web.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="font-display mb-12 text-center text-5xl font-black tracking-tight text-[#5FB446] sm:text-6xl">
          Giới thiệu về tôi
        </h1>

        <div className="prose prose-lg prose-green dark:prose-invert mx-auto">
          <p className="text-xl leading-relaxed text-gray-700">
            Xin chào! Tôi là **Trung**, một Frontend Developer với niềm đam mê
            sâu sắc trong việc xây dựng các giao diện web hiện đại, hiệu quả và
            dễ sử dụng.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[#003366]">
            Hành trình của tôi
          </h2>
          <p className="text-gray-600">
            Tôi bắt đầu hành trình lập trình của mình với sự tò mò về cách các
            trang web hoạt động. Qua thời gian, niềm tò mò đó đã trở thành một
            sự nghiệp mà tôi hằng theo đuổi. Trong các dự án về dầu nhớt và hóa
            chất, tôi tập trung vào việc thể hiện sự chuyên nghiệp thông qua
            thiết kế sạch sẽ và tốc độ tải trang cực nhanh.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[#003366]">
            Kỹ năng chuyên môn
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
              <h3 className="font-bold text-[#5FB446]">Frontend Development</h3>
              <p className="mt-2 text-sm text-gray-600">
                React, Next.js, Tailwind CSS v4, Framer Motion.
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
              <h3 className="font-bold text-[#5FB446]">Design & UX</h3>
              <p className="mt-2 text-sm text-gray-600">
                Thiết kế trực quan, tối ưu hóa trải nghiệm người dùng,
                Responsive Design.
              </p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-bold text-[#003366]">
            Triết lý làm việc
          </h2>
          <p className="text-gray-600">
            Tôi tin rằng một sản phẩm tốt không chỉ đẹp mà còn phải hoạt động
            mượt mà và mang lại giá trị thực sự cho người dùng. Tôi luôn nỗ lực
            để viết code sạch, dễ bảo trì và luôn cập nhật những công nghệ mới
            nhất trong ngành.
          </p>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-block rounded-xl bg-[#5FB446] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#4a8f37]"
          >
            Hợp tác cùng tôi
          </a>
        </div>
      </section>
    </main>
  );
}
