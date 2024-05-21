"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const box = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.5,
    },
  },
};

const featureList = [
  {
    name: "Digital investment Platform",
    img: "/digital.svg",
  },
  {
    name: "Crowdfunding Model",
    img: "/crowdfunding.svg",
  },
  {
    name: "Farmer Empowerment",
    img: "/empowerment.svg",
  },
  {
    name: "Impact Measurement",
    img: "/impact.svg",
  },
];
function Features() {
  return (
    <>
      <section
        className=" bg-no-repeat min-h-[60dvh]  flex relative  w-full object-fit bg-cover items-center bg-black  opacity-[#000]"
        style={{
          backgroundImage: "url(/invest-bg.svg)",
        }}
      >
        <div className=" bg-[#0000007A] absolute inset-0"></div>
        <section className="z-10  px-[clamp(1.8rem,4.1vw,3.7rem)] py-[clamp(2.8rem,6.2vw,5.6rem)] ">
          <h3 className=" text-[clamp(1.7rem,4.4vw,4rem)] font-bold text-[#fff] max-w-[42rem] px-2 ">
            FarmPal: A Digital Investment Platform for Food Security
          </h3>
        </section>
      </section>
      <div className=" px-[30px]  bg-[#EFFFD2]  dark:bg-[#000]">
        <section className=" pt-[clamp(1.8rem,4.9vw,4.4rem)] pb-[clamp(50px,6.9vw,100px)]    flex flex-col gap-[clamp(1.8rem,4vw,3.9rem)] items-center ">
          <h3 className="font-bold text-[clamp(2rem,4vw,3.7rem)] text-[#000] dark:text-primary">
            Features
          </h3>
          <div className="grid grid-cols-4 gap-[clamp(0.9rem,1vw,24px)] max-[754px]:grid-cols-2 max-[405px]:grid-cols-1   ">
            {featureList?.map((item, idx) => (
              <motion.section
                variants={box}
                key={idx}
                className=" px-[1rem]  py-[16px] rounded-[30px] flex item-cented flex-col gap-[19px] bg-white items-center  min-w-[174px]"
              >
                <figure className="  ">
                  {/* w-[clamp(8rem,20vw,18rem)] h-[clamp(8rem,20vw,18rem)] */}
                  <Image
                    width={20}
                    height={20}
                    src={item?.img}
                    alt=""
                    className=" w-full rounded-[30px]"
                  />
                </figure>

                <h4 className=" max-w-[260px] text-[clamp(1rem,1.6vw,1.5rem)] font-bold text-secondary-200 text-center">
                  {item?.name}
                </h4>
              </motion.section>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Features;
