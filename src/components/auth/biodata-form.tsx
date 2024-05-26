"use client";
import React, { useState } from "react";
import { Select, TextInput, Button } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { ArrowDown2 } from "iconsax-react";
import classes from "@/app/button.module.css";
import Link from "next/link";

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
function BiodataForm() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <section className="px-[28px] py-[18px] bg-white dark:bg-[#FFFFFF26] shadow-md flex flex-col gap-[25px]  max-[732px]:w-full w-[clamp(370px,48vw,700px)]  rounded-[30px]">
      <DateInput
        styles={styles}
        value={value}
        onChange={setValue}
        label="Date of Birth:"
        placeholder="Select Data"
      />

      <Select
        rightSection={
          <ArrowDown2 size="16" color="#6B7280" variant="Outline" />
        }
        label="Gender"
        placeholder="Male"
        data={[
          { label: "Male", value: "Male" },
          { label: "Female", value: "Female" },
        ]}
        styles={styles}
      />
      <TextInput
        label="Nationality"
        placeholder="Enter Nationality"
        styles={styles}
      />

      <Select
        rightSection={
          <ArrowDown2 size="16" color="#6B7280" variant="Outline" />
        }
        label="Current Country:"
        placeholder="Select Country"
        data={[
          { label: "Rwanda", value: "Rwanda" },
          { label: "Nigeria", value: "Nigeria" },
        ]}
        styles={styles}
      />

      <TextInput
        label="Residential Address:"
        placeholder="Enter Address"
        styles={styles}
      />

      <Link href="./biodata-next" className=" pb-5 pt-4">
        <Button
          classNames={classes}
          styles={{
            root: {
              width: "100%",
            },
          }}
        >
          Next
        </Button>
      </Link>
    </section>
  );
}

export default BiodataForm;
