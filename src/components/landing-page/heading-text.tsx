import React from "react";

export default function HeadingText({ text }: { text: string }) {
  return (
    <h3 className=" text-black dark:text-white font-bold text-[clamp(1.5rem,3.7vw,3.7rem)]">
      {text}
    </h3>
  );
}
