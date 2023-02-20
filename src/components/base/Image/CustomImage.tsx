import Image from "next/image";
import React from "react";
import { CSSProperties } from "styled-components";

export const CustomImage = (props: {
  url: string;
  alt: string;
  height: number;
  width: number;
  classStyles?: string;
  backgroundStyles?: CSSProperties;
}) => {
  const { url, alt, height, width, classStyles, backgroundStyles } = props;
  return (
    <Image
      src={url}
      alt={alt}
      height={height}
      width={width}
      className={classStyles}
      style={backgroundStyles}
    />
  );
};
