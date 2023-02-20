import { CustomImage } from "@/components/base/Image/CustomImage";
import { H5, H6 } from "@/components/base/Typography/Typography";
import { id } from "date-fns/locale";
import React from "react";
import styles from "./styles.module.css";

export const ProcessCard = (props: { data: {} }) => {
  const { data } = props;
  const { title, logo, arrow } = data;
  return (
    <div className={styles.parentBox}>
      <div className={styles.processes}>
        <div className="flex flex-row ">
          <CustomImage url={logo} alt="Group 1" height={190} width={190} />
          {arrow ? (
            <CustomImage url={arrow} alt="Group 1" height={190} width={190} />
          ) : null}
        </div>
      </div>
      <div className={styles.headingContainer}>
        <H5 className="text-center">{title}</H5>
      </div>
    </div>
  );
};
