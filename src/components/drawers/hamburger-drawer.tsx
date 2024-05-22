import { Drawer, Text } from "@mantine/core";
import clsx from "clsx";
import { Blogger } from "iconsax-react";
import { useTheme } from "next-themes";
import React from "react";
import { CgCloseR } from "react-icons/cg";
import { FaBookReader } from "react-icons/fa";
import { GiFarmTractor, GiFarmer } from "react-icons/gi";
import { PiFarm } from "react-icons/pi";

type IDrawer = {
  opened: boolean;
  close: () => void;
};

const navbar = [
  {
    name: "About Us ",
    link: "",
    icon: <PiFarm size={24} />,
  },
  {
    name: "How it Works ",
    link: "",
    icon: <GiFarmTractor size={24} />,
  },
  {
    name: "Farmers ",
    link: "",
    icon: <GiFarmer size={24} />,
  },
  {
    name: "Blog ",
    icon: <FaBookReader size={24} />,
  },
];

export const HamburgerDrawer = ({ opened, close }: IDrawer) => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <Drawer
      position="right"
      withCloseButton={false}
      opened={opened}
      onClose={close}
      styles={{
        root: {
          display: "flex",
          flexDirection: "column",
        },
        body: {
          height: "100%",
          overflow: "auto",
          padding: 0,
        },
      }}
    >
      <section className="flex flex-col   gap-8 bg-white  dark:bg-[#191919] h-full ">
        <div className=" flex items-end  justify-end p-2">
          <CgCloseR
            size={30}
            className="cursor-pointer"
            onClick={() => close()}
            color={resolvedTheme === "light" ? "#000" : "#fff"}
          />
        </div>
        <div className=" py-[4rem] px-[4rem] flex flex-col  gap-10">
          {navbar.map((item, idx) => (
            <div
              key={idx}
              className=" flex flex-col text-black dark:text-white font-bold text-[1rem] p-3 bg-primary hover:bg-primary-500 rounded-lg"
            >
              <ul className=" flex gap-4 items-center">
                <li>{item.icon}</li>

                <li>{item.name}</li>
              </ul>
            </div>
          ))}
        </div>

        {/* <div className="iflex justify-between">
          <Heading title="Activity Log" />
          <Link href="/activity-log" className="text-bms-red-600">
            View All
          </Link>
        </div> */}
      </section>
    </Drawer>
  );
};
