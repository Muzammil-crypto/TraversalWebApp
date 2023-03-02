import React from "react";
import { Logo } from "./Logo";
import { MenuItems } from "./MenuItems";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Logo />
      <MenuItems />
    </div>
  );
};
