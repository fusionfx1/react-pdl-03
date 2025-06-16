import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import How from "./components/how";
import Lean from "./components/lean";
import FAQ from "./components/FAQ";
import Column from "./components/column";
import { content } from "./content/text";
import type { Metadata } from "next";
import { Suspense } from "react";

// Dynamically import Banner component with no SSR to avoid useSearchParams issues
const Banner = dynamic(() => import("./components/banner"), {
  ssr: false,
  loading: () => (
    <div className="min-h-24 bg-green-dark py-12 sm:py-16 md:py-20 lg:py-24 animate-pulse">
      <div className="my-container">
        <div className="text-white text-center gap-6 sm:gap-8 lg:gap-10 space-y-6">
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <div className="font-bold text-lg sm:text-xl">{content.domain}</div>
            <div className="h-12 bg-white/20 rounded mx-auto max-w-2xl"></div>
            <div className="h-8 bg-white/20 rounded mx-auto max-w-xl"></div>
          </div>
          <div className="w-full flex justify-center">
            <div className="bg-white/20 rounded-lg w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] mx-auto h-96"></div>
          </div>
        </div>
      </div>
    </div>
  )
});

export const metadata: Metadata = {
  title: `${content.domain} - Fast Online Loans | Instant Approval | Up to $5,000`,
  description: "Apply for loans online with ScratchPay.com. Get instant approval decisions, same-day funding, and flexible repayment terms. Loans from $200-$5,000. Bad credit welcome!",
  keywords: "loans online, fast cash loans, instant loan approval, emergency loans, bad credit loans, same day funding, quick money, loan application, cash advance",
  alternates: {
    canonical: `https://${content.domain.toLowerCase()}`,
  },
  openGraph: {
    title: `${content.domain} - Fast Loans Online | Instant Approval`,
    description: "Get approved for loans up to $5,000 in minutes. Fast online application, instant decisions, same-day funding. Apply now!",
    url: `https://${content.domain.toLowerCase()}`,
    images: [
      {
        url: '/images/home-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Fast Online Loans - ScratchPay.com',
      },
    ],
  },
};

export default function Home() {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `https://${content.domain.toLowerCase()}`
      }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a short term loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Short term loans are designed around addressing an immediate financial need or emergency. This could be an unexpected medical bill, a broken down car or an urgent boiler repair, etc. The loan amount range is usually up to $1,000 and the term can range from under 30 days for a payday style loan to monthly or weekly installments for an installment style loan."
        }
      },
      {
        "@type": "Question",
        "name": `How does ${content.domain} work?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide an online marketplace connecting borrowers with trusted lenders to support Americans in need. Our website makes the process of finding a lender to meet your needs faster and easier!"
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a loan with poor credit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Qualifying with a short-term lender can be easy and they are used to working with people in many different situations. Basic qualifications include being currently employed, making at least $800 per month, being 18 years or older, and having an active checking account."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      
      <main>
        <Column className="min-h-screen gap-24">
          <Suspense fallback={
            <div className="min-h-24 bg-green-dark py-12 sm:py-16 md:py-20 lg:py-24 animate-pulse">
              <div className="my-container">
                <div className="text-white text-center gap-6 sm:gap-8 lg:gap-10 space-y-6">
                  <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                    <div className="font-bold text-lg sm:text-xl">{content.domain}</div>
                    <div className="h-12 bg-white/20 rounded mx-auto max-w-2xl"></div>
                    <div className="h-8 bg-white/20 rounded mx-auto max-w-xl"></div>
                  </div>
                  <div className="w-full flex justify-center">
                    <div className="bg-white/20 rounded-lg w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] mx-auto h-96"></div>
                  </div>
                </div>
              </div>
            </div>
          }>
            <Banner />
          </Suspense>
          <How />
          <Lean />
          <FAQ />
        </Column>
      </main>
    </>
  );
}