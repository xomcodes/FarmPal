"use client";

import React from "react";
import { Button } from "@mantine/core";
import classes from "@/app/button.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroAnimation from "./hero-animation";
import Phone from "@/src/assets/phone.svg";
import Img from "@/src/assets/img.svg";

function SecurityMovement() {
  const wrapper = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const list = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.455, 0.03, 0.515, 0.955],
        delay: 1,
      },
    },
  };
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };
  return (
    <>
      {/* <section className=" flex flex-col gap-[clamp(1.5rem,3.4vw,3rem)] dark:bg-black bg-white"> */}
      {/* pt-[117px] py-[clamp(3rem,7.4vw,6.6rem)] */}
      <section className="flex max-[720px]:flex-col max-[1400px]">
        <div className=" flex flex-col gap-[30px] px-[60px] justify-center flex-1   movement-gradient py-[20px] max-[710px]:items-center ">
          {/* <h4 className="  text-[clamp(2rem,4vw,3.7rem)] font-bold text-[#000] max-w-[693px]">
            Join the Movement Towards Food Security
          </h4> */}

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={container}
            // className="text-4xl lg:text-5xl mb-8 font-semibold"
          >
            <HeroAnimation
              text="Join the Movement"
              className=" text-[clamp(2rem,4vw,3.7rem)] font-bold text-[#000] max-w-[693px]"
            />
            <HeroAnimation
              text="Towards Food Security"
              className=" text-[clamp(2rem,4vw,3.7rem)] font-bold text-[#000] "
            />
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={wrapper}
            // className="text-white "
          >
            <motion.p
              variants={list}
              className=" text-[#1F2937] text-[clamp(1.1rem,2.2vw,2rem)] font-semibold max-w-[686px]"
            >
              Be Part of the solution and invest in a food-secure future for
              Africa
            </motion.p>
          </motion.div>

          {/* <p className=" text-[#1F2937] text-[clamp(1.1rem,2.2vw,2rem)] font-semibold max-w-[686px]">
            Be Part of the solution and invest in a food-secure future for
            Africa
          </p> */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.5 }}
            // className="mt-10 flex flex-col items-center sm:flex-row gap-3"
          >
            <Button classNames={classes}>Invest Now</Button>
          </motion.div>
        </div>
        <figure className=" max-[720px]:w-full bg-[#82eba9]  ">
          <Image src={Phone} alt="phone" className=" w-full h-full" />
        </figure>
      </section>
    </>
  );
}

export default SecurityMovement;
