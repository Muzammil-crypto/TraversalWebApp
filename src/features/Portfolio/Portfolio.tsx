import { Spacer } from "@/components/base/Spacer/Spacer";
import { H2 } from "@/components/base/Typography/Typography";
import { categories, portfolio } from "@/consts/consts";
import React from "react";
import styles from "./styles.module.css";
import { Banner } from "../About/components/Banner";
import { Hero } from "../Sections/Hero/Hero";
import { BackgroundImages } from "./BackgroundImages";
import { CategoryItems } from "./components/CategoryItems";
import { PortfolioItemsCard } from "./PortfolioItemsCard/PortfolioItemsCard";

export const Portfolio = () => {
  return (
    <div>
      <Hero
        heading="Projects We’ve Delivere"
        baseLine="Over the past 4+ years, we have designed and built a wide range of high-quality products from scratch. Our team has finished various web and mobile apps related to various spheres including e-learning, healthcare, e-commerce, advertising, augmented reality, action sports, finance and sharing economy. See out Portfolio below."
        image="/portfolio.svg"
      />

      <div className={styles.mainContainer}>
        <H2>Our Work</H2>
        <Spacer img="/linep.svg" width={1050} spacerStyles="ml-10" />
      </div>
      <div className={styles.catItemContainer}>
        {categories.map((item) => (
          <CategoryItems
            key={item.id}
            item={item.title}
            itemStyles={styles.catItems}
          />
        ))}
      </div>

      <div className={styles.portfolioItemContainer}>
        <BackgroundImages />
        {portfolio.map((item) => (
          <PortfolioItemsCard
            key={item.id}
            projectName={item.title}
            description={item.description}
            image={item.image}
            category={item.industry}
            cardStyles={`${item.cardStyle}`}
          />
        ))}
        <Banner
          bannerStyles={styles.banners}
          heading="Need help with your next project? "
          buttonText="Contact Us"
        />
      </div>
    </div>
  );
};
