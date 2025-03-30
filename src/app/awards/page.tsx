import React from "react";
import { Metadata } from "next";
import AwardsPageClient from "./page-client";

export const metadata: Metadata = {
  title: "Awards",
  description: "Awards Page",
};

const AwardsPage = () => {
  return <AwardsPageClient />;
};

export default AwardsPage;
