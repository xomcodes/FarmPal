import AboutUs from "@/landing-page/about-us";
import CoreValues from "@/landing-page/core-values";
import Features from "@/landing-page/features";
import Hero from "@/landing-page/hero";
import Partners from "@/landing-page/partners";
import Testimonial from "@/landing-page/testimonial";
import React from "react";

function LandingPage() {
  return (
    <main className=" flex-col flex">
      <Hero />
      <div className="flex flex-col items-center bg-white dark:bg-primary-700">
        <AboutUs />
        <CoreValues />
        {/* <Features /> */}
      </div>
      <Partners />
      <Testimonial />
    </main>
  );
}

export default LandingPage;
