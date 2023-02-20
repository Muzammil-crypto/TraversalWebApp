import { CustomImage } from "@/components/base/Image/CustomImage";
import React from "react";
import styles from "./styles.module.css";

export const Accomplishments = () => {
  return (
    <div className={styles.mainContainer}>
      {/* <BackgroundImage/> */}
      <CustomImage
        height={774}
        width={1077}
        url={"/acc.svg"}
        alt={"Acmplshmnt"}
        classStyles={styles.introImg}
      />
    </div>
  );
};
