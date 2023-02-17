import React from "react";
import { Logo } from "./Logo";
import { MenuItems } from "./MenuItems";

export const Header = () => {
  return (
    <div className="w-screen h-32  display flex items-center px-8 flex-row justify-between pt-12">
      <Logo />
      <MenuItems />
    </div>
  );
};
