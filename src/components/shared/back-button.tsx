import { Button } from "@mantine/core";
import { ArrowLeft, ArrowLeft2 } from "iconsax-react";
import { useRouter } from "next/navigation";

import brown from "@/app/brown-button.module.css";
import React from "react";

export const BackButton = ({ bg, text }: { bg?: string; text: string }) => {
  const { back } = useRouter();

  return (
    <Button
      styles={{
        root: {
          width: "fit-content",
        },
      }}
      onClick={() => back()}
      classNames={brown}
      leftSection={<ArrowLeft2 size="20" color="#fff" className=" font-bold" />}
      bg={bg}
    >
      {text}
    </Button>
  );
};
