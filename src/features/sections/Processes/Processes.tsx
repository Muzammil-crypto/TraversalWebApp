import { CustomImage } from "@/components/base/Image/CustomImage";
import { Spacer } from "@/components/base/Spacer/Spacer";
import { H2, Paragraph } from "@/components/base/Typography/Typography";
import { procs } from "@/consts/consts";
import React from "react";
import { ProcessCard } from "./ProcessCard";
import styles from "./styles.module.css";

export const Processes = () => {
  return (
    <div className={styles.mainBox}>
      <H2>Our Processes</H2>
      <Spacer spacerStyles={styles.img} />
      <Paragraph>We follow agile methodology in our system.</Paragraph>
      <div className={styles.mapContainer}>
        {procs.map((item, val) => {
          return <ProcessCard key={val} data={item} />;
        })}
      </div>
    </div>
  );
};
