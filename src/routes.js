import { lazy } from "react";

const HomePage = lazy(() => import("./pages/Home"));
const AuthPage = lazy(() => import("./pages/Auth"));

export default [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/auth",
    exact: true,
    component: AuthPage,
  },
];
