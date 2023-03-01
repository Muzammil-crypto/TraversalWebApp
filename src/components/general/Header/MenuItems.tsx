import { CustomButton } from "@/components/base/Button/Button";
import { Span } from "@/components/base/Typography/Typography";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
export const MenuItems = () => {
  return (
    <div className={styles.menuItems}>
      <Link href={"/"}>
        <Span className={styles.items}>Home</Span>
      </Link>
      <Link href={"/about"}>
        <Span className={styles.items}>About</Span>
      </Link>
      <Link href={"/services"}>
        <Span className={styles.items}>Services</Span>
      </Link>
      <Link href={"/careers"}>
        <Span className={styles.items}>Careers</Span>
      </Link>
      <Link href={"/portfolio"}>
        <Span className={styles.items}>Portfolio</Span>
      </Link>
      <Link href={"/contact"}>
        <Span className={styles.items}>Contact</Span>
      </Link>
      <Link href={"/contact"}>
        <CustomButton
          classStyles={styles.buttonStyles}
          varient="outlined"
          child="Any queries"
        />
      </Link>
    </div>
  );
};
