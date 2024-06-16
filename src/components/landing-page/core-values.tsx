import React from "react";
import HeadingText from "./heading-text";
import TransparencyIcon from "./transparency-icon";

function CoreValues() {
  return (
    <main className=" flex flex-col px-[clamp(1.8rem,4.1vw,3.7rem)] pt-[clamp(5.2rem,10vw,9.4rem)] items-center justify-center gap-[clamp(3rem,7vw,6.3rem)100px]">
      <HeadingText text="Our Core Values" />

      {/* <section className=" flex flex-col gap-[50px] "> */}
      <div className=" grid grid-cols-2 gap-[24px] gap-y-[clamp(1.5rem,3.5vw,3rem)]">
        <section className=" bg-[#F3F4F6]  px-[clamp(1.8rem,4.1vw,3.7rem)]  pb-[clamp(0.9rem,2.1vw,1.9rem)] rounded-tl-[30px] rounded-tr-lg rounded-br-[30px] rounded-bl-lg flex flex-col gap-[16px] items-center ">
          <div className=" bg-primary px-[clamp(0.9rem,2.1vw,1.5rem)] py-[clamp(0.8rem,1.8vw,1.6rem)] flex items-center rounded-full -mt-[45px] w-[clamp(3rem,5.5vw,5rem)] h-[clamp(3rem,5.5vw,5rem)]">
            <TransparencyIcon />
          </div>
          <p className=" text-[clamp(0.8rem,1.7vw,1.5rem)] font-bold text-[#1F2937]  ">
            Transparency
          </p>
          <p className=" text-[#6B7280] text-[clamp(0.9rem,1.4vw,1.25rem)] font-semibold text-center ">
            We prioritize clear, honest communication and provide our investors
            and farmers with comprehensive, accurate information about our
            projects and their impact.
          </p>
        </section>
        <section className=" bg-[#F3F4F6] px-[63px] pb-[30px] ">
          <div></div>
          <p className=" text-[24px] font-bold text-[#1F2937]">Transparency</p>
          <p className=" text-[#6B7280] text-[20px] font-bold">
            We prioritize clear, honest communication and provide our investors
            and farmers with comprehensive, accurate information about our
            projects and their impact.
          </p>
        </section>
        <section className=" bg-[#F3F4F6] px-[63px] pb-[30px] ">
          <div></div>
          <p className=" text-[24px] font-bold text-[#1F2937]">Transparency</p>
          <p className=" text-[#6B7280] text-[20px] font-bold">
            We prioritize clear, honest communication and provide our investors
            and farmers with comprehensive, accurate information about our
            projects and their impact.
          </p>
        </section>
        <section className=" bg-[#F3F4F6] px-[63px] pb-[30px] ">
          <div></div>
          <p className=" text-[24px] font-bold text-[#1F2937]">Transparency</p>
          <p className=" text-[#6B7280] text-[20px] font-bold">
            We prioritize clear, honest communication and provide our investors
            and farmers with comprehensive, accurate information about our
            projects and their impact.
          </p>
        </section>
      </div>
      {/* </section> */}
    </main>
  );
}

export default CoreValues;
