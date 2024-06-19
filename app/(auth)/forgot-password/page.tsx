"use client";

import { PasswordInput, Button, TextInput } from "@mantine/core";
import React from "react";
import classes from "@/app/button.module.css";
import { ThemeControl } from "@/shared/theme-control";
import AuthHeading from "@/auth/auth-heading";
import ForgotPasswordForm from "@/auth/forgot-password-form";

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
  return (
    <div className=" flex flex-col flex-1 bg-white dark:bg-primary-800 ">
      <div className=" flex items-end justify-end pr-7 pt-[7px] max-[731px]:hidden">
        <ThemeControl />
      </div>

      <section className=" px-[46px] flex items-center justify-center flex-col gap-[65px] flex-1 max-w-[1400px] h-[100dvh]">
        <div className=" flex flex-col gap-[50px]">
          <AuthHeading text="Forgot password?" />
          <p className=" text-[clamp(1rem,1.6vw,1.5rem)] font-medium text-[#6B7280] max-w-[476px] text-center dark:text-[#FCFCFD]">
            Input your new desired password in the input fields below to create
            a new password. We strongly advise you to store it safely.
          </p>
        </div>
        <ForgotPasswordForm />
      </section>
    </div>
  );
}

export default ResetPassword;
