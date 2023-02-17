import React from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { CSSProperties } from "styled-components";
export const SlideRight = (props: {
  onTap: () => {};
  styles: CSSProperties;
}) => {
  const { onTap, styles } = props;
  return (
    <div style={styles} className=" border-primary p-1 rounded-full border-2">
      <EastOutlinedIcon fontSize="medium" onClick={onTap} />
    </div>
  );
};
