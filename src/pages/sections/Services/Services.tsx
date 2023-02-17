import { H1, H4, H6 } from "@/components/base/Typography/Typography";
import Image from "next/image";
import React from "react";
import Button from "@mui/material/Button";
import { services } from "@/consts/consts";

export const Services = () => {
  return (
    <div className="h-screen w-screen ">
      <div className="w-screen h-3/4 mt-10">
        <H1 className="text-center">{services}</H1>
      </div>
    </div>
  );
};
