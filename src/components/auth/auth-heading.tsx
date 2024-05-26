import React from "react";

function AuthHeading({ text }: { text: string }) {
  return (
    <h3 className=" text-secondary-400 dark:text-[#FCFCFD] text-[clamp(2rem,4.4vw,4rem)] font-bold text-center">
      {text}
    </h3>
  );
}

export default AuthHeading;
