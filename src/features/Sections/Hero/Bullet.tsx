import { CustomImage } from "@/components/base/Image/CustomImage";
import { H6 } from "@/components/base/Typography/Typography";
import React from "react";
import styles from "./styles.module.css";

export const Bullet = (props: { bulletPoint?: string }) => {
  const { bulletPoint } = props;
  return (
    <div className={styles.bullet}>
      <CustomImage url="/bullet.svg" alt="bullet" height={20} width={20} />
      <H6 className={styles.bulletHeading}>{bulletPoint}</H6>
    </div>
  );
};
