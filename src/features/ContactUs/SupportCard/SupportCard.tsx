import { CustomImage } from "@/components/base/Image/CustomImage";
import { Paragraph } from "@/components/base/Typography/Typography";
import React from "react";
import styles from "./../styles.module.css";

export const SupportCard = (props: { lineText?: string; image?: string }) => {
  const { lineText, image } = props;
  return (
    <div className={styles.comSupportCard}>
      <div className={styles.comImageBox}>
        <CustomImage
          url={image ? image : "/location.sv"}
          alt="support"
          height={117}
          width={96}
          classStyles="mb-[24px]"
        />
        <Paragraph>{lineText && lineText}</Paragraph>
      </div>
    </div>
  );
};
