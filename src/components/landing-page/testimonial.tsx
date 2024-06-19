"use client";

import { Button, TextInput } from "@mantine/core";
import classes from "@/app/button.module.css";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Img from "@/src/assets/img.svg";

const styles = {
  root: {
    width: "100%",
  },
  input: {
    height: "50px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    // width: "100%",
    // paddingLeft: "14px",
  },
};

function Testimonial() {
  // const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <>
      {/* py-[clamp(3rem,6.9vw,6rem)] */}
      <div className="py-[clamp(3rem,6.9vw,6rem)]  px-3 flex flex-col gap-[clamp(2rem,5vw,4.6rem)]  bg-primary-200  items-center  ">
        <h3 className="font-bold text-[clamp(2rem,4vw,3.7rem)] text-[#000] dark:text-white">
          Testimonials
        </h3>

        <div className=" flex gap-[clamp(1rem,1.2rem,2rem)] overflow-x-scroll app-scroll  w-full justify-center">
          <section className=" flex flex-col gap-[37px] items-center min-w-[175px] max-[593px]:w-full ">
            <div className=" py-[clamp(1.8rem,2vw,2rem)] px-[clamp(1.4rem,1.8vw,1.7rem)] bg-black rounded-full  flex ">
              <figure className=" w-[clamp(2.4rem,4vw,3.6rem)] h-[clamp(1.7rem,3.2vw,2.8rem)]">
                <Image
                  src={Img}
                  width={20}
                  height={20}
                  alt="image"
                  className="w-full"
                />
              </figure>
            </div>
            <figure className="h-[24px] w-[36px]">
              <Image
                src="/quote.svg"
                width={20}
                height={20}
                alt="image"
                className="w-full"
              />
            </figure>
            <p className=" text-[#1F2937] text-base font-normal max-w-[334px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              est felis, sagittis viverra.
            </p>
          </section>

          <section className=" flex flex-col gap-[37px] items-center min-w-[175px] max-[593px]:w-full ">
            <div className=" py-[clamp(1.8rem,2vw,2rem)] px-[clamp(1.4rem,1.8vw,1.7rem)] bg-black rounded-full items-center flex justify-center">
              <figure className=" w-[clamp(2.4rem,4vw,3.6rem)]  h-[clamp(1.7rem,3.2vw,2.8rem)]">
                <Image src={Img} alt="image" className="w-full" />
              </figure>
            </div>
            <figure className="h-[24px] w-[36px]">
              <Image
                src="/quote.svg"
                width={20}
                height={20}
                alt="image"
                className="w-full"
              />
            </figure>
            <p className=" text-[#1F2937] text-base font-normal max-w-[334px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              est felis, sagittis viverra.
            </p>
          </section>

          <section className=" flex flex-col gap-[37px] items-center min-w-[175px]  max-[593px]:w-full ">
            <div className=" py-[clamp(1.8rem,2vw,2rem)] px-[clamp(1.4rem,1.8vw,1.7rem)] bg-black rounded-full items-center flex justify-center">
              <figure className=" w-[clamp(2.4rem,4vw,3.6rem)]  h-[clamp(1.7rem,3.2vw,2.8rem)]">
                <Image src={Img} alt="image" className="w-full" />
              </figure>
            </div>
            <figure className="h-[24px] w-[36px]">
              <Image
                src="/quote.svg"
                width={20}
                height={20}
                alt="image"
                className="w-full"
              />
            </figure>
            <p className=" text-[#1F2937] text-base font-normal max-w-[334px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              est felis, sagittis viverra.
            </p>
          </section>
        </div>

        {/* <Carousel
          withIndicators
          height={200}
          display="flex"
          slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
          slideGap={{ base: 0, sm: "md" }}
          loop
          align="start"
          plugins={[autoplay]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          <Carousel.Slide>
            <section className=" flex flex-col gap-[37px] items-center min-w-[175px]  max-[593px]:w-full ">
              <div className=" py-[clamp(1.8rem,2vw,2rem)] px-[clamp(1.4rem,1.8vw,1.7rem)] bg-black rounded-full items-center flex justify-center">
                <figure className=" w-[clamp(2.4rem,4vw,3.6rem)]  h-[clamp(1.7rem,3.2vw,2.8rem)]">
                  <Image
                    src="/img.svg"
                    width={20}
                    height={20}
                    alt="image"
                    className="w-full"
                  />
                </figure>
              </div>
              <figure className="h-[24px] w-[36px]">
                <Image
                  src="/quote.svg"
                  width={20}
                  height={20}
                  alt="image"
                  className="w-full"
                />
              </figure>
              <p className=" text-[#1F2937] text-base font-normal max-w-[334px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
                est felis, sagittis viverra.
              </p>
            </section>
          </Carousel.Slide>
          <Carousel.Slide>
            <section className=" flex flex-col gap-[37px] items-center min-w-[175px]  max-[593px]:w-full ">
              <div className=" py-[clamp(1.8rem,2vw,2rem)] px-[clamp(1.4rem,1.8vw,1.7rem)] bg-black rounded-full items-center flex justify-center">
                <figure className=" w-[clamp(2.4rem,4vw,3.6rem)]  h-[clamp(1.7rem,3.2vw,2.8rem)]">
                  <Image
                    src="/img.svg"
                    width={20}
                    height={20}
                    alt="image"
                    className="w-full"
                  />
                </figure>
              </div>
              <figure className="h-[24px] w-[36px]">
                <Image
                  src="/quote.svg"
                  width={20}
                  height={20}
                  alt="image"
                  className="w-full"
                />
              </figure>
              <p className=" text-[#1F2937] text-base font-normal max-w-[334px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
                est felis, sagittis viverra.
              </p>
            </section>
          </Carousel.Slide>
          <Carousel.Slide>
            <section className=" flex flex-col gap-[37px] items-center min-w-[175px]  max-[593px]:w-full ">
              <div className=" py-[clamp(1.8rem,2vw,2rem)] px-[clamp(1.4rem,1.8vw,1.7rem)] bg-black rounded-full items-center flex justify-center">
                <figure className=" w-[clamp(2.4rem,4vw,3.6rem)]  h-[clamp(1.7rem,3.2vw,2.8rem)]">
                  <Image
                    src="/img.svg"
                    width={20}
                    height={20}
                    alt="image"
                    className="w-full"
                  />
                </figure>
              </div>
              <figure className="h-[24px] w-[36px]">
                <Image
                  src="/quote.svg"
                  width={20}
                  height={20}
                  alt="image"
                  className="w-full"
                />
              </figure>
              <p className=" text-[#1F2937] text-base font-normal max-w-[334px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
                est felis, sagittis viverra.
              </p>
            </section>
          </Carousel.Slide>
         
        </Carousel>
         */}
      </div>
      {/* 
      <section className=" py-[clamp(2rem,5vw,4rem)] px-3 flex items-center justify-center bg-[#ee9633]">
        <div className=" p-[clamp(0.8rem,4.4vw,4rem)] bg-white flex items-center  rounded-lg gap-5 max-[600px]:flex-col   max-[600px]:w-full">
          <>
            <p className=" text-[#0A142F] text-[clamp(1rem,2.1vw,2rem)] whitespace-nowrap">
              Subscribe Newsletters
            </p>
            <div className=" flex border border-[#ddd]  px-[clamp(6px,0.8vw,12px)] w-full rounded-md items-center  ">
              <TextInput styles={styles} placeholder="Enter your email" />
              <div className=" max-[600px]:hidden">
                <Button
                  classNames={classes}
                  styles={{
                    root: {
                      paddingInline: 10,
                      width: "fit-content",
                      height: 45,
                    },
                    inner: {
                      width: "fit-content",
                      fontSize: "16px",
                    },
                  }}
                >
                  Subscribe Now
                </Button>
              </div>
            </div>
          </>
          <div className=" hidden max-[600px]:flex">
            <Button
              classNames={classes}
              styles={{
                root: {
                  width: "fit-content",

                  //   paddingRight: "50px",
                  //   paddingLeft: "20px",
                },
                inner: {
                  width: "fit-content",
                  fontSize: "16px",
                },
              }}
            >
              Subscribe Now
            </Button>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Testimonial;
