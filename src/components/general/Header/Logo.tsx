import { CustomImage } from "@/components/base/Image/CustomImage";
import React from "react";

export const Logo = (props: {
  url?: string;
  height?: number;
  width?: number;
  logoStyles?: string;
}) => {
  const { url, height, width, logoStyles } = props;
  return (
    <div>
      <CustomImage
        url={url ? url : "/mv.svg"}
        alt="logo"
        width={width ? width : 100}
        height={height ? height : 100}
        classStyles={`${logoStyles}`}
      />
    </div>
  );
};
