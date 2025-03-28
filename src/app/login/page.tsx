import React from "react";
import { Metadata } from "next";
import LoginPageClient from "./page-client";

export const metadata: Metadata = {
  title: "Login",
  description: "Login Page",
};

const LoginPage = () => {
  return <LoginPageClient />;
};

export default LoginPage;
