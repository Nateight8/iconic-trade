import Image from "next/image";
import React from "react";
import FrequentlyAQ from "../faq/FrequentlyAQ";

type Props = {};

function WorkSection({}: Props) {
  return (
    <section className=" min-h-screen  w-full flex items-center justify-center">
      <div className="w-full px-4 mx-auto bg-[#f2f2f2] relative h-screen ">
        <Image
          src="/images/work2.jpg"
          alt=""
          fill
          className="object-cover md:object-contain object-center "
        />

        <div className=" relative max-w-screen-xl mx-auto pb-8  h-full items-end md:items-center flex">
          <div className="text-slate-900 max-w-prose bg-[#f3f3f3] p-4 w-full shadow-md shadow-slate-800/30 ">
            <h3 className="text-base uppercase text-slate-900 ">
              LET YOUR
              <span className="px-1 font-bold">FUNDS</span>
            </h3>
            <h3 className="text-2xl font-bold pb-3">Work for you</h3>
            <p className=" text-slate-800 ">
              Don&apos;t go it alone when it comes to investing. At Iconic
              Trade, our team of experts is here to help you make smart
              investment decisions that lead to long-term growth and financial
              success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
