"use client";

import React from "react";
import { Button } from "@mantine/core";
import classes from "@/app/button.module.css";
import Image from "next/image";
import HeroAnimation from "./hero-animation";
import { motion } from "framer-motion";

function Hero() {
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
      <section
        className=" bg-no-repeat min-h-[calc(100dvh-123.19px)] flex  w-full object-fit bg-cover items-center "
        style={{
          backgroundImage: "url(/landing-background.svg)",
        }}
      >
        <section className=" flex gap-[10px] flex-col px-[clamp(1.8rem,4.1vw,3.7rem)] py-[clamp(2.8rem,6.2vw,5.6rem)]">
          <div className=" flex flex-col gap-[5px]">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={container}
              className="text-4xl lg:text-5xl mb-8 font-semibold"
            >
              <HeroAnimation
                text="Invest in a Food-"
                className="text-[clamp(2rem,4.4vw,4rem)] font-bold text-white max-w-[32rem]"
              />
              <HeroAnimation
                text="Secure Future "
                className="text-[clamp(2rem,4.4vw,4rem)] font-bold text-white max-w-[32rem]"
              />
              <HeroAnimation
                text="for Africa"
                className="text-[clamp(2rem,4.4vw,4rem)] font-bold text-white max-w-[32rem]"
              />
            </motion.h1>
            {/* <h3 className=" text-[clamp(2rem,4.4vw,4rem)] font-bold text-white max-w-[32rem]">
              Invest in a Food-Secure Future for Africa
            </h3> */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={wrapper}
              className="text-white space-y-2"
            >
              <motion.p
                variants={list}
                className="font-semibold text-[clamp(1.3rem,2.2vw,2rem)] max-w-[37rem] text-[#fff]  "
              >
                Join FarmPal&apos;s digital investment{" "}
              </motion.p>
              <motion.p
                variants={list}
                className="font-semibold text-[clamp(1.3rem,2.2vw,2rem)] max-w-[37rem] text-white"
              >
                platform and empower farmers to{" "}
              </motion.p>
              <motion.p
                variants={list}
                className="font-semibold text-[clamp(1.3rem,2.2vw,2rem)] max-w-[37rem] text-white"
              >
                {" "}
                tackle Africa&apos;s food crisis.{" "}
              </motion.p>
            </motion.div>

            {/* <p className=" font-semibold text-[clamp(1.3rem,2.2vw,2rem)] max-w-[37rem] text-white">
              Join FarmPal's digital investment platform and empower farmers to
              tackle Africa's food crisis.
            </p> */}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.5 }}
            className="mt-10 flex flex-col items-center sm:flex-row gap-3"
          >
            <Button classNames={classes}>Invest Now</Button>
          </motion.div>
        </section>
      </section>
      <section className=" bg-white dark:bg-black px-[clamp(1.8rem,4.2vw,3.7rem)] py-[clamp(1.8rem,4.2vw,3.7rem)] flex gap-[clamp(2rem,8vw,7rem)] items-center max-[900px]:flex-col-reverse  ">
        <div className="px-[clamp(0.9rem,2vw,1.8rem)] py-[clamp(1.5rem,3.3vw,3rem)] flex flex-col items-center gap-[34px] statistics-gradient rounded-[30px]">
          <figure className=" w-[clamp(12.5rem,27vw,25rem)] h-[clamp(12.5rem,27vw,25rem)] border-b border-b-[#fff]">
            <Image
              className=" w-full"
              src="/statistics.svg"
              width={20}
              height={20}
              alt="statistics"
            />
          </figure>
          <p className=" text-white font-medium text-[clamp(1rem,1.3vw,1.2rem)] max-w-[350px]">
            Statistics: 60% of Africa&apos;s population faces food insecurity;
            70% of smallholder farmers live below the poverty line
          </p>
        </div>

        <section className=" flex flex-col gap-[clamp(0.5rem,1vw,1rem)] max-[900px]:items-center ">
          <h4 className=" text-secondary-200 font-bold text-[clamp(2rem,4vw,3.7rem)] max-[900px]:text-center max-w-[38rem] dark:text-white  ">
            Africa&apos;s Food Crisis: A Growing Concern
          </h4>
          <p className=" text-secondary-300 font-semibold text-[clamp(1.1rem,2.2vw,2rem)] max-w-[39rem] dark:text-white ">
            Millions of Africans face hunger and malnutrition due to climate
            change, limited resources, and outdated farming techniques.
          </p>
        </section>
      </section>
    </>
  );
}

export default Hero;
