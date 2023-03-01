import { Spacer } from "@/components/base/Spacer/Spacer";
import { Paragraph } from "@/components/base/Typography/Typography";
import React from "react";
import styles from "./../styles.module.css";

export const CategoryItems = (props: {
  item?: string;
  itemStyles?: string;
}) => {
  const [isClicked, setIsClicked] = React.useState(false);

  const { item, itemStyles } = props;

  return (
    <div className={` ${styles.categoryItems} ${itemStyles}`}>
      <Paragraph>
        <div className={styles.catPara}>
          <span className="text-gray">{item}</span>

          {isClicked ? <Spacer width={30} /> : ""}
        </div>
      </Paragraph>
    </div>
  );
};
