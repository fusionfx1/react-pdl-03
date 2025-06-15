import React from "react";
import AccordionItem from "./accordion-item";
import Column from "./column";
import { content } from "../content/text";

type Props = {};

const data = [
  {
    title: "What is a short term loan?",
    content: `Short term loans are designed around addressing an immediate financial need or emergency. This could be an unexpected medical bill, a broken down car or an urgent boiler repair, etc. The loan amount range is usually up to $1,000 and the term can range from under 30 days for a payday style loan to monthly or weekly installments for an installment style loan`,
  },
  {
    title: `How does ${content.domain} work?`,
    content: `We provide an online marketplace connecting borrowers with trusted lenders to support Americans in need. Our website makes the process of finding a lender to meet your needs faster and easier! Avoid wasting hours of your time applying individually on several websites, and simply apply by submitting your information to our vast network of lenders through one easy application`,
  },
  {
    title: `Will ${content.domain} charge me for using its service?`,
    content: `There is no cost to fill out a form and submit your information through our website. As a marketplace, we simply connect you to a prospective lender and receive a commission. We do not receive any information that allows us to evaluate or compare offers from potential lenders. Please carefully review any offer you receive from a lender to make sure it meets your needs and you fully understand the terms before proceeding to take out a loan.`,
  },
  {
    title: `Can I get a loan with poor credit?`,
    content: `
    <div>Qualifying with a short-term lender can be easy and they are used to working with people in many different situations. Here are the basic qualifications: Currently employed or receiving regular income:</div>
    <ul class="font-weight--300">
<li>Make at least $800 per month</li>
<li>18 years of age or older and a U.S. resident</li>
<li>Have an active checking account</li>
<li>Other requirements may apply based on the individual lender</li>
</ul>
    `,
  },
  {
    title: `How quickly will the funds be deposited?`,
    content: `If a lender offers you a loan with terms and you accept straight away, it is possible to get the money deposited into your account within a business day. It can take up to a few days if you are accepting a loan offer on a weekend, holiday, or any other non-business day. It may affect how long it will take for you to get your money; in these cases, it may take a bit longer.`,
  },
];
const FAQ = (props: Props) => {
  return (
    <Column className="my-container gap-10">
      <div className="text-4xl font-medium text-center">
        Frequently Asked Questions
      </div>

      <div>
        {data.map((item, key) => (
          <div key={key}>
            <AccordionItem data={item} />
          </div>
        ))}
      </div>
    </Column>
  );
};

export default FAQ;
