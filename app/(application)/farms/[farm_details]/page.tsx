import { BackButton } from "@/shared/back-button";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import React from "react";

function FarmDetails({ params }: { params: { farm_details: string } }) {
  return (
    <main className=" px-[60px] py-[30px]">
      <section className=" flex flex-col gap-[64px]">
        <div className=" flex flex-col gap-[30px]">
          <BackButton text="Back to Farms" />
          <section className="grid grid-cols-[1fr,593px]]">
            <div className=" flex flex-col gap-[30px]">
              <Carousel
                withIndicators
                height={200}
                dragFree
                slideGap="md"
                align="start"
              >
                <Carousel.Slide>1</Carousel.Slide>
                <Carousel.Slide>2</Carousel.Slide>
                <Carousel.Slide>3</Carousel.Slide>
                {/* ...other slides */}
              </Carousel>

              <div className="flex gap-[23px]">
                <figure>
                  <Image
                    src="/farm2-img.svg "
                    width={20}
                    height={20}
                    alt="farms-avaliable"
                  />
                </figure>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default FarmDetails;
