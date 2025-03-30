import React from "react";
import { Metadata } from "next";
import BookingsPageClient from "./page-client";

export const metadata: Metadata = {
  title: "Bookings",
  description: "Bookings Page",
};

const BookingsPage = () => {
  return <BookingsPageClient />;
};

export default BookingsPage;
