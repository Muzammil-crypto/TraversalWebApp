import Image from "next/image";
import React from "react";

export const BackgroundVectors = () => {
  return (
    <>
      <Image
        alt="vector"
        src="/procsbg.svg"
        height={1721.55}
        width={2321.11}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
          marginTop: "55%",
        }}
      />
    </>
  );
};
