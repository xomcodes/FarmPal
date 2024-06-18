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
import HeadingText from "./heading-text";
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
    text: "Our digital investment platform connects investors with agricultural projects, offering a seamless and secure way to fund innovative farming ventures. By leveraging cutting-edge technology, we enable transparent and efficient transactions, ensuring your investments driver real growth in the agricultural sector.",
    img: Digital,
  },
  {
    name: "Crowdfunding Model",
    text: "Through our crowdfunding model, we pool resources from multiple investors to support diverse agricultural initiative. This collaborative approach democratizes investment, allowing individuals to contribute to the development of sustainable farming practices and share in the returns of successful projects. ",
    img: CrowdFunding,
  },
  {
    name: "Farmer Empowerment",
    text: "We empower farmers by providing access to essential capital and resources. Our platform supports their growth and productivity, offering tools and funding that help them implement modern agricultural techniques, improve crop yields, and achieve financial stability.",
    img: Empowerment,
  },
  {
    name: "Impact Measurement",
    text: "We prioritize transparency and accountability through rigorous impact measurement. Our platform tracks and reports on the outcomes of your investments, ensuring that every dollar contributes to tangible improvements in agricultural practices, community development, and environmental sustainability.",
    img: Impact,
  },
];
function Services() {
  return (
    // <main className=" flex flex-col items-center bg-white dark:bg-primary-700">
    //   <AboutUs />

    <div className=" px-[30px]  bg-[#EFFFD2]  dark:bg-primary-700">
      <section className=" pt-[clamp(1.8rem,4.9vw,4.4rem)] pb-[clamp(50px,6.9vw,100px)]    flex flex-col gap-[clamp(1.8rem,4vw,3.9rem)] items-center ">
        <HeadingText text="Services" />
        <div className="grid grid-cols-4 gap-[clamp(0.9rem,1vw,24px)] max-[754px]:grid-cols-2 max-[405px]:grid-cols-1   ">
          {featureList?.map((item, idx) => (
            <div
              key={idx}
              className="  py-[clamp(0.5rem,1vw,1rem)] px-2 rounded-[30px] flex item-cented flex-col gap-[19px] bg-white dark:bg-[#FFFFFF33] items-center  min-w-[174px]"
            >
              <figure className="  ">
                <Image
                  // width={0}
                  // height={0}
                  src={item?.img}
                  alt=""
                  className=" w-full rounded-[30px]"
                />
              </figure>
              <div className=" flex flex-col gap-[20px] items-center">
                <h4 className=" max-w-[260px] text-[clamp(1rem,1.6vw,1.5rem)] font-bold text-secondary-200 text-center dark:text-[#F3F4F6]">
                  {item?.name}
                </h4>
                <p className=" text-base font-noemal dark:text-[#F3F4F6] text-[#6B7280] px-4">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    // </main>
  );
}

export default Services;
