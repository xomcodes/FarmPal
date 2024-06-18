import React from "react";
import HeadingText from "./heading-text";

const teamList = [
  { name: "Kelvin Gates", role: "Founder", image: "/kelvin-pix.svg" },
  { name: "Joe Brandon", role: "Co-Founder", image: "/joe.svg" },
  { name: "Grace  Jones", role: "Operations Manager", image: "/grace.svg" },
  { name: "Isaac Okafor", role: "Legal Advisor", image: "/isaac.svg" },
  { name: "Linda Banku", role: "Project Manager", image: "/linda.svg" },
  {
    name: "Victoria Adewale",
    role: "Social Media coordinator",
    image: "/victoria.svg",
  },
  {
    name: "Stephanie brooks",
    role: "Marketing specialist",
    image: "/stephanie.svg",
  },
  { name: "Charity Roberts", role: "Digital Marketer", image: "/charity.svg" },
];

export default function Team() {
  return (
    <main className=" pt-[clamp(1.8rem,4.9vw,4.4rem)] pb-[clamp(50px,6.9vw,100px)] bg-white  dark:bg-[#132b14] flex  flex-col gap-[clamp(1.8rem,4vw,3.9rem)] items-center ">
      <HeadingText text="Meet Our Team" />
      <div className="  grid grid-cols-4 gap-[clamp(0.7rem,1.5vw,1.3rem)]  max-[617px]:grid-cols-3 max-[455px]:grid-cols-2 max-[390px]:grid-cols-1  gap-y-[clamp(1.6rem,3.5vw,3.1rem)]">
        {teamList?.map((item, idx) => (
          <div
            key={idx}
            className=" flex flex-col gap-[27px] items-center max-[455px]:gap-[27px]"
          >
            <figure className=" w-[clamp(8rem,22vw,19.8rem)] h-[clamp(7rem,20.9vw,18.8rem)]">
              {/* <Image src={Kelvin} alt="kelvin" /> */}
              <img
                src={item?.image}
                alt="kelvin"
                className=" w-full min-w-[130px]"
                //   width={20}
                //   height={20}
              />
            </figure>
            <article className=" flex flex-col py-[clamp(0.4rem,1.2vw,1.1rem)] px-[clamp(0.6rem,4.8vw,4.4rem)] items-center rounded-[30px] bg-[#F3FEDF] dark:bg-[#FFFFFF33]">
              <p className="  text-[#1F2937] dark:text-white text-[clamp(0.7rem,1.6vw,1.5rem)] font-bold">
                {item?.name}
              </p>
              <p className=" text-[#6B7280] dark:text-white text-[clamp(0.5rem,1.1vw,1rem)] font-medium">
                {item?.role}
              </p>
            </article>
          </div>
        ))}
      </div>
    </main>
  );
}
