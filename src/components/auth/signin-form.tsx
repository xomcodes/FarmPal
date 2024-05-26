"use client";
import {
  PasswordInput,
  Button,
  TextInput,
  Checkbox,
  Divider,
} from "@mantine/core";
import React from "react";
import "@mantine/core/styles.css";

import AuthHeading from "./auth-heading";
import classes from "@/app/button.module.css";
import { useTheme } from "next-themes";
import Link from "next/link";
import { IoLogoTwitter } from "react-icons/io";
import { BsGoogle } from "react-icons/bs";
import { ImAppleinc } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";

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
    // color: resolvedTheme === "light" ? "#000" : "#fff",
    fontSize: "16px",
  },
};

const icons = [
  { name: "", icon: <IoLogoTwitter color="#4C6FFF" size={22} /> },
  { name: "", icon: <BsGoogle color="#BA0000" size={22} /> },
  ,
  { name: "", icon: <ImAppleinc color="#000000" size={22} /> },
  ,
  { name: "", icon: <FaFacebookF color="#4C6FFF" size={22} /> },
];

function SignInForm() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <section className="px-[46px] flex items-center justify-center flex-col gap-[65px] flex-1 max-w-[1400px] h-[100dvh]">
      <AuthHeading text="Sign In" />
      <section className="px-[28px] py-[18px] bg-white dark:bg-[#FFFFFF26] shadow-md flex flex-col gap-[25px]  max-[732px]:w-full w-[clamp(370px,48vw,700px)]  rounded-[30px]">
        <TextInput
          required
          label="Email Address"
          placeholder="@example.com"
          styles={styles}
        />
        <PasswordInput
          styles={styles}
          label="Confirm Password:"
          withAsterisk
          placeholder="Enter Password"
        />
        <section className=" justify-between flex items-center">
          <Checkbox
            defaultChecked
            label="Remember me"
            color="#1fcc4e"
            styles={{
              root: {
                color: "#1fcc4e",
              },
              label: {
                color: "#9CA3AF",
              },
            }}
          />
          <Link
            href="/forgot-password"
            className=" text-[#9CA3AF] text-[14px] font-normal "
          >
            Forgot password?
          </Link>
        </section>

        <section className=" flex flex-col gap-[25px] items-center">
          <Button
            classNames={classes}
            styles={{
              root: {
                width: "100%",
              },
            }}
          >
            Sign In
          </Button>

          <div className="flex justify-between items-center  w-full">
            <span className="bg-[#D1D5DB] dark:bg-[rgba(255,255,255,0.10)] w-[43%] h-[1.8px]"></span>
            <p className=" text-[#374151] dark:text-[#D1D5DB] text-base font-medium ">
              or
            </p>
            <span className="bg-[#D1D5DB] dark:bg-[rgba(255,255,255,0.10)] w-[43%]  h-[1.8px]"></span>
          </div>
          <section className=" flex gap-[32px] items-center">
            {icons?.map((item, idx) => (
              <article
                key={idx}
                className=" flex px-[16px] py-[18px] w-[52px] h-[52px] items-center rounded-full bg-[#F5F7F9] border-[#ddd] border cursor-pointer"
              >
                {item?.icon}
              </article>
            ))}
          </section>

          <h3 className=" font-normal text-[16px] text-[#6B7280]">
            Don’t have an account?{" "}
            <Link href="/sign-up" className=" text-primary">
              Sign Up
            </Link>
          </h3>
        </section>
      </section>
    </section>
  );
}

export default SignInForm;
