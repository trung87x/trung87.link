export const metadata = {
  title: "Liên hệ | Portfolio",
  description:
    "Kết nối với tôi để hợp tác hoặc trao đổi về các dự án công nghệ.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* Tiêu đề */}
      <div className="mb-16 text-center">
        <h1 className="font-display text-4xl font-black tracking-tight text-gray-900 sm:text-6xl dark:text-white">
          Bắt đầu hợp tác
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
          Tôi luôn sẵn sàng thảo luận về những ý tưởng mới hoặc các dự án tiềm
          năng.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
        {/* Thông tin liên hệ */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Email trực tiếp
            </h3>
            <p className="text-avocado-500 mt-2 font-medium">
              contact@yourdomain.com
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Mạng xã hội
            </h3>
            <div className="mt-4 flex gap-6">
              <a
                href="#"
                className="hover:text-avocado-500 text-gray-600 dark:text-gray-400"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="hover:text-avocado-500 text-gray-600 dark:text-gray-400"
              >
                GitHub
              </a>
              <a
                href="#"
                className="hover:text-avocado-500 text-gray-600 dark:text-gray-400"
              >
                Facebook
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-900">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
              Lưu ý
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Tôi thường phản hồi trong vòng 24 giờ làm việc. Rất mong được kết
              nối với bạn!
            </p>
          </div>
        </div>

        {/* Form liên hệ */}
        <form action="#" method="POST" className="flex flex-col gap-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-900 dark:text-white"
            >
              Họ và tên
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="focus:ring-avocado-500 mt-2.5 block w-full rounded-xl border-0 bg-white px-4 py-3 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset focus:ring-2 dark:bg-zinc-800 dark:text-white dark:ring-white/10"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="focus:ring-avocado-500 mt-2.5 block w-full rounded-xl border-0 bg-white px-4 py-3 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset focus:ring-2 dark:bg-zinc-800 dark:text-white dark:ring-white/10"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-900 dark:text-white"
            >
              Lời nhắn
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className="focus:ring-avocado-500 mt-2.5 block w-full rounded-xl border-0 bg-white px-4 py-3 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset focus:ring-2 dark:bg-zinc-800 dark:text-white dark:ring-white/10"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-avocado-500 hover:bg-avocado-600 focus-visible:outline-avocado-500 rounded-xl px-8 py-4 text-center text-sm font-bold text-white shadow-sm transition-colors focus-visible:outline focus-visible:outline-2"
          >
            Gửi yêu cầu
          </button>
        </form>
      </div>
    </section>
  );
}
