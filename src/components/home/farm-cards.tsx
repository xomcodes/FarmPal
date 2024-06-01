import React from "react";
import classes from "@/app/button.module.css";
import Image from "next/image";
import { Button } from "@mantine/core";
import { AppPagination } from "@/shared/app-pagination";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const farmList = [
  {
    name: "Cassava farm_1",
    cost: "USD120.00",
    begins: "12th May 2024",
    ends: "30th May 2024",
    location: "Remera , Gasabo Rwanda",
    ros: "10.9%-30.9%",
    img: "/farm-img.svg",
    tag: "Avaliable",
    id: 1,
  },
  {
    name: "Cassava farm_1",
    cost: "USD120.00",
    begins: "12th May 2024",
    ends: "30th May 2024",
    location: "Remera , Gasabo Rwanda",
    ros: "10.9%-30.9%",
    img: "/farm-img.svg",
    tag: "Soldout",
  },
  {
    name: "Cassava farm_1",
    cost: "USD120.00",
    begins: "12th May 2024",
    ends: "30th May 2024",
    location: "Remera , Gasabo Rwanda",
    ros: "10.9%-30.9%",
    img: "/farm-img.svg",
    tag: "Avaliable",
  },
  {
    name: "Cassava farm_1",
    cost: "USD120.00",
    begins: "12th May 2024",
    ends: "30th May 2024",
    location: "Remera , Gasabo Rwanda",
    ros: "10.9%-30.9%",
    img: "/farm-img.svg",
    tag: "Soldout",
  },
];

const avaliableList = [
  {
    name: "Cassava farm_1",
    cost: "USD120.00",
    begins: "12th May 2024",
    ends: "30th May 2024",
    location: "Remera , Gasabo Rwanda",
    ros: "10.9%-30.9%",
    img: "/farm-img.svg",
    tag: "Avaliable",
  },
  {
    name: "Cassava farm_1",
    cost: "USD120.00",
    begins: "12th May 2024",
    ends: "30th May 2024",
    location: "Remera , Gasabo Rwanda",
    ros: "10.9%-30.9%",
    img: "/farm-img.svg",
    tag: "Avaliable",
  },
  {
    name: "Cassava farm_1",
    cost: "USD120.00",
    begins: "12th May 2024",
    ends: "30th May 2024",
    location: "Remera , Gasabo Rwanda",
    ros: "10.9%-30.9%",
    img: "/farm-img.svg",
    tag: "Soldout",
  },
  {
    name: "Cassava farm_1",
    cost: "USD120.00",
    begins: "12th May 2024",
    ends: "30th May 2024",
    location: "Remera , Gasabo Rwanda",
    ros: "10.9%-30.9%",
    img: "/farm-img.svg",
    tag: "Soldout",
  },
  {
    name: "Cassava farm_1",
    cost: "USD120.00",
    begins: "12th May 2024",
    ends: "30th May 2024",
    location: "Remera , Gasabo Rwanda",
    ros: "10.9%-30.9%",
    img: "/farm-img.svg",
    tag: "Avaliable",
  },
  {
    name: "Cassava farm_1",
    cost: "USD120.00",
    begins: "12th May 2024",
    ends: "30th May 2024",
    location: "Remera , Gasabo Rwanda",
    ros: "10.9%-30.9%",
    img: "/farm-img.svg",
    tag: "Avaliable",
  },
  {
    name: "Cassava farm_1",
    cost: "USD120.00",
    begins: "12th May 2024",
    ends: "30th May 2024",
    location: "Remera , Gasabo Rwanda",
    ros: "10.9%-30.9%",
    img: "/farm-img.svg",
    tag: "Avaliable",
  },
];

