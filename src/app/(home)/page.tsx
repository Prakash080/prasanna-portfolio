import React from "react";
import { Metadata } from "next";
import HomePageClient from "./page-client";

export const metadata: Metadata = {
  title: "Home",
  description: "Home Page",
};

const HomePage = () => {
  return <HomePageClient />;
};

export default HomePage;
