"use client";
import {
  PasswordInput,
  Button,
  TextInput,
  Checkbox,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import "@mantine/core/styles.css";
import PhoneInput from "react-phone-number-input";
import { useTheme } from "next-themes";
import Link from "next/link";

import AuthHeading from "./auth-heading";
import classes from "@/app/button.module.css";
import { IoLogoTwitter } from "react-icons/io";
import { BsGoogle } from "react-icons/bs";
import { ImAppleinc } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { useForm } from "@mantine/form";

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
    //   color: resolvedTheme === "light" ? "#6B7280" : "#fff",
    fontSize: "16px",
    fontWeight: 500,
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

function SignUpForm() {
  const form = useForm({
    initialValues: {
      first_name: "",
      last_name: "",
      middle_name: "",
      email: "",
      phone_number: "",
    },
  });

  const { resolvedTheme, setTheme } = useTheme();

  const [value, setValue] = useState();
  return (
    <section className="px-[46px] flex items-center justify-center flex-col gap-[65px] flex-1 max-w-[1400px] h-[100dvh]">
      <AuthHeading text="Sign Up" />
      <section className="px-[28px] py-[18px] bg-white dark:bg-[#FFFFFF26] shadow-md flex flex-col gap-[25px]  max-[732px]:w-full w-[clamp(370px,48vw,700px)]  rounded-[30px]">
        <TextInput
          required
          label="Full Name"
          placeholder="Enter name"
          styles={styles}
        />
        <TextInput
          required
          label="Email Address"
          placeholder="@example.com"
          styles={styles}
        />

        {/* <div>
          <p>Phone Number</p>
          <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={() => setValue}
          />
        </div> */}

        <PasswordInput
          styles={styles}
          label="Password:"
          withAsterisk
          placeholder="Enter Password"
        />

        <TextInput
          label="Referral code (optional):"
          placeholder="Enter Code"
          styles={styles}
        />

        <section className=" justify-between flex items-center">
          <Checkbox
            defaultChecked
            label={
              <p className="text-[#6B7280] font-normal text-[16px]">
                I acknowledge that i have read and agree to{" "}
                <span className="text-primary">FarmPal’s terms</span> and accept
                the
                <span className="text-primary"> risk policy</span>
              </p>
            }
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
            Sign Up
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
            Already have an account?{" "}
            <Link href="/sign-up" className=" text-primary">
              Sign In
            </Link>
          </h3>
        </section>
      </section>
    </section>
  );
}

export default SignUpForm;
