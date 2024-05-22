"use client";

import Image from "next/image";
import { Button } from "@mantine/core";

import classes from "@/app/button.module.css";
import Link from "next/link";
import { ModalContext } from "@/providers/modal-provider";
import { useContext } from "react";

export default function WaitListModal() {
  const { setModalState, close } = useContext(ModalContext);
  return (
    <main className=" w-[clamp(15rem,34vw,30rem)] items-center h-[390px] px-[20px]  ">
      <section className="flex-col w-full p-[2px] gap-[40px] flex items-center ">
        <div className=" items-center flex flex-col gap-[24px] justify-center">
          <figure className=" w-[clamp(5rem,8vw,7.5rem)] h-[clamp(5rem,8vw,7.5rem)]">
            <Image
              width={20}
              height={20}
              src="/wait-list-success.svg"
              alt="success"
              className="w-full"
            />
          </figure>

          <div className=" flex flex-col gap-2">
            <h6 className=" font-bold text-[clamp(1.5rem,1.6vw,2.2rem)] text-[#1F2937] text-center">
              HURRAY!
            </h6>
            <p className=" text-[clamp(1rem,1.6vw,1.5rem)] font-medium text-[#6B7280] text-center ">
              You have been added to the wait list, stayed tuned for email
              update!
            </p>
          </div>
        </div>

        <Link href="/" className="flex self-center  px-3">
          <Button
            onClick={() => close()}
            classNames={classes}
            styles={{
              root: {
                width: "fit-content",
                // width: "290px",
                // paddingInline: "200px",
              },
            }}
          >
            Back to home
          </Button>
        </Link>
      </section>
    </main>
  );
}
