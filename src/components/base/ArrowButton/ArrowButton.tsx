import React from "react";
import { Paragraph } from "../Typography/Typography";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Link from "next/link";
export const ArrowButton = () => {
  return (
    <Link href={""}>
      <div className="flex flex-row mt-6 items-center  ">
        <Paragraph className="text-primary">Know More</Paragraph>
        <TrendingFlatIcon fontSize="large" className="text-primary ml-2  " />
      </div>
    </Link>
  );
};
