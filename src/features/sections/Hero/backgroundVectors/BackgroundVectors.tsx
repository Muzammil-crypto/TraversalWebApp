import Image from "next/image";
import React from "react";
import { marginLeft } from "styled-system";

export const BackgroundVectors = () => {
  return (
    <>
      <Image
        alt="hero"
        src="/topEllipse.svg"
        height={308}
        width={308}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
          marginLeft: " 30%",
        }}
      />
      <Image
        alt="hero"
        src="/leftEllipse.svg"
        height={480}
        width={480}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
          marginTop: "12%",
          maxHeight: 480,
          maxWidth: 480,
          left: "-13%",
        }}
      />
      <Image
        alt="hero"
        src="/rect.svg"
        height={56}
        width={56}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
          marginTop: "10%",
          marginLeft: "11%",
          maxHeight: 56,
          maxWidth: 56,
        }}
      />
      <Image
        alt="hero"
        src="/smallellipse.svg"
        height={47}
        width={47}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
          marginTop: "15%",
          marginLeft: "18%",
          maxHeight: 56,
          maxWidth: 56,
        }}
      />
      <Image
        alt="hero"
        src="/plus.svg"
        height={105}
        width={50}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
          marginTop: "16%",
          marginLeft: "27.7%",
          maxHeight: 56,
          maxWidth: 56,
        }}
      />
      <Image
        alt="hero"
        src="/plus.svg"
        height={105}
        width={50}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
          marginTop: "38%",
          marginLeft: "27.7%",
          maxHeight: 56,
          maxWidth: 56,
        }}
      />
      <Image
        alt="hero"
        src="/rect.svg"
        height={56}
        width={56}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
          marginTop: "34%",
          marginLeft: "34%",
          maxHeight: 56,
          maxWidth: 56,
        }}
      />
      <Image
        alt="hero"
        src="/smallellipse.svg"
        height={47}
        width={47}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
          marginTop: "31%",
          marginLeft: "42%",
          maxHeight: 56,
          maxWidth: 56,
        }}
      />
      <Image
        alt="hero"
        src="/imgBottom.svg"
        height={182}
        width={189}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
          marginTop: "46%",
          marginLeft: "89%",
        }}
      />
    </>
  );
};
