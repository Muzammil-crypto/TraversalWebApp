import useWindowSize from "@/features/Sections/Processes/ProcessCard";
import Image from "next/image";
import React from "react";
import { marginLeft } from "styled-system";

export const BackgroundEffects = () => {
  const size = useWindowSize();

  return (
    <>
      <Image
        alt="hero"
        src="/bgServices.svg"
        height={1463}
        width={size.width && size.width >= 1500 ? 2000 : 1440}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
        }}
      />
    </>
  );
};
