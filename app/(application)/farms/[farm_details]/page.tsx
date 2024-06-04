"use client";

import { BackButton } from "@/shared/back-button";
import { Carousel } from "@mantine/carousel";
import React from "react";
import "@mantine/core/styles.css";
import Image from "next/image";
import { Button } from "@mantine/core";
import classes from "@/app/button.module.css";
import brown from "@/app/brown-button.module.css";

const images = [
  "/farm-img1.svg",
  "/farm-img1.svg",
  "/farm-img1.svg",
  "/farm-img1.svg",
];

function FarmDetails({ params }: { params: { farm_details: string } }) {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <figure className="w-[1020px] h-[508px] ">
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
    <main className=" px-[60px] py-[30px] ">
      <section className=" flex flex-col gap-[64px]">
        <div className=" flex flex-col gap-[30px]">
          <BackButton text="Back to Farms" />
          <section className="flex  gap-[64px] justify-center ">
            <div className=" flex flex-col gap-[30px] flex-1 ">
              <Carousel
                h={508}
                w={1020}
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
                {images.map((item) => (
                  <figure className=" w-[200px] h-[100px]">
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
            <section className=" flex flex-col gap-[60px] flex-1">
              <h4 className=" text-[#1F2937] text-[40px] font-bold whitespace-nowrap">
                Cassava farm_1
              </h4>
              <div className=" flex flex-col gap-[58px]">
                <section className=" flex gap-[50px]">
                  <div className=" flex flex-col gap-4">
                    <article className=" flex flex-col text-[#1F2937] dark:text-white  gap-3   text-base">
                      <p className=" font-normal text-[24px]">Cost per unit </p>
                      <h4 className=" font-semibold "> USD120.00 </h4>
                    </article>
                    <article className=" flex flex-col text-[#1F2937] dark:text-white  text-base  gap-3  ">
                      <p className=" font-semibold text-[24px]">
                        Farming Begins
                      </p>
                      <h4 className="font-normal "> 12th May 2024 </h4>
                    </article>
                    <article className=" flex flex-col text-[#1F2937] dark:text-white   gap-3  text-base">
                      <p className=" font-semibold text-[24px]">
                        Farm Location
                      </p>
                      <h4 className="font-normal ">Remera , Gasabo Rwanda</h4>
                    </article>
                  </div>
                  <div className=" flex flex-col gap-4">
                    <article
                      className=" flex flex-col text-[#1F2937] dark:text-white  text-base  gap-3 "
                      gap-4
                    >
                      <p className=" font-semibold text-[24px]">ROS </p>
                      <h4 className="font-normal "> 10.9%-30.9%</h4>
                    </article>
                    <article className=" flex flex-col text-[#1F2937]  dark:text-white text-base gap-3 ">
                      <p className=" font-semibold text-[24px]">Farming ends</p>
                      <h4 className="font-normal "> 30th may 2025</h4>
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
