import { HambergerMenu } from "iconsax-react";
import React from "react";

import Image from "next/image";
import ThemeControl from "@/shared/theme-control";
import { usePathname } from "next/navigation";
import LogoImg from "@/src/assets/logo-img.svg";

const navbar = [
  {
    name: "About Us ",
    link: "",
  },
  {
    name: "How it Works ",
    link: "",
  },
  {
    name: "Farmers ",
    link: "",
  },
  {
    name: "Blog ",
    link: "",
  },
];

function Header() {
  return (
    <header className=" bg-primary-400 dark:bg-secondary-100 py-2 px-[clamp(1.8rem,4.1vw,3.7rem)] sticky top-0  z-50  ">
      {/* py-[clamp(0.6rem,1.4vw,1rem)] */}
      <nav className=" justify-between flex  mx-auto   items-center ">
        <div className=" flex items-center justify-center">
          <figure className=" w-[clamp(3rem,5.8vw,5.2rem)] h-[clamp(2.5rem,5.8vw,5.2rem)]">
            <Image
              className="w-full"
              src={LogoImg}
              width={20}
              height={20}
              alt="logo-img"
            />
          </figure>
          <figure className=" w-[clamp(5rem,12vw,11rem)] h-[clamp(0.8rem,3vw,2.6rem)]">
            <Image
              className="w-full"
              src="/logo-text.svg"
              width={20}
              height={20}
              alt="logo-text"
            />
          </figure>
        </div>

        <section className=" flex gap-[clamp(0.8rem,3vw,3rem)] items-center">
          <ul className=" flex gap-[clamp(1.4rem,3vw,2.7rem)] items-center max-[727px]:hidden ">
            {navbar.map((item, idx) => (
              <li
                key={idx}
                className=" text-primary  text-base font-semibold hover:text-primary-200 cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>

          <ThemeControl />

          <div className=" hidden max-[727px]:flex  ">
            <HambergerMenu size="20" color="#1FCC4E" />
          </div>
        </section>
      </nav>
    </header>
  );
}

export default Header;
