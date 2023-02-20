import { CustomImage } from "@/components/base/Image/CustomImage";
import { H1, H6, Paragraph } from "@/components/base/Typography/Typography";
import React from "react";
import { BackgroundImage } from "./Background";
import styles from "./styles.module.css";
export const Reviews = () => {
  return (
    <div className={styles.mainBox}>
      <BackgroundImage />
      <div className={styles.feedBack}>
        <CustomImage
          url="/linew.svg"
          alt="line"
          height={20}
          width={49}
          classStyles={styles.line}
        />
        <H6 className={styles.feedbackText}>Feedback</H6>
        <CustomImage
          url="/linew.svg"
          alt="line"
          height={20}
          width={49}
          classStyles={styles.line}
        />
      </div>
      <H1 className={styles.head}>Client Reviews</H1>
      <Paragraph className=" h-12 w-144 text-white">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. It is a long
        established fact that a reader.
      </Paragraph>
      <div className="flex flex-col justify-center items-center h-24 w-24 rounded-full bg-primary m-10">
        <CustomImage url="/col.svg" height={30} width={20} alt="col" />
      </div>
      <Paragraph className="h-12 w-144 text-white text-center">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. It is a long
        established fact that a reader. It is a long established fact that a
        reader will be distracted by the readable content of a page when looking
        at its layout. It is a long established fact that a reader.
      </Paragraph>
      <div className="flex flex-col bg-primary rounded-full mt-28">
        <CustomImage url="/rect.svg" height={100} width={100} alt={"hee"} />
      </div>
      <Paragraph className="pt-5 text-white">Name of the client</Paragraph>
    </div>
  );
};
