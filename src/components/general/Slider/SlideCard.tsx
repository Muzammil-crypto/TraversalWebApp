import { ArrowButton } from "@/components/base/ArrowButton/ArrowButton";
import { H4, Paragraph } from "@/components/base/Typography/Typography";
import Image from "next/image";
import React from "react";

export const SlideCard = () => {
  return (
    <div className="  h-2/3 w-1/4 bg-secondary rounded-2xl shadow-3xl justify-center items-center flex flex-col mt-14">
      <div>
        <Image
          src="/mobile.svg"
          alt="Picture of the author"
          width={167}
          height={167}
          className=" mb-8 -mt-2"
        />
      </div>
      <div>
        <H4 className="text-center ">Web Development</H4>
        <Paragraph className="text-left  px-5 ">
          Start working with an company that provide everything you need to any
          create awareness drive.
        </Paragraph>
      </div>
      <ArrowButton />
    </div>
  );
};
