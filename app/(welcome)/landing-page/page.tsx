import AboutUs from "@/landing-page/about-us";
import CoreValues from "@/landing-page/core-values";
import Features from "@/landing-page/services";
import Hero from "@/landing-page/hero";
import SecurityMovement from "@/landing-page/security-movement";
import Partners from "@/landing-page/security-movement";
import Testimonial from "@/landing-page/testimonial";
import React from "react";
import Services from "@/landing-page/services";
import Team from "@/landing-page/team";

function LandingPage() {
  return (
    <main className=" flex-col flex">
      <Hero />
      <div className="flex flex-col items-center bg-white dark:bg-primary-700">
        <AboutUs />
        <CoreValues />
      </div>
      <SecurityMovement />
      <Services />
      <Team />
      <Testimonial />
    </main>
  );
}

export default LandingPage;
