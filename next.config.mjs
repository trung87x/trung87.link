const nextConfig = {
  // 1. Chuyển sang chế độ xuất file tĩnh
  // output: "export", // Removed for Vercel
  images: {
    // unoptimized: true,
    // Khai báo danh sách các trang web được phép lấy ảnh
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // Cho phép tất cả các đường dẫn ảnh từ trang này
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "unsafe-none", // Hoặc loại bỏ header này nếu không cần thiết
          },
        ],
      },
    ];
  },
};

export default nextConfig;
