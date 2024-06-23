"use client";

import { BackButton } from "@/shared/back-button";
import { Carousel } from "@mantine/carousel";
import React from "react";
import "@mantine/core/styles.css";
import Image from "next/image";
import { Button } from "@mantine/core";
import classes from "@/app/button.module.css";
import carousel from "@/app/carousel.module.css";
import brown from "@/app/brown-button.module.css";
import { ArrowLeft2 } from "iconsax-react";

const images = [
  "/farm-img1.svg",
  "/farm-img1.svg",
  "/farm-img1.svg",
  "/farm-img1.svg",
];

function FarmDetails({ params }: { params: { farm_details: string } }) {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <figure className="w-[clamp(32rem,70.8vw,63rem)] h-[clamp(14rem,31vw,28rem)] rounded-lg">
        <Image
          src={url}
          width={20}
          height={20}
          alt="carousel"
          className="w-full"
        />
      </figure>
    </Carousel.Slide>
  ));
  return (
    <main className=" px-[60px] py-[30px] bg-white dark:bg-primary-800 h-screen">
      <section className=" flex flex-col gap-[64px]">
        <div className=" flex flex-col gap-[30px]">
          <article className=" flex items-center gap-2 text-primary">
            <ArrowLeft2 size="20" color="#1FCC4E" className=" font-bold  " />
            <p className=" font-bold  text-[20px] text-primary">
              Back to Farms
            </p>
          </article>

          <section className="flex  gap-[clamp(1.8rem,4.4vw,4rem)] justify-center ">
            <div className=" flex flex-col  flex-1 ">
              <Carousel
                classNames={carousel}
                // h={508}
                // w={1020}
                withIndicators
                styles={{
                  slide: {
                    borderRadius: 8,
                  },
                  indicator: {
                    color: "#fff",
                    fontSize: 40,
                  },
                  control: {
                    color: "#fff",
                    fontSize: 80,
                    fontWeight: 700,
                  },
                }}
              >
                {slides}
              </Carousel>

              <div className="flex gap-[23px]">
                {images.map((item, idx) => (
                  <figure
                    key={idx}
                    className=" w-[clamp(6.3rem,13.4vw,12.5rem)] h-[clamp(3.1rem,7vw,6.3rem)]"
                  >
                    <Image
                      src={item}
                      width={20}
                      height={20}
                      alt="farms-avaliable"
                      className="w-full rounded-lg"
                    />
                  </figure>
                ))}
              </div>
            </div>
            <section className=" flex flex-col gap-[30px] flex-1">
              <h4 className=" text-[#1F2937] text-[clamp(1.25rem,2.7vw,2.5rem)] font-bold whitespace-nowrap dark:text-white">
                Cassava farm_1
              </h4>
              <div className=" flex flex-col gap-[58px]">
                <section className=" flex gap-[30px]">
                  <div className=" flex flex-col gap-4">
                    <article className=" flex flex-col text-[#1F2937] dark:text-white  gap-3   text-base">
                      <p className=" font-normal text-[clamp(1rem,1.6vw,1.5rem)]">
                        Cost per unit
                      </p>
                      <h4 className=" font-semibold text-[clamp(1rem,1.6vw,1.5rem)]  ">
                        USD120.00
                      </h4>
                    </article>
                    <article className=" flex flex-col text-[#1F2937] dark:text-white  text-base  gap-3  ">
                      <p className=" font-semibold text-[clamp(1rem,1.6vw,1.5rem)] ">
                        Farming Begins
                      </p>
                      <h4 className="font-normal text-[clamp(1rem,1.6vw,1.5rem)]  ">
                        {" "}
                        12th May 2024
                      </h4>
                    </article>
                    <article className=" flex flex-col text-[#1F2937] dark:text-white   gap-3  text-base">
                      <p className=" font-semibold text-[clamp(1rem,1.6vw,1.5rem)] ">
                        Farm Location
                      </p>
                      <h4 className="font-normal text-[clamp(1rem,1.6vw,1.5rem)]  ">
                        Remera , Gasabo Rwanda
                      </h4>
                    </article>
                  </div>
                  <div className=" flex flex-col gap-4">
                    <article
                      className=" flex flex-col text-[#1F2937] dark:text-white  text-base  gap-3 "
                      gap-4
                    >
                      <p className=" font-semibold text-[clamp(1rem,1.6vw,1.5rem)] ">
                        ROS
                      </p>
                      <h4 className="font-normal text-[clamp(1rem,1.6vw,1.5rem)]  ">
                        {" "}
                        10.9%-30.9%
                      </h4>
                    </article>
                    <article className=" flex flex-col text-[#1F2937]  dark:text-white text-base gap-3 ">
                      <p className=" font-semibold text-[clamp(1rem,1.6vw,1.5rem)] ">
                        Farming ends
                      </p>
                      <h4 className="font-normal text-[clamp(1rem,1.6vw,1.5rem)]  ">
                        {" "}
                        30th may 2025
                      </h4>
                    </article>
                  </div>
                </section>
                <Button
                  classNames={classes}
                  styles={{
                    root: {
                      width: "100%",
                    },
                  }}
                >
                  Invest now
                </Button>
              </div>
            </section>
          </section>
        </div>
      </section>
    </main>
  );
}

export default FarmDetails;
