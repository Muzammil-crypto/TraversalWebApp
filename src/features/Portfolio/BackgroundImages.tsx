import Image from "next/image";
import React from "react";

export const BackgroundImages = () => {
  return (
    <>
      <Image
        alt="hero"
        src="/sidecir.svg"
        height={480}
        width={70}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
          right: 0,
          marginTop: "30%",
        }}
      />
      <Image
        alt="hero"
        src="/patch.svg"
        height={480}
        width={190}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
          // marginLeft: " 87%",
          right: 10,
          marginTop: "20%",
        }}
      />
      <Image
        alt="hero"
        src="/smrect.svg"
        height={182}
        width={90}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
          marginRight: " 95%",
          marginTop: "23%",
        }}
      />
      <Image
        alt="hero"
        src="/siderec.svg"
        height={182}
        width={500}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
          marginRight: " 95%",
          marginTop: "140%",
        }}
      />
    </>
  );
};
