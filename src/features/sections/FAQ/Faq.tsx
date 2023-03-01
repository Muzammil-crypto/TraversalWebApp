import { CustomButton } from "@/components/base/Button/Button";
import { InputField } from "@/components/base/InputField/InputField";
import { Spacer } from "@/components/base/Spacer/Spacer";
import { H1, H2, H3, Paragraph } from "@/components/base/Typography/Typography";
import React from "react";
import styles from "./styles.module.css";
export const Faq = () => {
  return (
    <div className={styles.mainBody}>
      <H2>Send any Query</H2>
      <Spacer spacerStyles={styles.spacer} />
      <div
        style={{
          backgroundImage: `url("/bottomrect.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover  ",
        }}
        className={styles.childBody}
      >
        <div className={styles.textDiv}>
          <H1 className={styles.slagLine}>
            Give us a touch for more information
          </H1>
          <Paragraph className={styles.slagPara}>
            Register and enjoy all the advantages that we offer you, introduce
            your services.
          </Paragraph>
        </div>
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
              name="checkbox"
              type="checkbox"
              placeholder="checkbox"
              value=""
              inputStyles={styles.checkBoxStyles}
            />

            <text className="text-sm ">
              I have read and accept the privacy policy.
            </text>
          </div>
          <CustomButton
            child="Submit"
            classStyles=" bg-primary hover:bg-primary"
          />
        </div>
      </div>
    </div>
  );
};
