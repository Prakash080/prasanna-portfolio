import React from "react";
import { Metadata } from "next";
import AboutPageClient from "./page-client";

export const metadata: Metadata = {
  title: "About",
  description: "About Page",
};

const AboutPage = () => {
  return <AboutPageClient />;
};

export default AboutPage;
