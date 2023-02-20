import Image from "next/image";
import React from "react";

export const CustomImage = (props: {
  url: string;
  alt: string;
  height: number;
  width: number;
  classStyles?: string;
}) => {
  const { url, alt, height, width, classStyles } = props;
  return (
    <Image
      src={url}
      alt={alt}
      height={height}
      width={width}
      className={classStyles}
    />
  );
};
