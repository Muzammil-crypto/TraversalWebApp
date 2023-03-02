import { Spacer } from "@/components/base/Spacer/Spacer";
import { H2 } from "@/components/base/Typography/Typography";
import React from "react";
import styles from "./styles.module.css";
import { Banner } from "../About/components/Banner";
import { Hero } from "../Sections/Hero/Hero";
import { BackgroundImages } from "./BackgroundImages";
import { CategoryItems } from "./components/CategoryItems";
import { PortfolioItemsCard } from "./PortfolioItemsCard/PortfolioItemsCard";
//

interface Item {
  id: number;
  name: string;
  category: string;
  description: string;
  industry: string;
  image: string;
}

const items: Item[] = [
  {
    id: 1,
    industry: "Logistics",
    image: "/p1.svg",

    name: "Fleet Tracking Application",
    description:
      "Megaverse developed a fleet tracking platform to maximize efficiency by providing real-time logistics activity and communications to service providers responsible for managing large fleets",
    category: "Education",
  },
  {
    id: 2,
    industry: "Logistics",
    image: "/p3.svg",

    name: "Fleet Tracking Application",
    description:
      "Megaverse developed a fleet tracking platform to maximize efficiency by providing real-time logistics activity and communications to service providers responsible for managing large fleets",
    category: "Health Care",
  },
  {
    id: 3,
    industry: "Logistics",
    image: "/p4.svg",

    name: "Fleet Tracking Application",
    description:
      "Megaverse developed a fleet tracking platform to maximize efficiency by providing real-time logistics activity and communications to service providers responsible for managing large fleets",
    category: "Groccery",
  },
  {
    id: 4,
    industry: "Logistics",
    image: "/p5.svg",

    name: "Fleet Tracking Application",
    description:
      "Megaverse developed a fleet tracking platform to maximize efficiency by providing real-time logistics activity and communications to service providers responsible for managing large fleets",
    category: "E-Commerce",
  },
  {
    id: 5,
    industry: "Logistics",
    image: "/p6.svg",

    name: "Fleet Tracking Application",
    description:
      "Megaverse developed a fleet tracking platform to maximize efficiency by providing real-time logistics activity and communications to service providers responsible for managing large fleets",
    category: "Traveling",
  },
  {
    id: 6,
    industry: "Logistics",
    image: "/p7.svg",

    name: "Fleet Tracking Application",
    description:
      "Megaverse developed a fleet tracking platform to maximize efficiency by providing real-time logistics activity and communications to service providers responsible for managing large fleets",
    category: "Education",
  },
  {
    id: 7,
    industry: "Logistics",
    image: "/p1.svg",

    name: "Fleet Tracking Application",
    description:
      "Megaverse developed a fleet tracking platform to maximize efficiency by providing real-time logistics activity and communications to service providers responsible for managing large fleets",
    category: "Finance",
  },
  {
    id: 8,
    industry: "Logistics",
    image: "/p3.svg",

    name: "Fleet Tracking Application",
    description:
      "Megaverse developed a fleet tracking platform to maximize efficiency by providing real-time logistics activity and communications to service providers responsible for managing large fleets",
    category: "Media",
  },
];
const CATEGORIES: string[] = [
  "Health Care",
  "Groccery",
  "E-Commerce",
  "Education",
  "Traveling",
  "Media",
  "Finance",
];

export const Portfolio = () => {
  const [filteredItems, setFilteredItems] = React.useState<Item[]>([]);
  const [all, setAll] = React.useState<boolean>(true);
  const handleFilter = (category: string) => {
    const filtered = items.filter((item) => item.category === category);
    setFilteredItems(filtered);
  };
  const showCategories = (item: string) => {
    setAll(false);
    handleFilter(item);
  };
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
        {CATEGORIES.map((item, index) => (
          <CategoryItems
            key={index}
            item={item}
            itemStyles={styles.catItems}
            onClick={() => showCategories(item)}
          />
        ))}
      </div>

      <div className={styles.portfolioItemContainer}>
        <BackgroundImages />
        {all
          ? items.map((item, ind) => (
              <PortfolioItemsCard
                key={ind}
                projectName={item.name}
                description={item.description}
                image={item.image}
                category={item.industry}
                cardStyles={`${
                  ind % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              />
            ))
          : filteredItems.map((item, ind) => (
              <PortfolioItemsCard
                key={item.id}
                projectName={item.name}
                description={item.description}
                image={item.image}
                category={item.industry}
                cardStyles={`${
                  ind % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
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
