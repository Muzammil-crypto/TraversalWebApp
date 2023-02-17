import { H1, H4, H6 } from "@/components/base/Typography/Typography";
import Image from "next/image";
import React from "react";
import Button from "@mui/material/Button";
import { Header } from "@/components/general/Header/Header";
import { BackgroundVectors } from "./backgroundVectors/BackgroundVectors";
import { heroHeading, tagLine } from "@/consts/consts";

export const Hero = () => {
  return (
    <div className="h-screen w-screen ">
      <BackgroundVectors />

      <Header />
      <div className="w-screen h-3/4 mt-10">
        <div className="flex flex-row h-full">
          <div className="w-3/6  justify-center flex flex-col pl-32 ">
            <H1 className="text-left  ">{heroHeading}</H1>
            <H4 style={{ marginTop: 29 }} className="text-left ">
              {tagLine}
            </H4>
            <div>
              <Button className="bg-primary mt-7 " variant="contained">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="w-3/6 flex items-center justify-center ">
            <Image alt="hero" src="/hero.svg" height={575} width={558} />
          </div>
        </div>
      </div>
    </div>
  );
};
