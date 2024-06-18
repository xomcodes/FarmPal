import React from "react";
import HeadingText from "./heading-text";
import TransparencyIcon from "./transparency-icon";
import IntegrityIcon from "./integrity-icon";
import SustainIcon from "./sustain-icon";
import InnovationIcon from "./innovation-icon";

const valueList = [
  {
    name: " Transparency",
    description:
      "We prioritize clear, honest communication and provide our investors and farmers with comprehensive, accurate information about our projects and their impact.",
    icon: <TransparencyIcon />,
  },
  {
    name: " Integrity",
    description:
      "We conduct all our activities with the highest ethical standards, ensuring trust and accountability in every aspect of our operations.",
    icon: <IntegrityIcon />,
  },
  {
    name: "  Sustainability",
    description:
      "We are committed to promoting sustainable farming practices that protect the environment, conserve resources, and ensure long-term agricultural productivity.",
    icon: <SustainIcon />,
  },
  {
    name: "  Innovation",
    description:
      "We embrace innovative technologies and practices that drive efficiency, productivity, and sustainability in agriculture.",
    icon: <InnovationIcon />,
  },
];

function CoreValues() {
  return (
    <main className=" flex flex-col px-[clamp(1.8rem,4.1vw,3.7rem)] pt-[clamp(5.2rem,10vw,9.4rem)] pb-[99px] items-center justify-center gap-[clamp(3rem,7vw,6.3rem)] dark:bg-[#132b14] ">
      <HeadingText text="Our Core Values" />

      {/* <section className=" flex flex-col gap-[50px] "> */}
      <div className=" grid grid-cols-2 gap-[clamp(0.6rem,1.6vw,1.5rem)] gap-y-[clamp(2rem,4vw,4rem)]  max-[515px]:grid-cols-1">
        {valueList?.map((item, idx) => (
          <section
            key={idx}
            className=" bg-[#F3F4F6] dark:bg-[#FFFFFF33]  px-[clamp(1.8rem,4.1vw,3.7rem)]  pb-[clamp(0.9rem,2.1vw,1.9rem)] rounded-tl-[30px] rounded-tr-lg rounded-br-[30px] rounded-bl-lg flex flex-col gap-[16px] items-center min-w-[230px] "
          >
            <div className="bg-primary  px-[clamp(0.9rem,2.1vw,1.5rem)] py-[clamp(0.8rem,1.8vw,1.6rem)] flex items-center rounded-full -mt-[45px] w-[clamp(3rem,5.5vw,5rem)] h-[clamp(3rem,5.5vw,5rem)] max-[1191px]:-mt-[38px]  max-[872px]:-mt-[25px]">
              {item.icon}
            </div>
            <p className=" text-[clamp(0.8rem,1.7vw,1.5rem)] font-bold text-[#1F2937] dark:text-white ">
              {item.name}
            </p>
            <p className=" text-[#6B7280] text-[clamp(0.9rem,1.4vw,1.25rem)] font-semibold text-center dark:text-white ">
              {item.description}
            </p>
          </section>
        ))}
      </div>
      {/* </section> */}
    </main>
  );
}

export default CoreValues;
