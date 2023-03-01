import { ArrowButton } from "@/components/base/ArrowButton/ArrowButton";
import { H4, Paragraph } from "@/components/base/Typography/Typography";
import { id } from "date-fns/locale";
import Image from "next/image";
import React from "react";

export const SlideCard = (props: {
  title: string;
  description: string;
  image: string;
  cardStyles?: string;
}) => {
  const { title, description, image, cardStyles } = props;
  return (
    <div
      style={{ width: 340, height: 414 }}
      className={`  h-2/3 w-1/4 bg-secondary rounded-2xl shadow-3xl justify-center items-center flex flex-col mt-14 ${cardStyles}`}
    >
      <div>
        <Image
          src={image}
          alt="Picture of the author"
          width={167}
          height={167}
          className=" mb-8 -mt-2"
        />
      </div>
      <div>
        <H4 className="text-center ">{title}</H4>
        <Paragraph className="text-left  px-5 ">{description}</Paragraph>
      </div>
      <ArrowButton />
    </div>
  );
};
