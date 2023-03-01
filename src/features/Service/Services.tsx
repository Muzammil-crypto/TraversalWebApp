import { CustomButton } from "@/components/base/Button/Button";
import {
  H2,
  H3,
  H4,
  H5,
  Paragraph,
} from "@/components/base/Typography/Typography";
import { SlideCard } from "@/components/general/Slider/SlideCard";
import { Ourservices } from "@/consts/consts";
import React from "react";
import styles from "./styles.module.css";
import { Banner } from "../About/components/Banner";
import { Hero } from "../Sections/Hero/Hero";
import { BackgroundEffects } from "./BackgroundEffect/BackgroundEffect";
import { QualityCards } from "./components/QualityCards";

export const Services = () => {
  return (
    <>
      <Hero
        heading="Software Development Services"
        baseLine="We are a top-tier software development company that has been making success stories since 2016. With more than 90+ projects under our hood, our custom software development services deliver exceptional user experiences to set you apart from the competition. So, book a free consultation to explore our value-added services and achieve realistic corporate goals."
        image="/services.svg"
        showBullet={true}
      />
      <div className={styles.mainContainer}>
        <H2>Services</H2>
        <div className={styles.slideCardContainer}>
          {Ourservices.map((item, val) => (
            <SlideCard
              cardStyles="m-5"
              key={val}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <CustomButton
            classStyles={styles.backButton}
            varient="outlined"
            child="Back"
          />
          <CustomButton
            classStyles={styles.nextButton}
            varient="contained"
            child="Next"
          />
        </div>
        <Banner
          heading="Let’s Start A Conversation."
          buttonText="Book A Free Consulation"
          bannerStyles="w-[90%] h-[30%] my-10 mx-auto"
        />
        {/* section */}
        <div className={styles.styledImageContainer}>
          <div className={styles.childImageContainer}>
            <div className={styles.leftBlock}>
              <H5 className={styles.leftHeading}>
                Why Must You Choose Megaverse For Full-Cycle Software
                Development Services?
              </H5>
              <Paragraph className={styles.leftPara}>
                Our experience helps you reach new heights by maximizing your
                ROI through our custom-built, high-impact, secure, scalable, and
                relevant products. Learn how we will help you!
              </Paragraph>
              <div className={styles.leftButtons}>
                <CustomButton
                  child="Get Expert- Approves Sercvices"
                  classStyles={styles.button}
                />
              </div>
            </div>
          </div>
          {/* grid */}

          <div className={styles.rightGridStyles}>
            {/* Cards */}
            <QualityCards />
            <QualityCards />
            <QualityCards />
            <QualityCards />
            <QualityCards />
            <QualityCards />
          </div>
          <BackgroundEffects />
        </div>
      </div>
    </>
  );
};
