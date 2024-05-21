import { Button, TextInput } from "@mantine/core";
import classes from "@/app/button.module.css";
import Image from "next/image";
import React from "react";

const styles = {
  root: {
    width: "100%",
  },
  input: {
    width: "100%",
    height: "50px",
    borderRadius: "8px",
    border: "1px solid #1FCC4E",
    // background: "#D1D5DB",
    // width: "100%",
    // paddingLeft: "14px",
  },

  label: {
    paddingBottom: "8px",
    color: "#374151",
    fontSize: "16px",
  },
};
export default function WaitList() {
  return (
    <div className=" bg-white dark:bg-black  h-full items-center flex justify-center px-3">
      <section className=" mx-auto flex items-center justify-center flex-col gap-[clamp(2rem,5.8vw,5.2rem)] h-full ">
        <div className=" flex flex-col gap-[22px] items-center">
          <h4 className="text-[clamp(1.8rem,4vw,3.7rem)] max-w-[868px] text-center  font-bold text-[#1F2937] ">
            Don’t miss out, join the queue and get to know first
          </h4>
          <p
            className=" text-[#6B7280] font-normal text-[clamp(1rem,1.6vw,1.6rem)] 
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

          <section className=" py-[ clamp(1rem,1vw,2rem)] px-[53px]   flex flex-col gap-[23px] flex-1 w-full bg-white rounded-tr-[30px] rounded-br-[30px] shadow-sm ">
            <TextInput
              label="Full Name"
              placeholder="Enter Name"
              styles={styles}
            />
            <TextInput
              styles={styles}
              label="Email Address"
              placeholder="Enter Address"
            />

            <div className="flex self-center pb-3">
              <Button
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
