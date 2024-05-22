"use client";

import { Moon, Sun, Sun1 } from "iconsax-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import clsx from "clsx";

import { Switch } from "@mantine/core";

export default function ThemeControl() {
  const [mounted, setMounted] = useState(false);
  const [checked, setChecked] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [control, setControl] = useState(false);

  // useEffect(() => {
  //   setMounted(false);
  // }, []);

  // if (mounted) {
  //   return null;
  // }
  return (
    // <div className=" gap-4 flex">
    //   <button onClick={() => setTheme("light")}>light</button>
    //   <button onClick={() => setTheme("dark")}>dark</button>
    // </div>

    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      size="sm"
      onLabel={
        <Sun1
          size={20}
          onClick={() => setTheme("light")}
          className={clsx(resolvedTheme === "dark" ? "bg-red" : "bg-white")}
        />
      }
      offLabel={<Moon size={20} onClick={() => setTheme("dark")} />}
      color="#1fcc4e"
    />
    // control ?
    // <Moon /> :
    // <Sun />
  );
}
