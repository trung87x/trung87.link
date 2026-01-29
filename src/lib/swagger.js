import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Trung87.link API Documentation",
      version: "1.0.0",
      description: "Tài liệu chi tiết về các API trong dự án trung87.link",
    },
    servers: [
      {
        url: process.env.NEXTAUTH_URL || "http://localhost:3000",
        description: "Server hiện tại",
      },
    ],
  },
  // Đường dẫn đến các file chứa chú thích Swagger
  apis: ["./src/app/api/**/*.js"],
};

export const getApiDocs = () => {
  const spec = swaggerJsdoc(options);
  return spec;
};