function FarmCards() {
  const { push } = useRouter();
  return (
    <section className=" flex flex-col gap-[23px]  w-full">
      <div className=" flex flex-col gap-[clamp(1.5rem,3.4vw,3.1rem)]">
        <h4 className="font-bold text-[clamp(1.5rem,2.7vw,2.5rem)]  ">
          Best Deals for you
        </h4>
        <section className=" grid grid-cols-4 gap-[clamp(1rem,3vw,2.8rem)]   ">
          {farmList?.map(
            (
              { name, cost, begins, location, ros, img, ends, tag, id },
              idx
            ) => (
              <div
                key={idx}
                className=" flex flex-col p-[18px] gap-5 bg-white dark:bg-[#333333] rounded-lg  items-center shadow-sm w-full min-w-[300px] hover:shadow-md"
              >
                <figure className="relative flex ">
                  <Image
                    src={img}
                    width={20}
                    height={20}
                    alt="farm"
                    className=" w-full rounded-[4px]"
                  />
                  <div
                    className={clsx(
                      tag === "Avaliable"
                        ? "border-[#1FCC4E]  text-[#1FCC4E] "
                        : "border-[#DA100B] text-[#DA100B]",
                      " px-[24px] py-2 rounded-[99px] absolute top-4 right-4 bg-white border   "
                    )}
                  >
                    <p className=" font-semibold text-[clamp(1rem,1.3vw,1.2rem)]">
                      {tag}
                    </p>
                  </div>
                </figure>
                <section className=" flex flex-col gap-3 px-2 ">
                  <h4 className="border-b border-b-[#D1D5DB] pb-4  text-[clamp(1rem,1.6vw,1.5rem)] font-bold  dark:text-white ">
                    {name}
                  </h4>
                  <section className=" flex pt-4">
                    <div className=" flex flex-col gap-1">
                      <article className=" flex flex-col text-[#1F2937] dark:text-white  text-base">
                        <p className=" font-normal text-base">Cost per unit </p>
                        <h4 className=" font-semibold "> {cost}</h4>
                      </article>
                      <article className=" flex flex-col text-[#1F2937] dark:text-white  text-base">
                        <p className=" font-semibold text-base">
                          Farming Begins{" "}
                        </p>
                        <h4 className="font-normal "> {begins} </h4>
                      </article>
                      <article className=" flex flex-col text-[#1F2937] dark:text-white  text-base">
                        <p className=" font-semibold text-base">
                          Farm Location{" "}
                        </p>
                        <h4 className="font-normal ">{location}</h4>
                      </article>
                    </div>
                    <div className=" flex flex-col gap-1">
                      <article className=" flex flex-col text-[#1F2937] dark:text-white  text-base">
                        <p className=" font-semibold text-base">ROS </p>
                        <h4 className="font-normal "> {ros}</h4>
                      </article>
                      <article className=" flex flex-col text-[#1F2937]  dark:text-white text-base">
                        <p className=" font-semibold text-base">Farming ends</p>
                        <h4 className="font-normal "> {ends}</h4>
                      </article>
                    </div>
                  </section>
                </section>

                <Button
                  onClick={() => push(`/farms/${id}`)}
                  classNames={classes}
                  styles={{
                    root: {
                      width: "100%",
                    },
                  }}
                >
                  Fund Farm
                </Button>
              </div>
            )
          )}
        </section>
      </div>
      <section className=" flex flex-col gap-[35px] ">
        <h4 className="font-semibold text-[clamp(1.5rem,2.7vw,2.5rem)] font-[DM Sans]">
          Available farms
        </h4>

        <section className=" grid grid-cols-4 gap-[45px]">
          {avaliableList?.map(
            ({ name, cost, begins, location, ros, img, ends, tag }, idx) => (
              <div
                key={idx}
                className=" flex flex-col p-[18px] gap-5 bg-white dark:bg-[#333333] rounded-lg w-[clamp(12.8rem,28.4vw,25.6rem))] items-center shadow-sm w-fit min-w-[300px] hover:shadow-md"
              >
                <figure className=" flex relative ">
                  <Image
                    src={img}
                    width={20}
                    height={20}
                    alt="farm"
                    className=" w-full rounded-[4px]"
                  />

                  <div
                    className={clsx(
                      tag === "Avaliable"
                        ? "border-[#1FCC4E]  text-[#1FCC4E] "
                        : "border-[#DA100B] text-[#DA100B]",
                      "px-[24px] py-2 rounded-[99px] absolute top-4 right-4 bg-white border   "
                    )}
                  >
                    <p className=" font-semibold text-[clamp(1rem,1.3vw,1.2rem)]">
                      {tag}
                    </p>
                  </div>
                </figure>
                <section className=" flex flex-col gap-3 px-2 ">
                  <h4 className="border-b border-b-[#D1D5DB] pb-4  text-[clamp(1rem,1.6vw,1.5rem)] font-bold dark:text-white ">
                    {name}
                  </h4>
                  <section className=" flex pt-4 text-[#1F2937] dark:text-white">
                    <div className=" flex flex-col gap-1">
                      <article className=" flex flex-col text-[#1F2937] dark:text-white text-base">
                        <p className=" font-normal text-base">Cost per unit </p>
                        <h4 className=" font-semibold "> {cost}</h4>
                      </article>
                      <article className=" flex flex-col text-[#1F2937] dark:text-white text-base">
                        <p className=" font-semibold text-base">
                          Farming Begins{" "}
                        </p>
                        <h4 className="font-normal "> {begins} </h4>
                      </article>
                      <article className=" flex flex-col text-[#1F2937] dark:text-white text-base">
                        <p className=" font-semibold text-base">
                          Farm Location{" "}
                        </p>
                        <h4 className="font-normal ">{location}</h4>
                      </article>
                    </div>
                    <div className=" flex flex-col gap-1">
                      <article className=" flex flex-col text-[#1F2937] dark:text-white text-base">
                        <p className=" font-semibold text-base">ROS </p>
                        <h4 className="font-normal "> {ros}</h4>
                      </article>
                      <article className=" flex flex-col text-[#1F2937] dark:text-white text-base">
                        <p className=" font-semibold text-base">Farming ends</p>
                        <h4 className="font-normal "> {ends}</h4>
                      </article>
                    </div>
                  </section>
                </section>

                {tag === "Avaliable" ? (
                  <Button
                    classNames={classes}
                    styles={{
                      root: {
                        width: "100%",
                      },
                    }}
                  >
                    Fund Farm
                  </Button>
                ) : (
                  <Button
                    disabled
                    styles={{
                      root: {
                        background: "#D1D5DB",
                        width: "100%",
                        height: "55px",
                        borderRadius: 8,
                      },
                      inner: {
                        fontSize: 18,
                        color: "#F3F4F6",
                        fontWeight: 700,
                      },
                    }}
                  >
                    Farm sold out
                  </Button>
                )}
              </div>
            )
          )}
        </section>

        {/* <AppPagination /> */}
      </section>
    </section>
  );
}

export default FarmCards;
