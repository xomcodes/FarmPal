"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Digital from "@/src/assets/digital.svg";
import CrowdFunding from "@/src/assets/crowdfunding.svg";
import Empowerment from "@/src/assets/empowerment.svg";
import Impact from "@/src/assets/impact.svg";
import AboutUsBg from "@/src/assets/about-us-bg.svg";
import { Button } from "@mantine/core";
import brown from "@/app/brown-button.module.css";
import AboutUs from "./about-us";
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
    img: Digital,
  },
  {
    name: "Crowdfunding Model",
    img: CrowdFunding,
  },
  {
    name: "Farmer Empowerment",
    img: Empowerment,
  },
  {
    name: "Impact Measurement",
    img: Impact,
  },
];
function Features() {
  return (
    // <main className=" flex flex-col items-center bg-white dark:bg-primary-700">
    //   <AboutUs />

    <div className=" px-[30px]  bg-[#EFFFD2]  dark:bg-primary-700">
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
    // </main>
  );
}

export default Features;
