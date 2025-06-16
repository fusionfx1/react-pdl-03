import type { Metadata } from "next";
import "../globals.css";
import { content } from "../content/text";

export const metadata: Metadata = {
  title: `Loan Application - ${content.domain} | Apply for Fast Cash Loans`,
  description: "Complete your loan application with ScratchPay.com. Fast, secure online form for loans up to $5,000. Get instant approval decisions and same-day funding.",
  keywords: "loan application, loan form, apply for loan, fast cash application, online loan application, instant approval",
  robots: {
    index: false, // Don't index the application form page
    follow: true,
  },
  alternates: {
    canonical: `https://${content.domain.toLowerCase()}/form-loan`,
  },
  icons: {
    icon: "/images/icon.png",
  },
};

export default function FormLoanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="dns-prefetch" href="//apikeep.com" />
        <link rel="preconnect" href="https://apikeep.com" />
      </head>
      <body className="">
        <main role="main" aria-label="Loan application form">
          {children}
        </main>
      </body>
    </html>
  );
}