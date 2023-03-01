import { CustomButton } from "@/components/base/Button/Button";
import { H2, H3, Paragraph } from "@/components/base/Typography/Typography";
import React from "react";
import { BackgroundImages } from "../BackgroundImage";
import styles from "./../styles.module.css";
export const Banner = (props: {
  heading?: string;
  description?: string;
  buttonText?: string;
  bannerStyles?: string;
}) => {
  const { heading, description, buttonText, bannerStyles } = props;

  return (
    <>
      <div className={`${styles.banners} ${bannerStyles}`}>
        {/* <BackgroundImages /> */}
        <H3 className={styles.bannerHeading}>
          {heading ? heading : "Curious About Our Services And Client Stories?"}
        </H3>
        {description && (
          <Paragraph className={styles.bannerDescription}>
            {description}
          </Paragraph>
        )}
        <CustomButton
          classStyles={styles.bannerButton}
          child={buttonText ? buttonText : "Check out our portfolio"}
        />
      </div>
    </>
  );
};
