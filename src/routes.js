import { lazy } from "react";

const HomePage = lazy(() => import("./pages/Home"));
const LoginPage = lazy(() => import("./pages/Auth/LoginPage"));
const RegisterPage = lazy(() => import("./pages/Auth/RegisterPage"));
const ForgotPasswordPage = lazy(() => import("./pages/Auth/ForgotPasswordPage"));
const AboutPage = lazy(() => import("./pages/About"));
const NewPage = lazy(() => import("./pages/New"));
const TagPage = lazy(() => import("./pages/Tag"));

export default [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/login",
    exact: true,
    component: LoginPage,
  },
  {
    path: "/register",
    exact: true,
    component: RegisterPage,
  },
  {
    path: "/forgot-password",
    exact: true,
    component: ForgotPasswordPage,
  },
  {
    path: "/about",
    exact: true,
    component: AboutPage,
  },
  {
    path: "/news",
    exact: true,
    component: NewPage,
  },
  {
    path: "/tags",
    exact: true,
    component: TagPage,
  },
];
