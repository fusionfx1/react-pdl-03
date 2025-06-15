import React from "react";
import AccordionItem from "./accordion-item";
import Column from "./column";
import { content } from "../content/text";

type Props = {};

const data = [
  {
    title: "What is a short term personal loan?",
    content: `Short term personal loans are designed around addressing an immediate financial need or emergency. This could be an unexpected medical bill, a broken down car or an urgent boiler repair, etc. The loan amount range is usually up to $5,000 and the term can range from under 30 days for a payday style loan to monthly or weekly installments for an installment style loan. These emergency loans provide quick cash when you need it most.`,
  },
  {
    title: `How does ${content.domain} online loan matching work?`,
    content: `We provide an online marketplace connecting borrowers with trusted lenders to support Americans in need of fast cash. Our website makes the process of finding a lender to meet your financial needs faster and easier! Avoid wasting hours of your time applying individually on several websites, and simply apply by submitting your information to our vast network of personal loan lenders through one easy online application.`,
  },
  {
    title: `Will ${content.domain} charge me for using its loan matching service?`,
    content: `There is no cost to fill out our online loan application form and submit your information through our website. As a loan marketplace, we simply connect you to a prospective lender and receive a commission from successful matches. We do not receive any information that allows us to evaluate or compare offers from potential lenders. Please carefully review any loan offer you receive from a lender to make sure it meets your needs and you fully understand the terms before proceeding to take out a personal loan.`,
  },
  {
    title: `Can I get a personal loan with poor credit or bad credit?`,
    content: `
    <div>Qualifying with a short-term lender can be easy and they are used to working with people in many different financial situations. Here are the basic qualifications for personal loans:</div>
    <ul class="font-weight--300 mt-4 space-y-2">
<li>• Currently employed or receiving regular income</li>
<li>• Make at least $800 per month in verifiable income</li>
<li>• 18 years of age or older and a U.S. resident</li>
<li>• Have an active checking account in good standing</li>
<li>• Other requirements may apply based on the individual lender's criteria</li>
</ul>
    `,
  },
  {
    title: `How quickly will the loan funds be deposited into my account?`,
    content: `If a lender offers you a personal loan with terms and you accept straight away, it is possible to get the money deposited into your bank account within one business day. It can take up to a few days if you are accepting a loan offer on a weekend, holiday, or any other non-business day. The timing may affect how long it will take for you to receive your funds; in these cases, it may take a bit longer for the money to appear in your account.`,
  },
];

const FAQ = (props: Props) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white" id="faq">
      <div className="my-container">
        <header className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions About Personal Loans
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our online loan services, application process, and requirements
          </p>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-0">
          <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg" role="region" aria-label="Frequently asked questions">
            {data.map((item, key) => (
              <div key={key}>
                <AccordionItem data={item} firstActive={key === 0} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;