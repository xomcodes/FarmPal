"use client";
import { Button, TextInput } from "@mantine/core";
import classes from "@/app/button.module.css";
import Image from "next/image";
import React, { useContext } from "react";
import { useTheme } from "next-themes";
import { ModalContext } from "@/providers/modal-provider";
import WaitListModal from "@/modals/wait-list-modal";

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
    color: "#374151",
    fontSize: "16px",
  },
};
export default function WaitList() {
  const { setModalState } = useContext(ModalContext);
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <div className=" bg-white dark:bg-black  h-full items-center flex justify-center flex-1">
      <section className=" mx-auto flex items-center justify-center flex-col gap-[clamp(2rem,5.8vw,5.2rem)] h-full ">
        <div className=" flex flex-col gap-[22px] items-center">
          <h4 className="text-[clamp(1.8rem,4vw,3.7rem)] max-w-[868px] text-center  font-bold text-[#1F2937] dark:text-white px-2 ">
            Don’t miss out, join the queue and get to know first
          </h4>
          <p
            className=" text-[#6B7280] font-normal text-[clamp(1rem,1.6vw,1.6rem)] dark:tect-[#D1D5DB]  max-w-[741px] px-2
           text-center"
          >
            Welcome to FarmPal, where the future of agriculture meets innovative
            investing. we are thrilled to have you here.
          </p>
        </div>
        <div className=" flex w-[100%] items-center max-[732px]:flex-col ">
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

          <section className="  px-[53px] py-[27px] max-[732px]:py-[0] max-[732px]:pb-4  flex flex-col gap-[23px] flex-1 w-full bg-white dark:bg-[#FFFFFF26] rounded-tr-[30px] rounded-br-[30px] shadow-lg ">
            <TextInput
              label="Full Name"
              placeholder="Enter Name"
              //   styles={styles}
              styles={{
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
                  color: resolvedTheme === "light" ? "#000" : "#fff",
                  fontSize: "16px",
                },
              }}
            />
            <TextInput
              label="Email Address"
              placeholder="Enter Address"
              styles={{
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
                  color: resolvedTheme === "light" ? "#000" : "#fff",
                  fontSize: "16px",
                },
              }}
            />

            <div className="flex self-center pb-3">
              <Button
                onClick={() =>
                  setModalState({
                    component: <WaitListModal />,
                    opened: true,
                  })
                }
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
          </section>
        </div>
      </section>
    </div>
  );
}
