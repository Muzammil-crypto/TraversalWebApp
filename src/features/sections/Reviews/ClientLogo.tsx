import { CustomImage } from "@/components/base/Image/CustomImage";
import React from "react";

export const ClientLogo = (props: { url: string }) => {
  const { url } = props;
  return (
    <div>
      <div className="flex flex-col rounded-full mt-28 w-32 h-32 items-center justify-center">
        <CustomImage
          url={url ? url : "/rect.svg"}
          height={120}
          width={120}
          alt={"alter"}
          classStyles={"rounded-full"}
        />
      </div>
    </div>
  );
};
