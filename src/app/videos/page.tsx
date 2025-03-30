import React from "react";
import { Metadata } from "next";
import VideosPageClient from "./page-client";

export const metadata: Metadata = {
  title: "Videos",
  description: "Videos Page",
};

const VideosPage = () => {
  return <VideosPageClient />;
};

export default VideosPage;
