import { CustomButton } from "@/components/base/Button/Button";
import { H4, Paragraph } from "@/components/base/Typography/Typography";
import React from "react";
import { CategoryButtons } from "./CategoryButtons";
import styles from "./../styles.module.css";
export const JobCards = (props: {
  title?: string;
  description?: string;
  cardStyles?: string;
}) => {
  const { title, description, cardStyles } = props;
  return (
    <div className={`${styles.jobCard} ${cardStyles}`}>
      <div className={styles.categoryButton}>
        <CategoryButtons category={"Sales"} buttonStyles="ml-0 my-[8px]" />
        <H4>{title ? title : "Business Marketing Sales"}</H4>
        <Paragraph>
          {description
            ? description
            : " Megaverse developed a fleet tracking platform to maximize efficiency by providing real-time logistics activity and communications to service providers responsible for managing large fleets."}
        </Paragraph>
        <CustomButton child="Apply" classStyles={styles.applyButton} />
      </div>
    </div>
  );
};
