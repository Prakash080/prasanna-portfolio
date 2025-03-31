import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./global.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteFooter } from "@/components/site-footer";
import { BackgroundImage } from "@/components/background-image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Natya - Classical Dance Portfolio",
  description:
    "Showcasing the art of classical dance through performances, workshops, and more",
  keywords: [
    "classical dance",
    "bharatanatyam",
    "kathak",
    "odissi",
    "dance portfolio",
    "performer",
  ],
  authors: [{ name: "Natya" }],
  creator: "Natya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${playfair.variable} ${montserrat.variable} font-sans`}>
        <ThemeProvider defaultTheme="dark" enableSystem>
          <BackgroundImage />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
