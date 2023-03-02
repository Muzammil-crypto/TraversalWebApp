import React from "react";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { CSSProperties } from "styled-components";
export const SlideLeft = (props: {
  onTap: () => {};
  classname?: string;
  styles?: CSSProperties;
}) => {
  const { onTap, classname, styles } = props;
  return (
    <div
      onClick={onTap}
      style={styles}
      className={`border-primary p-1  rounded-full border-2 ${
        classname && classname
      }`}
    >
      <WestOutlinedIcon fontSize="medium" />
    </div>
  );
};
