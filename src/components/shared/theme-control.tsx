"use client";

import React, { useEffect, useState } from "react";

import { clsx } from "clsx";
import { Moon, Sun1 } from "iconsax-react";
import { useTheme } from "next-themes";
// import { Switch } from "@mantine/core";
export const ThemeControl = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [control, setControl] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <main className=" cursor-pointer">
      {!control ? (
        <Sun1
          onClick={() => {
            setTheme("light");
            setControl(true);
          }}
          size="24"
          color="#d07806"
          variant="Bold"
        />
      ) : (
        <Moon
          onClick={() => {
            setTheme("dark");
            setControl(false);
          }}
          size="22"
          color="#1fcc4e"
          variant="Bold"
        />
      )}

      {/* // <Switch
//   checked={checked}
//   onChange={(event) => setChecked(event.currentTarget.checked)}
//   size="sm"
//   onLabel={
//     <Sun1
//       size={20}
//       onClick={() => setTheme("light")}
//       className={clsx(resolvedTheme === "dark" ? "bg-red" : "bg-white")}
//     />
//   }
//   offLabel={<Moon size={20} onClick={() => setTheme("dark")} />}
//   color="#1fcc4e"
// /> */}
    </main>
  );
};
