import Image from "next/image";
import React from "react";

export const BackgroundImage = () => {
  return (
    <>
      <Image
        alt="vector"
        src="/srect.svg"
        height={626}
        width={1343}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
          marginTop: "28%",
        }}
      />
    </>
  );
};
