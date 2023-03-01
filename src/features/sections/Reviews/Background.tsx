import Image from "next/image";
import React from "react";

export const BackgroundImage = () => {
  return (
    <>
      <Image
        alt="vector"
        src="/proty.svg"
        height={2220.55}
        width={3000.11}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
          marginTop: "33%",
        }}
      />
    </>
  );
};
