import { CustomButton } from "@/components/base/Button/Button";
import { CustomDropdown } from "@/components/base/DropDown/CustomDropdown";
import { InputField } from "@/components/base/InputField/InputField";
import { TextArea } from "@/components/base/InputField/TextArea";
import React from "react";
import styles from "./../styles.module.css";

export const ContactForm = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.gridWrapper}>
        <InputField
          value=""
          name="name"
          placeholder="Name"
          type="text"
          label="Your Name"
          inputStyles={styles.fieldStyleOne}
        />
        <InputField
          value=""
          name="email"
          placeholder="Email"
          type="text"
          label="Your Email"
          inputStyles={styles.fieldStyleOne}
        />
        <CustomDropdown
          label="What you are intersted?"
          defaultValue="Design and Branding"
          styles={styles.dropDown}
        />

        <CustomDropdown
          label="Project budget?"
          defaultValue="Design and Branding"
          styles={styles.dropDown}
        />
        <TextArea
          value=""
          name="message"
          placeholder="Message"
          label="Your Message"
          inputStyles={styles.fieldStyleTwo}
        />
      </div>
      <div className={styles.buttonContainer}>
        <CustomButton child="Just Send" classStyles={styles.button} />
      </div>
    </div>
  );
};
