"use client";
import React, { useState } from "react";
import {
  Select,
  TextInput,
  Button,
  FileInput,
  NumberInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Add, ArrowDown2 } from "iconsax-react";
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
function BioNextForm() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <section className="px-[28px] py-[18px] bg-white dark:bg-[#FFFFFF26] shadow-md flex flex-col gap-[25px]  max-[732px]:w-full w-[clamp(370px,48vw,700px)]  rounded-[30px]">
      <TextInput label="Zip code:" placeholder="Enter Code" styles={styles} />

      <Select
        rightSection={
          <ArrowDown2 size="16" color="#6B7280" variant="Outline" />
        }
        label="Valid Identity:"
        placeholder="Select Id"
        data={[
          { label: "NIN", value: "NIN" },
          { label: "Voters Card", value: "Voters Card" },
          { label: "Drivers License", value: "Drivers License" },
        ]}
        styles={styles}
      />

      <FileInput
        styles={styles}
        label="Upload Valid Identity:"
        placeholder="Choose a file to upload"
        rightSection={<Add />}
      />

      <TextInput
        label="Company name ( optional):"
        placeholder="Enter Company Name"
        styles={styles}
      />

      <NumberInput
        label="Company Registration Number ( optional):"
        placeholder="Enter Registration Number"
        styles={styles}
      />

      <div className=" pb-5 pt-4">
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
      </div>
    </section>
  );
}

export default BioNextForm;
