import Image from "next/image";
import React from "react";

export const SlideCard = () => {
  return (
    <div className=" h-3/4 w-1/4 bg-secondary rounded-2xl shadow-3xl justify-center items-center flex flex-col ">
      <div>
        <Image
          src="/mobile.svg"
          alt="Picture of the author"
          width={167}
          height={167}
        />
      </div>
    </div>
  );
};
