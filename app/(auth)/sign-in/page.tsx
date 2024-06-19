import React from "react";

import { ThemeControl } from "@/shared/theme-control";
import SignInForm from "@/auth/signin-form";

function SignIn() {
  return (
    <main className=" flex flex-col flex-1 bg-white dark:bg-primary-800 h-[100dvh]">
      <div className=" flex items-end justify-end pr-7 pt-[7px] max-[731px]:hidden">
        <ThemeControl />
      </div>
      <SignInForm />
    </main>
  );
}

export default SignIn;
