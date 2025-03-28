import React from "react";
import { Metadata } from "next";
import GalleryPageClient from "./page-client";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Gallery Page",
};

const GalleryPage = () => {
  return <GalleryPageClient />;
};

export default GalleryPage;
