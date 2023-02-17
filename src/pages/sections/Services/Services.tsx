import { H2 } from "@/components/base/Typography/Typography";
import Image from "next/image";
import React from "react";
import Button from "@mui/material/Button";
import { services } from "@/consts/consts";
import { SlideCard } from "@/components/general/Slider/SlideCard";

export const Services = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      <div className="w-screen h-3/4 mt-10 flex items-center justify-center flex-col">
        <H2 className="text-center">{services}</H2>
        <SlideCard />
      </div>
    </div>
  );
};
