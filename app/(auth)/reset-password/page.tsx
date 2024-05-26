"use client";

import { PasswordInput, Button } from "@mantine/core";
import React from "react";
import classes from "@/app/button.module.css";
import { ThemeControl } from "@/shared/theme-control";
import { useTheme } from "next-themes";
import AuthHeading from "@/auth/auth-heading";

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
  },
};

function ResetPassword() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <div className=" flex flex-col flex-1 bg-white dark:bg-black ">
      <div className=" flex items-end justify-end pr-7 pt-[7px] max-[731px]:hidden">
        <ThemeControl />
      </div>

      <section className=" px-[46px] flex items-center justify-center flex-col gap-[65px] flex-1 max-w-[1400px] h-[100dvh]">
        <div className=" flex flex-col gap-[50px]">
          <AuthHeading text="Reset Password" />
          <p className=" text-[clamp(1rem,1.6vw,1.5rem)] font-medium text-[#6B7280] max-w-[476px] text-center dark:text-[#FCFCFD]">
            Input your new desired password in the input fields below to create
            a new password. We strongly advise you to store it safely.
          </p>
        </div>
        <section className="px-[28px] py-[18px] bg-white dark:bg-[#FFFFFF26] shadow-md flex flex-col gap-[25px]  max-[732px]:w-full w-[clamp(370px,48vw,700px)]  rounded-[30px]">
          <PasswordInput
            label="New Password"
            withAsterisk
            placeholder="Enter Password"
            styles={styles}
          />
          <PasswordInput
            styles={styles}
            label="Confirm Password:"
            withAsterisk
            placeholder="Enter Password"
          />
          <Button
            classNames={classes}
            styles={{
              root: {
                width: "100%",
              },
            }}
          >
            Submit
          </Button>
          <div className=" flex flex-col gap-4 items-center">
            <p className=" text-[#6B7280] dark:text-[#FCFCFD]  text-[14px] font-medium">
              Do you need help?
            </p>
            <p className=" text-primary text-[14px] font-medium">
              Contact Customer support
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default ResetPassword;
