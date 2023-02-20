import { H1, H4, H5, H6 } from "@/components/base/Typography/Typography";
import Image from "next/image";
import React from "react";
import { Header } from "@/components/general/Header/Header";
import { BackgroundVectors } from "./backgroundVectors/BackgroundVectors";
import { heroHeading, tagLine } from "@/consts/consts";
import styles from "./styles.module.css";
import { CustomButton } from "@/components/base/Button/Button";

export const Hero = () => {
  return (
    <div className={styles.mainHeroBox}>
      <BackgroundVectors />

      <Header />
      <div className={styles.heroBody}>
        <div className={styles.rowBox}>
          <div className={styles.leftBox}>
            <H1 className={styles.heading}>{heroHeading}</H1>
            <H5 style={{ marginTop: 29 }} className={styles.heading}>
              {tagLine}
            </H5>
            <div>
              <CustomButton child={"Contact Us"} classStyles={styles.button} />
            </div>
          </div>
          <div className={styles.rightBox}>
            <Image alt="hero" src="/hero.svg" height={575} width={558} />
          </div>
        </div>
      </div>
    </div>
  );
};
