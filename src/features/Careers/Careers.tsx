import { Paragraph } from "@/components/base/Typography/Typography";
import React from "react";
import styles from "./styles.module.css";
import { Banner } from "../About/components/Banner";
import { Hero } from "../Sections/Hero/Hero";
import { CategoryButtons } from "./components/CategoryButtons";
import { JobCards } from "./components/JobCards";
interface Item {
  id: number;
  name: string;
  category: string;
}

const items: Item[] = [
  { id: 1, name: "Business Marketing Sales ", category: "Sales" },
  { id: 2, name: "Business Marketing Sales", category: "Marketing" },
  { id: 3, name: "Business Marketing Sales ", category: "Designing" },
  { id: 4, name: "Business Marketing Sales", category: "Development" },
  { id: 5, name: "Business Marketing Sales", category: "Development" },
];
const categories: string[] = ["Sales", "Marketing", "Designing", "Development"];

export const Careers = () => {
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
    <>
      <Hero
        heading="Become a Part of Our Team"
        careersHero={true}
        baseLine="Select Your Job Category  & Apply On this Postion"
        image="/careers.svg"
        baseLineStyle="text-gray"
      />
      <div className={styles.mainBox}>
        {categories.map((item, index) => (
          <CategoryButtons
            key={index}
            category={item}
            onClick={() => showCategories(item)}
            indexValue={index}
          />
        ))}
      </div>
      <div className={styles.jobHeading}>
        <Paragraph>Recent Job Openings</Paragraph>
      </div>
      <div className={styles.jobCards}>
        {all
          ? items.map((item, ind) => (
              <JobCards title={item.name} key={ind} category={item.category} />
            ))
          : filteredItems.map((item, ind) => (
              <JobCards title={item.name} key={ind} category={item.category} />
            ))}
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
