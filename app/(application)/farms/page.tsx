"use client";
import DashboardIcon from "@/home/dashboard-icon";
import { LogoutCurve, Profile, SearchNormal1 } from "iconsax-react";
import React from "react";
import { PiFarm } from "react-icons/pi";
import { LuSettings2 } from "react-icons/lu";
import { TbBriefcase2 } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { Button, Select, TextInput } from "@mantine/core";
import { MdOutlineMyLocation } from "react-icons/md";
import { IoFilter } from "react-icons/io5";
import BestDealIcon from "@/shared/best-deal-icon";
import brown from "@/app/brown-button.module.css";
import select from "@/app/top-select.module.css";
import SideBar from "@/home/side-bar";
import Image from "next/image";
import classes from "@/app/button.module.css";
import FarmCards from "@/home/farm-cards";

const styles = {
  root: {
    width: "100%",
  },
  input: {
    width: "100%",
    height: "50px",
    borderRadius: "8px",
    border: "1px solid #1FCC4E",
  },

  label: {
    paddingBottom: "8px",
    color: "#6B7280",
    fontSize: "16px",
    fontWeight: 500,
  },
};

function Farms() {
  const pathname = usePathname();
  return (
    <main
      className=" px-[clamp(1.2rem,4.2vw,3.7rem)] pt-[clamp(3.7rem,5.6vw,5rem)] pb-[clamp(1.87rem,4.4vw,4.1rem)] flex-1 bg-white dark:bg-primary-800
]] h-[100dvh] flex flex-col gap-[clamp(1rem,2.9vw,2.6rem)] "
    >
      <section className=" grid grid-cols-[150px,1fr] gap-[clamp(1.8rem,3.4vw,3.1rem)]  max-[549px]:grid max-[549px]:grid-cols-1 ">
        <SideBar />

        <div className=" flex flex-col gap-[54px] ">
          <section className="  items-center flex justify-between  flex-1 w-full gap-[26px] max-[896px]:flex-col-reverse ">
            <div className=" flex justify-between gap-2 ">
              <Select
                leftSection={<MdOutlineMyLocation color="#6B7280" size={24} />}
                classNames={select}
                placeholder="kigali, Rwanda"
                data={["React", "Angular", "Vue", "Svelte"]}
                searchable
                nothingFoundMessage="Nothing found..."
              />
              <Select
                leftSection={<BestDealIcon />}
                classNames={select}
                placeholder="Best deals"
                data={["React", "Angular", "Vue", "Svelte"]}
                searchable
                nothingFoundMessage="Nothing found..."
              />
            </div>

            <div className="flex gap-3  ">
              <TextInput
                w={268}
                styles={styles}
                placeholder="search for anything"
                leftSection={<SearchNormal1 size="14" color="#000" />}
              />
              <article className=" py-[clamp(0.4rem,0.9vw,0.8rem)] px-[clamp(0.5rem,1.1vw,1rem)] bg-[#6B7280] flex items-center rounded-lg cursor-pointer  max-[754px]:w-fit max-[754px]:justify-end">
                <IoFilter
                  color="#fff"
                  size={20}
                  className="w-[0.65rem,1.3vw,1.25rem]"
                />
              </article>
            </div>
          </section>
          <section
            className=" bg-no-repeat bg-cover flex  w-full object-fit h-full rounded-b-[2.5rem] rounded-tr-[2.5rem] items-center justify-center"
            style={{
              backgroundImage: "url('/home-bg.svg')",
            }}
          >
            <div className=" flex flex-col gap-[32px] mx-auto  justify-center px-5">
              <h2 className=" text-[clamp(1.5rem,3.3vw,3rem)] font-semibold max-w-[638px] text-white">
                EXPLORING THE FUTURE OF AGRICULTURAL INVESTMENT.
              </h2>
              <p className=" text-[#F3F4F6] text-[clamp(1rem,1.6vw,1.5rem)] font-semibold max-w-[638px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
                est felis, sagittis viverra nulla mattis scelerisque. Eget cras
                integer.
              </p>

              <Button classNames={brown}>Learn more</Button>
            </div>
          </section>
        </div>
      </section>
      <FarmCards />
    </main>
  );
}

export default Farms;
