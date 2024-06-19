"use client";
import { Button, TextInput } from "@mantine/core";
import classes from "@/app/button.module.css";
import Image from "next/image";
import React, { useContext } from "react";
import { useTheme } from "next-themes";
import { ModalContext } from "@/providers/modal-provider";

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
    fontWeight: 500,
    fontSize: "16px",
  },
};
export default function WaitList() {
  const { setModalState } = useContext(ModalContext);
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className=" bg-white dark:bg-primary-800   items-center flex justify-center flex-1 h-full px-2">
      <section className=" mx-auto flex items-center justify-center flex-col gap-[clamp(2rem,5.8vw,5.2rem)] h-full px-2 ">
        <div className=" flex flex-col gap-[22px] items-center justify-center">
          <p className="text-[clamp(1rem,4vw,3.7rem)] max-w-[868px]   font-bold text-[#1F2937] dark:text-white px-2 text-center  ">
            Don’t miss out, join the queue and get to know first
          </p>
          <p
            className=" text-[#6B7280] font-normal text-[clamp(0.8rem,1.6vw,1.6rem)] dark:text-[#D1D5DB]  max-w-[741px] px-2
           text-center"
          >
            Welcome to FarmPal, where the future of agriculture meets innovative
            investing. we are thrilled to have you here.
          </p>
        </div>
        <div className=" flex w-[100%] items-center max-[732px]:flex-col max-[732px]:px-3 ">
          <figure className=" w-[322px] h-[333px] hidden  max-[732px]:flex">
            <Image
              width={20}
              height={20}
              src="/clock-sm.svg"
              alt="wait clock"
              className="w-full "
            />
          </figure>
          <figure className=" w-[322px] h-[333px] flex  max-[732px]:hidden">
            <Image
              width={20}
              height={20}
              src="/clock3.svg"
              alt="wait clock"
              className="w-full "
            />
          </figure>

          <form
            id="list-form"
            action="https://formspree.io/f/mrgnvazw"
            method="POST"
            // onSubmit={handleSubmit}
            className="  px-[53px] py-[29px] max-[732px]:py-[0] max-[732px]:pb-4  flex flex-col gap-[23px] flex-1 w-full bg-white dark:bg-[#FFFFFF26] rounded-tr-[30px] rounded-br-[30px] shadow-lg "
          >
            <TextInput
              required
              label="Full Name"
              placeholder="Enter Name"
              styles={styles}
            />

            <TextInput
              required
              id="email"
              type="email"
              name="email"
              label="Email Address"
              placeholder="example@mail.com"
              styles={styles}
            />

            <div className="flex self-center pb-3">
              <Button
                type="submit"
                // disabled={state.submitting}
                // onClick={() =>
                //   setModalState({
                //     component: <WaitListModal />,
                //     opened: true,
                //   })
                // }
                classNames={classes}
                styles={{
                  root: {
                    width: "290px",
                  },
                }}
              >
                Join Waitlist
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
