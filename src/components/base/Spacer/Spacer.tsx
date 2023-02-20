import React from "react";
import { CustomImage } from "../Image/CustomImage";

export const Spacer = (props: { spacerStyles: string }) => {
  const { spacerStyles } = props;
  return (
    <div>
      <CustomImage
        url="/line.svg"
        alt="Group1"
        height={20}
        width={200}
        classStyles={spacerStyles}
      />
    </div>
  );
};
