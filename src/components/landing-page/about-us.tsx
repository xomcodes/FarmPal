import React from "react";
import AboutUsBg from "@/src/assets/about-us-bg.svg";
import brown from "@/app/brown-button.module.css";
import { Button } from "@mantine/core";
import HeadingText from "./heading-text";

function AboutUs() {
  return (
    <>
      <h3 className="pb-[50px] text-black dark:text-white font-bold text-[clamp(1.5rem,3.7vw,3.7rem)]">
        About Us
      </h3>
      <section
        className=" bg-no-repeat min-h-[85dvh]  flex relative  w-full object-fit bg-cover items-end justify-end max-[625px]:justify-center   bg-black  opacity-[#000]"
        style={{
          backgroundImage: `url(${AboutUsBg.src})`,
        }}
      >
        {/* <div className=" bg-[#0000007A] absolute inset-0"></div> */}
        {/* <section className="z-10  px-[clamp(1.8rem,4.1vw,3.7rem)] py-[clamp(2.8rem,6.2vw,5.6rem)] ">
          <h3 className=" text-[clamp(1.7rem,4.4vw,4rem)] font-bold text-[#fff] max-w-[42rem] px-2 ">
            FarmPal: A Digital Investment Platform for Food Security
          </h3>
        </section> */}

        <div className="flex mx-[60px] w-[clamp(30rem,71vw,64rem)] bg-[#132B13CC]  dark:bg-[#0000007A] top-[80px]  absolute rounded-lg max-[480px]:w-full  ">
          <section className=" flex  px-[clamp(1.5rem,3.7vw,3.7rem)] pt-[45px] pb-[60px] flex-col gap-[35px]">
            <h3 className=" text-[clamp(1rem,3.3vw,3rem)] font-bold text-white">
              FarmPal: A Digital Investment Platform for Food Security
            </h3>
            <p className="text-[clamp(1rem,2.2vw,2rem)] font-semibold max-w-[860px]  text-white ">
              Welcome to Farmpal, your trusted partner in agricultural
              investment. At Farmpal, we bridge the gap between investors and
              innovative farming projects, fostering sustainable agricultural
              growth and community development. Our platform empowers farmers by
              providing essential funding and resources, while offering
              investors transparent and impactful opportunities. Join us in
              transforming agriculture and driving positive change in the world.
            </p>
            <Button classNames={brown}>Learn More</Button>
          </section>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
