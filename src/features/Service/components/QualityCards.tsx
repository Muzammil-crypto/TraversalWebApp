import { Paragraph } from "@/components/base/Typography/Typography";
import React from "react";
import styles from "./../styles.module.css";

export const QualityCards = () => {
  return (
    <div className={styles.qualityCard}>
      <div className={styles.qualitychildCard}>
        <h5 className={styles.heading}>Full Software Ownership</h5>
        <Paragraph className={styles.cardPara}>
          Regardless of your project scope, Megaverse guarantees that your
          organization will retain 100% ownership of the final work.
        </Paragraph>
      </div>
    </div>
  );
};
