import React, { ReactNode } from "react";
import "@mantine/core/styles.css";
import { ThemeControl } from "@/shared/theme-control";
import Image from "next/image";
import LogoImg from "@/src/assets/logo-img.svg";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className=" flex bg-white dark:bg-black max-[731px]:flex-col h-[100dvh] ">
      <div className="  bg-primary-400 dark:bg-secondary-100 px-[14px] py-[5px] justify-between items-center hidden max-[731px]:flex ">
        <figure className=" w-[clamp(3rem,5.8vw,5.2rem)] h-[clamp(2.5rem,5.8vw,5.2rem)] ">
          <Image
            className="w-full"
            src={LogoImg}
            width={20}
            height={20}
            alt="logo-img"
          />
        </figure>
        <ThemeControl />
      </div>
      <section
        className="bg-no-repeat object-fit bg-cover flex  items-center min-h-[100dvh] relative rounded-tr-[50px] rounded-br-[50px] flex-1 max-[732px]:hidden"
        style={{ backgroundImage: "url('/bg.svg')" }}
      >
        <div className=" flex flex-col z-10 mx-auto items-center gap-[32px]">
          <h4 className=" text-white font-bold text-[clamp(1.8rem,2.7vw,3rem)] ">
            Welcome back to FarmPal!
          </h4>
          <p className=" font-medium text-[clamp(1rem,1.5vw,24px)] text-[#FCFCFD] max-w-[606px] text-center ">
            Your gateway to agricultural investment oppoturnity! Start exploring
            today and sow the seeds of financial growth FarmPal
          </p>
        </div>
        <div className=" absolute inset-0 bg-[#03571ABD] rounded-tr-[50px] rounded-br-[50px]"></div>
      </section>

      {children}
    </main>
  );
}
