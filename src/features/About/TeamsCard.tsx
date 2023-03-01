import { CustomImage } from "@/components/base/Image/CustomImage";
import { H5, H6, Paragraph } from "@/components/base/Typography/Typography";
import React from "react";
import styles from "./styles.module.css";
export const TeamsCard = (props: {
  name?: string;
  designation?: string;
  img?: string;
}) => {
  const { name, designation, img } = props;
  return (
    <div className={styles.teamCard}>
      <div className={styles.logoContainer}>
        <CustomImage
          url={img ? img : "/img2.svg"}
          alt="teams"
          height={350}
          width={320}
        />
      </div>
      <div className={styles.designationBox}>
        <H5>{name}</H5>
        <Paragraph>{designation}</Paragraph>
      </div>
    </div>
  );
};
