import { Button } from "@mui/material";
import React from "react";

export const MenuItems = () => {
  return (
    <div className=" flex-row flex h-32 items-center w-2/4 ">
      <text className="cursor-pointer font-roboto mx-5 text-black">Home</text>
      <text className="cursor-pointer font-roboto mx-5">About</text>
      <text className="cursor-pointer font-roboto mx-5">Services</text>
      <text className="cursor-pointer font-roboto mx-5">Careers</text>
      <text className="cursor-pointer font-roboto mx-5">Contact</text>
      <Button
        className="cursor-pointer mx-2 rounded-lg border-black  "
        variant="outlined"
      >
        <text className="font-sm text-fontColor">Any queries</text>
      </Button>
    </div>
  );
};
