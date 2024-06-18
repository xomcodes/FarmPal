import React from "react";
import Img from "@/src/assets/img.svg";
import Image from "next/image";

export default function Partner() {
  return (
    <section className=" py-[clamp(2rem,4.9vw,4.6rem)] flex flex-col gap-[clamp(3rem,6.0vw,5rem)] bg-[#8EDC3E]  items-center ">
      <h3 className="font-bold text-[clamp(2rem,4vw,3.7rem)] text-[#000] ">
        Our Partners
      </h3>
      <section className=" grid grid-cols-4 gap-[clamp(2rem,6.9vw,6.2rem)] max-[362px]:grid-cols-3  ">
        <div className=" px-[clamp(0.7rem,1.7vw,1.6rem)] py-[clamp(0.7rem,1.3vw,1.2rem)] bg-[#353945] flex items-center justify-center">
          <figure className=" w-[clamp(2.4rem,4vw,3.6rem)] h-[clamp(1.7rem,3.2vw,2.8rem)] ">
            <Image src={Img} alt="image" className="w-full" />
          </figure>
        </div>
        <div className=" px-[clamp(0.7rem,1.7vw,1.6rem)] py-[clamp(0.7rem,1.3vw,1.2rem)] bg-[#353945] flex items-center justify-center">
          <figure className=" w-[clamp(2.4rem,4vw,3.6rem)] h-[clamp(1.7rem,3.2vw,2.8rem)] ">
            <Image src={Img} alt="image" className="w-full" />
          </figure>
        </div>
        <div className=" px-[clamp(0.7rem,1.7vw,1.6rem)] py-[clamp(0.7rem,1.3vw,1.2rem)] bg-[#353945] flex items-center justify-center">
          <figure className=" w-[clamp(2.4rem,4vw,3.6rem)] h-[clamp(1.7rem,3.2vw,2.8rem)] ">
            <Image src={Img} alt="image" className="w-full" />
          </figure>
        </div>
        <div className=" px-[clamp(0.7rem,1.7vw,1.6rem)] py-[clamp(0.7rem,1.3vw,1.2rem)] bg-[#353945] flex items-center justify-center">
          <figure className=" w-[clamp(2.4rem,4vw,3.6rem)] h-[clamp(1.7rem,3.2vw,2.8rem)] ">
            <Image src={Img} alt="image" className="w-full" />
          </figure>
        </div>
        <div className=" px-[clamp(0.7rem,1.7vw,1.6rem)] py-[clamp(0.7rem,1.3vw,1.2rem)] bg-[#353945] flex items-center justify-center">
          <figure className=" w-[clamp(2.4rem,4vw,3.6rem)] h-[clamp(1.7rem,3.2vw,2.8rem)] ">
            <Image src={Img} alt="image" className="w-full" />
          </figure>
        </div>
        <div className=" px-[clamp(0.7rem,1.7vw,1.6rem)] py-[clamp(0.7rem,1.3vw,1.2rem)] bg-[#353945] flex items-center justify-center">
          <figure className=" w-[clamp(2.4rem,4vw,3.6rem)] h-[clamp(1.7rem,3.2vw,2.8rem)] ">
            <Image src={Img} alt="image" className="w-full" />
          </figure>
        </div>
        <div className=" px-[clamp(0.7rem,1.7vw,1.6rem)] py-[clamp(0.7rem,1.3vw,1.2rem)] bg-[#353945] flex items-center justify-center">
          <figure className=" w-[clamp(2.4rem,4vw,3.6rem)] h-[clamp(1.7rem,3.2vw,2.8rem)] ">
            <Image src={Img} alt="image" className="w-full" />
          </figure>
        </div>
      </section>
    </section>
  );
}
