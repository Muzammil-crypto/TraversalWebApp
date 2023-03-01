import { CustomButton } from "@/components/base/Button/Button";
import { InputField } from "@/components/base/InputField/InputField";
import { H5, H6 } from "@/components/base/Typography/Typography";
import { Logo } from "@/components/general/Header/Logo";
import { footermenu, social } from "@/consts/consts";
import React from "react";
import styles from "./styles.module.css";
import { Icon } from "./Icons/Icon";

export const Footer = () => {
  return (
    <div className={styles.childFooterDiv}>
      <div className={styles.logoContainer}>
        <Logo url="/mvw.svg" height={223} width={223} />
        <div className={styles.iconsContainer}>
          <Icon
            name="/fi1.svg"
            tagLine={true}
            sideText={"68 Aourangzaib Block New Garden Tow Lahore"}
            iconStyle={styles.iconStylish}
          />
          <Icon
            name="/fi2.svg"
            tagLine={true}
            sideText={"Support@megavers.com"}
            iconStyle={styles.iconStylish}
          />
          <Icon
            name="/fi3.svg"
            tagLine={true}
            sideText={"+92 324 7949512"}
            iconStyle={styles.iconStylish}
          />
        </div>
      </div>
      <div className={styles.subscriptionContainer}>
        <div className={styles.subScriptionChild}>
          <H5 className="text-white">Subscribe</H5>
          <InputField
            value=""
            name="name"
            placeholder="First Name"
            type="text"
            inputStyles={styles.inputField}
          />
          <InputField
            value=""
            name="email"
            placeholder="Email"
            type="text"
            inputStyles={styles.inputField}
          />
          <CustomButton
            varient="outlined"
            child="Subcribe"
            classStyles={styles.button}
          />
        </div>
      </div>
      <div className={styles.footerMenu}>
        <div className={styles.footerMenuChild}>
          <H5 className={styles.companyHeading}>Company</H5>
          {footermenu.map((item) => {
            return (
              <H6 key={item.id} className={styles.menuLinks}>
                {item.title}
              </H6>
            );
          })}
          <div className={styles.iconContainer}>
            {social.map((item) => {
              return (
                <Icon
                  key={item.id}
                  name={item.logo}
                  tagLine={false}
                  iconStyle={styles.iconStyles}
                  height={20}
                  width={20}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
