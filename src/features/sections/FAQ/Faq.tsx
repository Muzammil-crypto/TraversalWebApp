import { CustomImage } from "@/components/base/Image/CustomImage";
import { Spacer } from "@/components/base/Spacer/Spacer";
import { H2, H4, Paragraph } from "@/components/base/Typography/Typography";
import React from "react";
import { BackgroundImage } from "./Background";

export const Faq = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <H2>Send any Query</H2>
      <Spacer spacerStyles="ml-24" />
      <div className="w-full ml-80">
        <H4 className="mt-80 text-left text-white">
          Give us a touch for more information
        </H4>
        <Paragraph className="mt-80 text-left text-white">
          Register and enjoy all the advantages that we offer you, introduce
          your services.
        </Paragraph>
      </div>

      <BackgroundImage />
    </div>
  );
};
