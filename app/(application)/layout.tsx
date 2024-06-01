import Image from "next/image";
import React, { ReactNode } from "react";
import LogoImg from "@/src/assets/logo-img.svg";
import { Avatar } from "@mantine/core";
import { Notification } from "iconsax-react";
import { ThemeControl } from "@/shared/theme-control";
import "@mantine/core/styles.css";

function ApplicationLayout({ children }: { children: ReactNode }) {
  return (
    <main className=" flex flex-col">
      <section
        className="px-[3rem]  flex justify-between bg-primary dark:bg-secondary-500
 items-center max-[910px]:py-[5px] sticky top-0  z-50 "
      >
        <figure className=" w-[clamp(3rem,5.8vw,5.2rem)] h-[clamp(2.5rem,5.8vw,5.2rem)]">
          <Image
            className="w-full"
            src={LogoImg}
            width={20}
            height={20}
            alt="logo-img"
          />
        </figure>

        <section className=" flex gap-[18px] items-center">
          <div className=" relative">
            <div className=" flex rounded-full bg-[#DA100B] items-center justify-center px-[7px] py-[3px] w-[22px] h-[22px] absolute left-[15px] bottom-[18px] ">
              <p className=" text-white">0</p>
            </div>

            <span>
              <Notification size="30" color="#FFF" variant="Bold" />
            </span>
          </div>
          <Avatar size="md" />
          <ThemeControl />
        </section>
      </section>
      {children}
    </main>
  );
}

export default ApplicationLayout;
