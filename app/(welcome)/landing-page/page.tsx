import Features from "@/landing-page/features";
import Hero from "@/landing-page/hero";
import Partners from "@/landing-page/partners";
import Testimonial from "@/landing-page/testimonial";
import React from "react";

function LandingPage() {
  return (
    <main className=" flex-col flex">
      <Hero />
      <Features />
      <Partners />
      <Testimonial />
    </main>
  );
}

export default LandingPage;
