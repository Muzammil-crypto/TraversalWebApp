import Image from "next/image";
import React from "react";

export const BackgroundImages = () => {
  return (
    <>
      <Image
        alt="hero"
        src="/rectangle.svg"
        height={166}
        width={166}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
          marginBottom: "5%",
          marginRight: "80%",
        }}
      />
      <Image
        alt="hero"
        src="/triangle.svg"
        height={78}
        width={78}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
          marginTop: "5.5%",
          marginRight: "80%",
        }}
      />
      <Image
        alt="hero"
        src="/triangle.svg"
        height={78}
        width={78}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
          marginBottom: "5%",
          marginLeft: "80%",
        }}
      />
      <Image
        alt="hero"
        src="/rectangle.svg"
        height={166}
        width={166}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
          marginTop: "5.5%",
          marginLeft: "80%",
        }}
      />
    </>
  );
};
