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
  title: `${content.domain} - Fast Online Loans | Quick Cash Advance | Personal Loans Up to $5,000`,
  description: "Get approved for personal loans up to $5,000 with ScratchPay.com. Fast online application, instant decisions, and same-day funding. Bad credit OK. Apply now for emergency cash loans.",
  keywords: "personal loans, fast loans, online loans, cash advance, emergency loans, bad credit loans, instant approval, same day funding, quick cash, loan application",
  authors: [{ name: content.domain }],
  creator: content.domain,
  publisher: content.domain,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `https://${content.domain.toLowerCase()}`,
    siteName: content.domain,
    title: `${content.domain} - Fast Personal Loans Online | Up to $5,000`,
    description: "Quick online loan application with instant decisions. Get personal loans up to $5,000 with flexible terms. Bad credit welcome. Apply in minutes!",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${content.domain} - Fast Online Personal Loans`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: `@${content.domain.replace('.com', '')}`,
    creator: `@${content.domain.replace('.com', '')}`,
    title: `${content.domain} - Fast Personal Loans Online`,
    description: "Get approved for personal loans up to $5,000. Fast application, instant decisions, same-day funding. Apply now!",
    images: ['/images/twitter-card.jpg'],
  },
  alternates: {
    canonical: `https://${content.domain.toLowerCase()}`,
  },
  other: {
    'geo.region': 'US',
    'geo.placename': 'United States',
    'application-name': content.domain,
    'msapplication-TileColor': '#003566',
    'theme-color': '#003566',
  },
  icons: {
    icon: [
      { url: "/images/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/icon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/images/safari-pinned-tab.svg", color: "#003566" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": content.domain,
    "description": "Fast online personal loans up to $5,000 with instant approval and same-day funding",
    "url": `https://${content.domain.toLowerCase()}`,
    "logo": `https://${content.domain.toLowerCase()}/images/logo.png`,
    "image": `https://${content.domain.toLowerCase()}/images/og-image.jpg`,
    "telephone": "1-800-SCRATCH",
    "email": `info@${content.domain.toLowerCase()}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": content.address.split(',')[0],
      "addressLocality": "Warwick",
      "addressRegion": "RI",
      "postalCode": "02889",
      "addressCountry": "US"
    },
    "areaServed": "US",
    "serviceType": "Personal Loans",
    "priceRange": "$200-$5000",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Personal Loan Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "LoanOrCredit",
            "name": "Personal Loan",
            "description": "Fast personal loans from $200 to $5,000"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "200",
            "maxPrice": "5000",
            "priceCurrency": "USD"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "1247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      `https://www.facebook.com/${content.domain.replace('.com', '')}`,
      `https://www.twitter.com/${content.domain.replace('.com', '')}`,
      `https://www.linkedin.com/company/${content.domain.replace('.com', '')}`
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Enhanced Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="ICBM" content="41.7001, -71.4162" />
        
        {/* Business Info */}
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="1 days" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
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
        
        {/* Preload Critical Resources */}
        <link rel="dns-prefetch" href="//apikeep.com" />
        <link rel="preconnect" href="https://apikeep.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        
        {/* Preload Critical Images */}
        <link rel="preload" as="image" href="/images/icon.png" />
        <link rel="preload" as="image" href="/images/cellphone.png" />
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
        
        <TopLabel />
        <div className="pt-5 sm:pt-5">{children}</div>
        <Footer />
        <StickyGetStartButton />
      </body>
    </html>
  );
}