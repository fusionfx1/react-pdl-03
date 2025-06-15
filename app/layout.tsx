import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import localFont from "next/font/local";
import TopLabel from "./components/top-label";
import StickyGetStartButton from "./components/sticky-get-start-button";
import Script from "next/script";
import Head from "next/head";
import { content } from "./content/text";

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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${content.gtm}');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        
        {/* Preload the external script domain for better performance */}
        <link rel="dns-prefetch" href="//apikeep.com" />
        <link rel="preconnect" href="https://apikeep.com" />
      </head>
      <body className="">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${content.gtm}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <TopLabel />
        <div>{children}</div>
        <Footer />
        <StickyGetStartButton />
      </body>
    </html>
  );
}