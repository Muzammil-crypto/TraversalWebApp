import { Paragraph } from "@/components/base/Typography/Typography";
import { careerCategories } from "@/consts/consts";
import React from "react";
import styles from "./styles.module.css";
import { Banner } from "../About/components/Banner";
import { Hero } from "../Sections/Hero/Hero";
import { CategoryButtons } from "./components/CategoryButtons";
import { JobCards } from "./components/JobCards";

export const Careers = () => {
  return (
    <>
      <Hero
        heading="Become a Part of Our Team"
        careersHero={true}
        baseLine="Select Your Job Category  & Apply On this Postion"
        image="/careers.svg"
        baseLineStyle="text-gray"
      />
      <div className={styles.mainBox}>
        {careerCategories.map((item) => (
          <CategoryButtons key={item.id} category={item.title} />
        ))}
      </div>
      <div className={styles.jobHeading}>
        <Paragraph>Recent Job Openings</Paragraph>
      </div>
      <div className={styles.jobCards}>
        {/* cards */}
        <JobCards />
        <JobCards />
        <JobCards />
        <JobCards />
        <JobCards />
        <JobCards />
      </div>
      <div>
        <div className={styles.bannerBox}>
          <Banner
            heading="Are You Exited Join Megaverse"
            buttonText="Book A Free Consulation"
            bannerStyles="w-[90%] my-10 mx-auto"
          />
        </div>
      </div>
    </>
  );
};
