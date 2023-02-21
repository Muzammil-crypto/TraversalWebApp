import { CustomButton } from "@/components/base/Button/Button";
import { InputField } from "@/components/base/InputField/InputField";
import { H2, H4, H6, Paragraph } from "@/components/base/Typography/Typography";
import { Logo } from "@/components/general/Header/Logo";
import React from "react";
import { Icon } from "./Icons/Icon";

export const Footer = () => {
  return (
    <div className="w-full h-1/2 justify-center items-center mt-52 flex bg-orange ">
      <div className="h-full w-full flex flex-row  bg-footer">
        <div className=" w-96 h-auto flex flex-col ml-20 justify-center items-center m-5 ">
          <Logo url="/mvw.svg" height={223} width={223} />
          <div className="flex flex-col ">
            <Icon
              name="/fi1.svg"
              tagLine={true}
              sideText={"68 Aourangzaib Block New Garden Tow Lahore"}
              iconStyle={"my-4 mr-3"}
            />
            <Icon
              name="/fi2.svg"
              tagLine={true}
              sideText={"Support@megavers.com"}
              iconStyle={"my-4 mr-3"}
            />
            <Icon
              name="/fi3.svg"
              tagLine={true}
              sideText={"+92 324 7949512"}
              iconStyle={"my-4 mr-3"}
            />
          </div>
        </div>
        <div className=" w-96 h-auto flex flex-col items-start ml-20 ">
          <div className="flex flex-col justify-center px-10 py-32">
            <H4 className="text-white">Subscribe</H4>
            <InputField
              value=""
              name="name"
              placeholder="First Name"
              type="text"
              inputStyles=" px-2 h-12 mt-4 w-80 "
            />
            <InputField
              value=""
              name="email"
              placeholder="Email"
              type="text"
              inputStyles="w-80 h-12 mt-4 px-2"
            />
            <CustomButton
              varient="outlined"
              child="Subcribe"
              classStyles="mt-8 border-white text-white w-80 h-12 hover:bg-white hover:text-black"
            />
          </div>
        </div>
        <div className=" w-96 h-auto flex flex-col ml-20 bg-orange ">
          <Logo url="/mvw.svg" />
          <Paragraph>
            Ye COl One hai ye COl One hai ye COl One hai ye COl One hai
          </Paragraph>
        </div>
      </div>
    </div>
  );
};
