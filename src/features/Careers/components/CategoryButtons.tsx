import React from "react";
import styles from "./../styles.module.css";
export const CategoryButtons = (props: {
  category?: string;
  buttonStyles?: string;
}) => {
  const { category, buttonStyles } = props;
  return (
    <div className={`${styles.catButtonBox} ${buttonStyles}`}>{category}</div>
  );
};
