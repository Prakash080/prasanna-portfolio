import React from "react";
import { Metadata } from "next";
import WishesPageClient from "./page-client";

export const metadata: Metadata = {
  title: "Wishes",
  description: "Wishes Page",
};

const WishesPage = () => {
  return <WishesPageClient />;
};

export default WishesPage;
