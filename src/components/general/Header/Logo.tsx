import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <div className="w-96">
      <Image src="/mv.svg" alt="logo" width={100} height={100} />
    </div>
  );
};
