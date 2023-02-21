import Image from "next/image";
import React from "react";

export const Logo = (props: {
  url?: string;
  height?: number;
  width?: number;
}) => {
  const { url, height, width } = props;
  return (
    <div>
      <Image
        src={url ? url : "/mv.svg"}
        alt="logo"
        width={width ? width : 100}
        height={height ? height : 100}
      />
    </div>
  );
};
