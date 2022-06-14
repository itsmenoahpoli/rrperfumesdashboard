const prodUrl = "https://rrperfumesapp.pwnp-ws.com/public/api/v1";
const devUrl = "http://localhost:8000/api/v1";

export const apiConstants = {
  BASE_URL: prodUrl,
  V1: {
    AUTH: {
      LOGIN: "/login",
      REQUEST_OTP: "/request-otp",
      VERIFY_OTP: "/verify-otp",
    },
    PRODUCTS: "/products",
    PRODUCT_CATEGORIES: "/product-categories",
    PRODUCT_MONITORING: "/product-monitoring",
    ORDERS: "/orders",
  },
};
