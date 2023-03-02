import React, { useEffect, useState } from "react";
import styles from "./../styles.module.css";
export const CategoryButtons = (props: {
  category?: string;
  buttonStyles?: string;
  onClick?: () => void;
  indexValue?: number;
}) => {
  // const [selectedItem, setSelectedItem] = useState(null);

  const { category, buttonStyles, onClick, indexValue } = props;
  // function handleItemClick(item: any) {
  //   onClick();
  //   if (selectedItem === item) {
  //     setSelectedItem(null);
  //   } else {
  //     setSelectedItem(item);
  //   }
  // }
  return (
    <div
      key={indexValue}
      onClick={onClick}
      className={`${styles.catButtonBox} ${buttonStyles} 
     
        `}
    >
      {category}
    </div>
  );
};
