import { H1, H6 } from "@/components/base/Typography/Typography";
import Image from "next/image";
import React from "react";
import { Header } from "@/components/general/Header/Header";
import { BackgroundVectors } from "./backgroundVectors/BackgroundVectors";
import { heroHeading, tagLine } from "@/consts/consts";
import styles from "./styles.module.css";
import { CustomButton } from "@/components/base/Button/Button";
import { Bullet } from "./Bullet";
import useWindowSize from "../Processes/ProcessCard";

export const Hero = (props: {
  image?: string;
  heading?: string;
  baseLine?: string;
  showBullet?: boolean;
  careersHero?: boolean;
  baseLineStyle?: string;
}) => {
  const size = useWindowSize();
  const { image, heading, baseLine, showBullet, careersHero, baseLineStyle } =
    props;
  return (
    <div className={styles.mainHeroBox}>
      <BackgroundVectors />
      <Header />
      <div className={styles.heroBody}>
        <div className={styles.rowBox}>
          <div className={styles.leftBox}>
            <H1 className={styles.heading}>
              {heading ? heading : heroHeading}
            </H1>
            <H6 className={`${styles.heading} ${baseLineStyle}`}>
              {baseLine ? baseLine : tagLine}
            </H6>
            {!showBullet ||
              (!careersHero && (
                <div>
                  <CustomButton
                    child={"Contact Us"}
                    classStyles={styles.button}
                  />
                </div>
              ))}
          </div>
          <div className={styles.rightBox}>
            <Image
              alt='hero'
              src={image ? image : "/hero.svg"}
              height={size.width && size.width <= 600 ? 280 : 575}
              width={size.width && size.width <= 600 ? 290 : 558}
            />
          </div>
        </div>
      </div>
      {showBullet && (
        <>
          <Bullet bulletPoint='Advanced tech stack such as Elixir, Ruby-on-Rails, Flutter, Kotlin, Ionic, MEAN, Python etc' />
          <Bullet bulletPoint='Integration of advanced technologies such as artificial intelligence, big data etc.' />
          <Bullet bulletPoint='Daily stand-up meetings with product managers' />
          <Bullet bulletPoint='Staffing with 2 weeks' />
          <Bullet bulletPoint='Try risk-free trial' />
        </>
      )}
    </div>
  );
};
