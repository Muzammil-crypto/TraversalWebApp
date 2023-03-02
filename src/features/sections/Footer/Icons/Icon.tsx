import { CustomImage } from "@/components/base/Image/CustomImage";
import Link from "next/link";
import React from "react";

export const Icon = (props: {
  iconStyle?: string;
  name: string;
  height?: number;
  width?: number;
  tagLine?: boolean;
  sideText?: string;
  email?: boolean;
}) => {
  const { iconStyle, name, height, width, tagLine, sideText, email } = props;
  return (
    <div className="flex flex-row items-center  ">
      <CustomImage
        url={name}
        alt="icon"
        height={height ? height : 24}
        width={width ? width : 24}
        classStyles={iconStyle}
      />
      {tagLine && email ? (
        <Link href={`mailto:someone@yoursite.com`}>
          <p className="text-white text-sm ml-2 cursor-pointer">{sideText}</p>
        </Link>
      ) : (
        <p className="text-white text-sm ml-2">{sideText}</p>
      )}
    </div>
  );
};
