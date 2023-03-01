import React from "react";
import { CustomImage } from "../Image/CustomImage";

export const Spacer = (props: {
  spacerStyles?: string;
  img?: string;
  width?: number;
  height?: number;
}) => {
  const { spacerStyles, height, width, img } = props;
  return (
    <div>
      <CustomImage
        url={img ? img : "/line.svg"}
        alt="Group1"
        height={height ? height : 20}
        width={width ? width : 190}
        classStyles={spacerStyles}
      />
    </div>
  );
};
