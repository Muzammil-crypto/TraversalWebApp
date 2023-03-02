import Image from "next/image";
import React from "react";
import { marginLeft } from "styled-system";
import useWindowSize from "../../Processes/ProcessCard";

export const BackgroundVectors = () => {
  const size = useWindowSize();
  return (
    <>
      <Image
        alt="hero"
        src="/topEllipse.svg"
        height={size.width && size.width <= 600 ? 200 : 308}
        width={size.width && size.width <= 600 ? 200 : 308}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
          left: "20%",
        }}
      />
      <Image
        alt="hero"
        src="/leftEllipse.svg"
        height={size.width && size.width <= 600 ? 240 : 480}
        width={size.width && size.width <= 600 ? 240 : 480}
        style={{
          position: "absolute",
          content: "",
          zIndex: -1,
          marginTop: "12%",
          maxHeight: 480,
          left: "-10%",
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
        height={size.width && size.width <= 600 ? 100 : 182}
        width={size.width && size.width <= 600 ? 100 : 189}
        style={{
          right: 0,
          position: "absolute",
          overflow: "hidden",
          // content: "",
          zIndex: -1,
          marginTop: "46%",
          // marginLeft: "89%",
        }}
      />
    </>
  );
};
