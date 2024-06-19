import { ThemeControl } from "@/shared/theme-control";
import AuthHeading from "@/auth/auth-heading";
import BiodataForm from "@/auth/biodata-form";
import BioNextForm from "@/auth/bio-next-form";

function BiodataNext() {
  return (
    <div className=" flex flex-col flex-1 bg-white dark:bg-primary-800 ">
      <div className=" flex items-end justify-end pr-7 pt-[7px] max-[731px]:hidden">
        <ThemeControl />
      </div>

      <section className=" px-[46px] flex items-center justify-center flex-col gap-[65px] flex-1 max-w-[1400px] h-[100dvh]">
        <div className=" flex flex-col gap-[50px]">
          <AuthHeading text="Personal information" />
          <p className=" text-[clamp(1rem,1.6vw,1.5rem)] font-medium text-[#6B7280] max-w-[488px] text-center dark:text-[#FCFCFD]">
            Ensure you enter correct details. there will be no changes after you
            submit.
          </p>
        </div>
        <BioNextForm />
      </section>
    </div>
  );
}

export default BiodataNext;
