import { LogoutCurve, Profile } from "iconsax-react";
import { usePathname } from "next/navigation";
import React from "react";
import { LuSettings2 } from "react-icons/lu";
import { TbBriefcase2 } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import DashboardIcon from "./dashboard-icon";
import { PiFarm } from "react-icons/pi";
import Link from "next/link";
import clsx from "clsx";

const sideList = [
  {
    icon: <PiFarm size={24} />,
    name: "Farms",
    link: "/farms",
  },
  {
    icon: <DashboardIcon />,
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: <TbBriefcase2 size={24} />,
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    icon: <Profile size="24" variant="Bold" />,
    name: "Profile",
    link: "/profile",
  },
  {
    icon: <LuSettings2 size={24} />,
    name: "Settings",
    link: "/settings",
  },

  {
    icon: <TfiHeadphoneAlt size={24} />,
    name: "Support",
    link: "/support",
  },
  {
    icon: <LogoutCurve size={24} className=" rotate-180" />,
    name: "Logout",
    link: "/logout",
  },
];
export default function SideBar() {
  const pathname = usePathname();
  return (
    <div className=" flex flex-col    bg-[#FCFCFD] shadow-sm  rounded-lg max-[549px]:hidden  ">
      {sideList.map(({ name, icon, link }, idx) => (
        <Link
          href={link}
          key={idx}
          className={clsx(
            pathname.includes(link) ? "bg-primary" : "bg-white",
            " flex flex-col gap-[10px] py-[23px] px-10  items-center text-secondary-300 hover:bg-primary-600 cursor-pointer rounded-t-lg  "
          )}
        >
          {icon}
          <h3 className=" text-[14px] font-extrabold  text-secondary-300  ">
            {name}
          </h3>
        </Link>
      ))}
    </div>
  );
}
