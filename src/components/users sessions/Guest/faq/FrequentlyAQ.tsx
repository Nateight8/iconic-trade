import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import React from "react";

type Props = {};

const FrequentlyAQ = (props: Props) => {
  const faq = [
    {
      id: "1",
      ques: " What is Iconic Trade and how does it work?",
      answ: "Iconic Trade is a globally innovative hedge fund system that provides Investors the opportunity to maximize their Investment returns and achieve their financial goals. We help to maximize your profit through our Long-term strategy with no risk or loss involved during the process of growing your finance",
    },
    {
      id: "2",
      ques: "How do I sign up for an account on Iconic Trade?",
      answ: "To open an account, you must first visit the official website of the project, go to the homepage and click the sign up button. Continue with the ongoing process and your account will be created successfully.",
    },
    {
      id: "3",
      ques: "What are the investment options available on Iconic Trade?",
      answ: "Iconic Trade has various monthly options for you to choose from and this also comes with different prices for you to invest. We hope you enjoy them as all can get you big investment returns. ",
    },
    // {
    //   id: "4",
    //   ques: " What is Iconic Trade and how does it work?",
    //   answ: "",
    // },
    // {
    //   id: "5",
    //   ques: "How does Iconic Trade ensure the security of my investments?",
    //   answ: "",
    // },
    {
      id: "6",
      ques: "How often do I receive returns on my investments?",
      answ: "Investment returns are stated during the process of investing. The return of investment is received at due period. ",
    },
    {
      id: "7",
      ques: "What kind of customer support does Iconic Trade offer?",
      answ: "",
    },
    // {
    //   id: "8",
    //   ques: "Does Iconic Trade charge any fees for its services?",
    //   answ: "",
    // },
    {
      id: "9",
      ques: "Is Iconic Trade available in my country?",
      answ: "Iconic Trade is a globally innovative scheme that can be attained by people, anywhere and at any time.",
    },
  ];

  return (
    <div className="w-full py-6 flex-col text-white bg--500 flex items-center justify-center  min-h-screen">
      <div className="max-w-xl  mx-auto py-6 p-4">
        <h3 className="text-2xl font-bold pb-3">Frequently Asked Questions</h3>
        <p className="pb-4">
          Got questions? We&apos;ve got answers. Check out our frequently asked
          questions to learn more about Iconic Trade and how we can help you
          achieve your financial goals.
        </p>
      </div>
      <Accordion type="single" collapsible className="max-w-[36rem] w-full p-4">
        {faq.map((item) => {
          const { id, ques, answ } = item;

          return (
            <AccordionItem key={id} value={id} className="w-full">
              <AccordionTrigger className="text-slate-200 text-left">
                {ques}
              </AccordionTrigger>
              <AccordionContent className=" text-slate-300">
                <p>{answ}</p>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default FrequentlyAQ;
