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
          marginTop: 196,
          maxHeight: 480,
          maxWidth: 480,
          left: -220,
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
          marginTop: 175,
          marginLeft: 179,
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
          marginTop: 248,
          marginLeft: 310,
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
          marginTop: 270,
          marginLeft: 434,
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
          marginTop: 623,
          marginLeft: 453,
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
          marginTop: 567,
          marginLeft: 554,
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
          marginTop: 520,
          marginLeft: 700,
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
          marginTop: 700,
          marginLeft: 1289,
        }}
      />
    </>
  );
};
