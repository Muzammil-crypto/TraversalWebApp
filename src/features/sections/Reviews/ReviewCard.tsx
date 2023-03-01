import { CustomImage } from "@/components/base/Image/CustomImage";
import { Paragraph } from "@/components/base/Typography/Typography";
import React from "react";
import { ClientLogo } from "./ClientLogo";
import styles from "./styles.module.css";

export const ReviewCard = (props: { data: any }) => {
  const { data } = props;
  const { name, image, review } = data;
  return (
    <div className={styles.reviewCard}>
      <div className={styles.colBox}>
        <CustomImage url="/col.svg" height={30} width={20} alt="col" />
      </div>
      <Paragraph className={styles.reviewPara}>{review}</Paragraph>

      <ClientLogo url={image} />
      <Paragraph className={styles.clientName}>{name}</Paragraph>
    </div>
  );
};
