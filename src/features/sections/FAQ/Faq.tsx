import { CustomButton } from "@/components/base/Button/Button";
import { CustomImage } from "@/components/base/Image/CustomImage";
import { InputField } from "@/components/base/InputField/InputField";
import { Spacer } from "@/components/base/Spacer/Spacer";
import { H1, H2, H4, Paragraph } from "@/components/base/Typography/Typography";
import { Check } from "@mui/icons-material";
import React from "react";
import { BackgroundImage } from "./Background";
import styles from "./styles.module.css";
export const Faq = () => {
  return (
    <div className={styles.mainBody}>
      <H2>Send any Query</H2>
      <Spacer spacerStyles={styles.spacer} />
      <div className={styles.childBody}>
        <div className={styles.textDiv}>
          <H4 className={styles.slagLine}>
            Give us a touch for more information
          </H4>
          <Paragraph className={styles.slagPara}>
            Register and enjoy all the advantages that we offer you, introduce
            your services.
          </Paragraph>
        </div>
        <div className={styles.upperBox}>
          <div className={styles.lowerBox}>
            <InputField
              name="name"
              type="text"
              placeholder="Name"
              value=""
              inputStyles={styles.nameField}
            />
            <InputField
              name="email"
              type="text"
              placeholder="Email"
              value=""
              inputStyles={styles.emailField}
            />
            <InputField
              name="phone"
              type="text"
              placeholder="Phone Number"
              value=""
              inputStyles={styles.phoneField}
            />
            <InputField
              name="message"
              type="text"
              placeholder="Message"
              value=""
              inputStyles={styles.messageField}
            />
            <div className={styles.checkboxField}>
              <InputField
                name="message"
                type="checkbox"
                placeholder="Message"
                value=""
                inputStyles="w-20 h-5 ml-3"
              />
              <text className="text-sm w-96">
                I have read and accept the privacy policy.
              </text>
            </div>
            <div className={styles.submitButton}>
              <CustomButton child="Submit" classStyles=" bg-primary" />
            </div>
          </div>
        </div>
      </div>

      <BackgroundImage />
    </div>
  );
};
