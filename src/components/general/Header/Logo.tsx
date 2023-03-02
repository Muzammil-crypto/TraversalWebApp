import { CustomImage } from "@/components/base/Image/CustomImage";
import Link from "next/link";
import React from "react";

export const Logo = (props: {
  url?: string;
  height?: number;
  width?: number;
  logoStyles?: string;
}) => {
  const { url, height, width, logoStyles } = props;
  return (
    <Link href={`/`}>
      <div>
        <CustomImage
          url={url ? url : "/mv.svg"}
          alt="logo"
          width={width ? width : 100}
          height={height ? height : 100}
          classStyles={`${logoStyles}`}
        />
      </div>
    </Link>
  );
};
