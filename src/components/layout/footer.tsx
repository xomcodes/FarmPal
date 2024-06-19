"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import LogoImg from "@/src/assets/logo-img.svg";
import { Button, TextInput } from "@mantine/core";
import classes from "@/app/brown-button.module.css";
import {
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const styles = {
  root: {
    width: "100%",
  },
  input: {
    height: "50px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    background: "transparent",

    // width: "100%",
    // paddingLeft: "14px",
  },
};
function Footer() {
  const pathname = usePathname();
  return (
    <>
      {pathname.includes("/wait-list") ? null : (
        <footer className=" py-[clamp(1.4rem,3.2vw,3vw)] px-[clamp(2.5rem,5.5vw,5rem)] bg-primary  dark:bg-primary-700 flex flex-col gap-[clamp(1.5rem,3.3vw,3rem)] ">
          <section className=" flex flex-col gap-[73px]">
            <div className="  flex items-center justify-between  max-[600px]:flex-col   max-[600px]:w-full  max-[600px]:gap-2 ">
              <article className=" flex flex-col gap-4 flex-1">
                <p className="  text-[clamp(1rem,2.1vw,1.5rem)] whitespace-nowrap flex-1 text-white font-bold">
                  Subscribe Newsletters
                </p>
                <p className=" font-medium text-[16px] text-white">
                  Keep up to date with everything FarmPal
                </p>
              </article>
              <div className=" flex border border-[#ddd]  px-[clamp(6px,0.8vw,12px)] w-full rounded-md items-center flex-1  ">
                <TextInput styles={styles} placeholder="Enter your email" />
                <div className=" max-[600px]:hidden">
                  <Button
                    classNames={classes}
                    styles={{
                      root: {
                        paddingInline: 10,
                        width: "fit-content",
                        height: 45,
                      },
                      inner: {
                        width: "fit-content",
                        fontSize: "16px",
                      },
                    }}
                  >
                    Subscribe Now
                  </Button>
                </div>
              </div>

              <div className=" hidden max-[600px]:flex">
                <Button
                  classNames={classes}
                  styles={{
                    root: {
                      width: "fit-content",
                    },
                    inner: {
                      width: "fit-content",
                      fontSize: "16px",
                    },
                  }}
                >
                  Subscribe Now
                </Button>
              </div>
            </div>
            {/* </section> */}

            <div className=" grid justify-between grid-cols-4 border-t border-t-[#D1D5DB] border-b border-b-[#D1D5DB]  pt-[clamp(1.5rem,3.3vw,3rem)] pb-[clamp(1.5rem,3.3vw,3rem)] max-[530px]:grid-cols-2 ">
              <section className="">
                <div>
                  <h2 className=" text-[clamp(0.9rem,1.3vw,1.25rem)] font-semibold text-white">
                    Stay connected
                  </h2>
                  <figure className="  w-[clamp(2.3rem,5.2vw,4.6rem)] ">
                    <Image
                      className="w-full"
                      src={LogoImg}
                      // width={20}
                      // height={20}
                      alt="logo-img"
                    />
                  </figure>
                  <h3 className=" text-[clamp(0.9rem,1.3vw,20px)] font-bold text-white pb-2">
                    Kigali, Buture, Rwanda,
                  </h3>
                </div>

                <article className=" flex gap-[9.6px]">
                  <FaYoutube color="#fff" size={16} />
                  <FaFacebookF color="#fff" size={16} />
                  <FaTwitter color="#fff" size={16} />
                  <BsInstagram color="#fff" size={18} />
                  <FaLinkedinIn color="#fff" size={16} />
                </article>
                {/* </div> */}
                {/* </div> */}
              </section>
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
            </div>
          </section>

          <p className="text-[#FCFCFD] text-center text-[clamp(0.7rem,0.9vw,0.8rem)] font-normal  ">
            FarmPal @ 2024. All rights reserved.
          </p>
        </footer>
      )}
    </>
  );
}

export default Footer;
