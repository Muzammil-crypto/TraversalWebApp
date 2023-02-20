import Image from "next/image";
import React from "react";

export const BackgroundVectors = () => {
  return (
    <>
      <Image
        alt="vector"
        src="/procsbg.svg"
        height={2021.55}
        width={2921.11}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
          marginTop: "38%",
        }}
      />
    </>
  );
};
