"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import LogoImg from "@/src/assets/logo-img.svg";
2;
import {
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  const pathname = usePathname();
  return (
    <>
      {pathname.includes("/wait-list") ? null : (
        <footer className=" py-[clamp(1.4rem,3.2vw,3vw)] px-[clamp(2.5rem,5.5vw,5rem)] bg-primary  dark:bg-primary-700 flex flex-col gap-[clamp(1.5rem,3.3vw,3rem)] ">
          <div>
            <figure className=" w-[clamp(4rem,10vw,9rem)] h-[clamp(4rem,10vw,9rem)]">
              <Image
                className="w-full"
                src={LogoImg}
                // width={20}
                // height={20}
                alt="logo-img"
              />
            </figure>
            <h3 className=" text-[clamp(0.9rem,1.3vw, 20px)] font-bold text-white border-b border-b-[#D1D5DB] pb-[clamp(1.5rem,3.3vw,3rem)]">
              Kigali, Buture, Rwanda,
            </h3>
          </div>

          <div className=" grid justify-between grid-cols-4 border-b border-b-[#D1D5DB] pb-[clamp(1.5rem,3.3vw,3rem)] max-[530px]:grid-cols-2">
            <div className=" flex flex-col gap-[36px]">
              <h2 className=" text-[clamp(0.9rem,1.3vw,1.25rem)] font-semibold text-white">
                Stay connected
              </h2>

              <div className=" flex flex-col gap-[20px]">
                <p className=" text-[clamp(0.9rem,1.25vw,1.25rem] text-white font-bold">
                  Join Us
                </p>
                <article className=" flex gap-[9.6px]">
                  <FaYoutube color="#fff" size={16} />
                  <FaFacebookF color="#fff" size={16} />
                  <FaTwitter color="#fff" size={16} />
                  <BsInstagram color="#fff" size={18} />
                  <FaLinkedinIn color="#fff" size={16} />
                </article>
              </div>
            </div>
            <div className=" flex flex-col gap-[clamp(1.3rem,1.94vw,1.7rem)]">
              <h2 className=" text-[clamp(0.9rem,1.3vw,1.25rem)] font-semibold text-white">
                Company
              </h2>

              <ul className=" flex flex-col gap-[16px] decoration-none list-none">
                <li className="text-white font-medium text-[clamp(0.8rem,1vw,1rem)]">
                  About Us
                </li>
                <li className="text-white font-medium text-[clamp(0.8rem,1vw,1rem)]">
                  Partner with us
                </li>
                <li className="text-white font-medium text-[clamp(0.8rem,1vw,1rem)]">
                  FAQs
                </li>
              </ul>
            </div>
            <div className=" flex flex-col gap-[clamp(1.3rem,1.94vw,1.7rem)]">
              <h2 className=" text-[clamp(0.9rem,1.3vw,1.25rem)] font-semibold text-white">
                Products
              </h2>

              <ul className=" flex flex-col gap-[16px] list-none ">
                <li className="text-white font-medium text-[clamp(0.8rem,1vw,1rem)] ">
                  Privacy Policy
                </li>
                <li className="text-white font-medium text-[clamp(0.8rem,1vw,1rem)]">
                  Terms and Conditions
                </li>
                <li className="text-white font-medium text-[clamp(0.8rem,1vw,1rem)]">
                  FAQs
                </li>
              </ul>
            </div>
            <div className=" flex flex-col gap-[clamp(1.3rem,1.94vw,1.7rem)]">
              <h2 className=" text-[clamp(0.9rem,1.3vw,1.25rem)] font-semibold text-white">
                Legal
              </h2>

              <ul className=" flex flex-col gap-[16px] list-none ">
                <li className="text-white font-medium text-[clamp(0.8rem,1vw,1rem)]">
                  About Us
                </li>
                <li className="text-white font-medium text-[clamp(0.8rem,1vw,1rem)]">
                  Partner with us
                </li>
                <li className="text-white font-medium text-[clamp(0.8rem,1vw,1rem)]">
                  FAQs
                </li>
              </ul>
            </div>
            {/* <div className=" flex flex-col gap-[36px]">
              <h2 className=" text-[clamp(0.9rem,1.3vw,1.25rem)] font-semibold text-white">
                Stay connected
              </h2>

              <div className=" flex flex-col gap-[20px]">
                <p className=" text-[clamp(0.9rem,1.25vw,1.25rem] text-white font-bold">
                  Join Us
                </p>
                <article className=" flex gap-[9.6px]">
                  <FaYoutube color="#fff" size={16} />
                  <FaFacebookF color="#fff" size={16} />
                  <FaTwitter color="#fff" size={16} />
                  <BsInstagram color="#fff" size={18} />
                  <FaLinkedinIn color="#fff" size={16} />
                </article>
              </div>
            </div> */}
          </div>
          <p className="text-[#FCFCFD] text-center text-[clamp(0.7rem,0.9vw,0.8rem)] font-normal">
            FarmPal @ 2024. All rights reserved.
          </p>
        </footer>
      )}
    </>
  );
}

export default Footer;
