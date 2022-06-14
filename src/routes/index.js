import { Navigate } from "react-router-dom";
import {
  BiHomeAlt,
  BiShoppingBag,
  BiCart,
  BiFile,
  BiUserPin,
  BiBarChartAlt,
  BiPoll,
} from "react-icons/bi";

import { adminRoutes } from "routes/admin";
import { managerRoutes } from "routes/manager";
import { employeeRoutes } from "routes/employee";

// AUTH PAGES
import { LoginPage } from "pages/auth";

// COMMON PAGES
import { DashboardPage } from "pages/dashboard";

// PRODUCTS PAGES
import { ProductListPage, ProductMonitoringPage } from "pages/products";
// ORDERS PAGES
import { OrderListPage } from "pages/orders";

const appRoutesByRole = (role) => {
  const roleRoutes = {
    admin: adminRoutes,
    manager: managerRoutes,
    employee: employeeRoutes,
  };

  if (role === null) return {};

  return roleRoutes[role];
};

const getUserRole = () => {
  return localStorage.getItem("user-role") ?? null;
};

export const appRoutes = [
  // {
  //   path: "/",
  //   component: <Navigate to="/dashboard" replace />,
  //   meta: {
  //     name: "Dashboard",
  //     auth: true,
  //     sidebarItem: false,
  //   },
  // },
  {
    path: "/login",
    name: "auth-login",
    component: <LoginPage />,
    meta: {
      name: "Log In",
      auth: true,
      sidebarItem: false,
    },
  },
  {
    path: "/dashboard",
    name: "app-dashboard",
    component: <DashboardPage />,
    meta: {
      name: "Dashboard",
      auth: true,
      sidebarItem: true,
      icon: <BiHomeAlt />,
    },
  },
  {
    path: "/products/monitoring",
    name: "app-products",
    component: <ProductMonitoringPage />,
    meta: {
      name: "Inventoy Monitoring",
      auth: true,
      sidebarItem: true,
      icon: <BiBarChartAlt />,
    },
  },
  {
    path: "/products",
    name: "app-products",
    component: <ProductListPage />,
    meta: {
      name: "Products",
      auth: true,
      sidebarItem: true,
      icon: <BiShoppingBag />,
    },
  },
  {
    path: "/orders",
    name: "app-products",
    component: <OrderListPage />,
    meta: {
      name: "Orders",
      auth: true,
      sidebarItem: true,
      icon: <BiCart />,
    },
  },
  // {
  //   path: "/products",
  //   name: "app-products",
  //   component: <DashboardPage />,
  //   meta: {
  //     name: "Customers List",
  //     auth: true,
  //     sidebarItem: true,
  //     icon: <BiUserPin />,
  //   },
  // },
  // {
  //   path: "/products",
  //   name: "app-products",
  //   component: <DashboardPage />,
  //   meta: {
  //     name: "App Users",
  //     auth: true,
  //     sidebarItem: true,
  //     icon: <BiUserPin />,
  //   },
  // },
  // {
  //   path: "/products",
  //   name: "app-products",
  //   component: <DashboardPage />,
  //   meta: {
  //     name: "App Logs",
  //     auth: true,
  //     sidebarItem: true,
  //     icon: <BiPoll />,
  //   },
  // },
];
