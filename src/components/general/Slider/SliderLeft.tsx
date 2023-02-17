import React from "react";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
export const SlideLeft = (props: { onTap: () => {} }) => {
  const { onTap } = props;
  return (
    <div className=" border-primary p-1 rounded-full border-2">
      <WestOutlinedIcon fontSize="medium" onClick={onTap} />
    </div>
  );
};
