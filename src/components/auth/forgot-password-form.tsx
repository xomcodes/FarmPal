import { Button, TextInput } from "@mantine/core";
import classes from "@/app/button.module.css";
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
  },

  label: {
    paddingBottom: "8px",
    color: "#6B7280",
    fontSize: "16px",
  },
};
function ForgotPasswordForm() {
  return (
    <section className="px-[28px] py-[18px] bg-white dark:bg-[#FFFFFF26] shadow-md flex flex-col gap-[25px]  max-[732px]:w-full w-[clamp(370px,48vw,700px)]  rounded-[30px]">
      <TextInput
        label="Email Address:"
        placeholder="Enter Email"
        styles={styles}
      />

      <Button
        classNames={classes}
        styles={{
          root: {
            width: "100%",
          },
        }}
      >
        Send Link
      </Button>
      <div className=" flex flex-col gap-4 items-center">
        <p className=" text-[#6B7280] dark:text-[#FCFCFD]  text-[14px] font-medium">
          Do you need help?
        </p>
        <p className=" text-primary text-[14px] font-medium text-center">
          Contact Customer support
        </p>
      </div>
    </section>
  );
}

export default ForgotPasswordForm;
