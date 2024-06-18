"use client";

import { Accordion } from "@mantine/core";
import React from "react";
import classes from "@/app/accordion.module.css";

const groceries = [
  {
    value: "How does Crowdfunding Work on your platform ?",
    description:
      "Crowdfunding is a way of raising money to finance projects and businesses",
  },
  {
    value: "What type of projects can i invest in?",
    description:
      "One potential investment opportunity is in firms that plant, grow, and harvest crops. Many of these firms also engage in such supporting activities as .",
  },
  {
    value: "How do i know my investment is secure?",
    description:
      "Crowdfunding is a way of raising money to finance projects and businesses",
  },
  {
    value: "What is the minimum investment amount?",
    description:
      "Crowdfunding is a way of raising money to finance projects and businesses",
  },
  {
    value: "Who do i contact for more information?",
    description:
      "Crowdfunding is a way of raising money to finance projects and businesses",
  },
  {
    value: "Can international investors participate?",
    description:
      "Crowdfunding is a way of raising money to finance projects and businesses",
  },
];

export default function Faq() {
  return (
    <section className=" py-[clamp(50px,6.9vw,100px)] px-[clamp(1.9rem,4.1vw,3.7rem)] bg-[#F3FEDF] dark:bg-[#132b14] ">
      <div className=" flex flex-col gap-[clamp(2.4rem,5.8vw,5.2rem)]">
        <article className=" flex flex-col">
          <h4 className=" text-[#1F2937] dark:text-[#fff] font-bold text-[clamp(1.9rem,4.1vw,3.7rem)]">
            Have a question?
          </h4>
          <h5 className=" text-[#20cc4f] text-[clamp(1.9rem,4.1vw,3.7rem)] font-bold">
            FAQ
          </h5>
        </article>

        <Accordion classNames={classes} defaultValue="Apples">
          {groceries?.map((item) => (
            <Accordion.Item key={item.value} value={item.value}>
              <Accordion.Control>{item.value}</Accordion.Control>
              <Accordion.Panel>{item.description}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
