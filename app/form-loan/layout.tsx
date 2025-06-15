import type { Metadata } from "next";
import "../globals.css";
import { content } from "../content/text";

export const metadata: Metadata = {
  title: `${content.domain} - Loan Application`,
  description: "Complete your loan application form",
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
        <link rel="dns-prefetch" href="//apikeep.com" />
        <link rel="preconnect" href="https://apikeep.com" />
      </head>
      <body className="">
        {children}
      </body>
    </html>
  );
}