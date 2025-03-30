import React from "react";
import { Metadata } from "next";
import ContactPageClient from "./page-client";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Page",
};

const ContactPage = () => {
  return <ContactPageClient />;
};

export default ContactPage;
