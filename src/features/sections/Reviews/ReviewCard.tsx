import { CustomImage } from "@/components/base/Image/CustomImage";
import { Paragraph } from "@/components/base/Typography/Typography";
import React from "react";
import { ClientLogo } from "./ClientLogo";

export const ReviewCard = (props: { data: {} }) => {
  const { data } = props;
  const { name, image, review } = data;
  return (
    <div className="flex justify-center items-center h-2/3 flex-col">
      <div className="flex flex-col justify-center items-center h-24 w-24 rounded-full bg-primary m-10">
        <CustomImage url="/col.svg" height={30} width={20} alt="col" />
      </div>
      <Paragraph className="h-12 w-144 text-white text-center">
        {review}
      </Paragraph>

      <ClientLogo url={image} />
      <Paragraph className="pt-5 text-white">{name}</Paragraph>
    </div>
  );
};
