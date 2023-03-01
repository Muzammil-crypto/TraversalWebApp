import { CustomImage } from "@/components/base/Image/CustomImage";
import { Spacer } from "@/components/base/Spacer/Spacer";
import { H2, Paragraph } from "@/components/base/Typography/Typography";
import React from "react";
import styles from "./../styles.module.css";

export const PortfolioItemsCard = (props: {
  projectName?: string;
  description?: string;
  category?: string;
  image?: string;
  cardStyles?: string;
}) => {
  const { projectName, description, category, image, cardStyles } = props;
  return (
    <>
      <div className={`${styles.cardContainer} ${cardStyles}`}>
        <div className={styles.childContainer}>
          <CustomImage
            url={image ? image : "/p7.svg"}
            height={429}
            width={558}
            alt="port"
          />
        </div>
        <div className={styles.workCardsContainer}>
          <div className={styles.projectDetailsContainer}>
            <H2 className={styles.projectHeading}>{projectName}</H2>
            <Paragraph>
              {description}
              <br />
              <div className={styles.projectTypeContainer}>
                <Paragraph className={styles.industryStyles}>
                  Industry:
                </Paragraph>
                <Paragraph> {category}</Paragraph>
              </div>
            </Paragraph>
          </div>
        </div>
      </div>
      <div className={styles.spacer}>
        <Spacer
          img="/pspace.svg"
          height={100}
          width={544}
          spacerStyles="mt-4"
        />
      </div>
    </>
  );
};
