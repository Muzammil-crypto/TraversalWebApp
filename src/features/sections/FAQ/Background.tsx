import Image from "next/image";
import React from "react";

export const BackgroundImage = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          position: "absolute",
          height: "100%",
          marginBottom: "20%",
          paddingLeft: "3%",
        }}
      >
        <Image
          alt="vector"
          src="/srect.svg"
          height={626}
          width={1343}
          style={{
            position: "relative",
            content: "",
            zIndex: -1,
            // marginTop: "28%",
            top: "50%",
          }}
        />
      </div>
      <Image
        alt="vector"
        src="/u.svg"
        height={650}
        width={514}
        style={{
          right: "10%",
          position: "absolute",
          content: "",
          zIndex: -1,
          marginTop: "23%",
          // marginLeft: "20%",
        }}
      />
    </>
  );
};
