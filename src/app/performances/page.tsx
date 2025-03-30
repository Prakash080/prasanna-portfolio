import React from "react";
import { Metadata } from "next";
import PerformancesPageClient from "./page-client";

export const metadata: Metadata = {
  title: "Performances",
  description: "Performances Page",
};

const PerformancesPage = () => {
  return <PerformancesPageClient />;
};

export default PerformancesPage;
