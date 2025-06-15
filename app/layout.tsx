import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import TopLabel from "./components/top-label";
import Script from "next/script";
import Head from "next/head";
import { content } from "./content/text";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: `${content.domain}`,
  description: "Simple Application Process And Fast Approvals Are Our Advantage. Apply Now To Get Started.",
  icons: {
    icon: "/images/icon.png", // /public path,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <TopLabel />
        <div>{children}</div>
        <GoogleTagManager gtmId={`${content.gtm}`} />
        <Footer />
      </body>
    </html>
  );
}