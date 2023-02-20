import React from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { CSSProperties } from "styled-components";
export const SlideRight = (props: {
  onTap: () => {};
  classname?: string;
  styles?: CSSProperties;
}) => {
  const { onTap, classname, styles } = props;
  return (
    <div
      style={styles}
      className={`border-primary p-1 rounded-full border-2 ${
        classname && classname
      }`}
    >
      <EastOutlinedIcon fontSize="medium" onClick={onTap} />
    </div>
  );
};
