import { H1 } from "@/components/base/Typography/Typography";
import { Header } from "@/components/general/Header/Header";
import React from "react";
import { BackgroundVectors } from "../Sections/Hero/backgroundVectors/BackgroundVectors";
import { ContactForm } from "./ContactForm/ContactForm";
import { SupportCard } from "./SupportCard/SupportCard";
import styles from "./styles.module.css";
export const Contact = () => {
  return (
    <>
      <div className={styles.mainBox}>
        <BackgroundVectors />
        <Header />
        <H1 className={styles.heading}>
          {"Love to hear from you, Get in touch"}
        </H1>
        <ContactForm />
        <div className={styles.supportCardBox}>
          <SupportCard
            lineText="68 Aurangzeb Block New Garden Town Lahore"
            image="/location.svg"
          />
          <SupportCard lineText="Support@mergaverse.com" image="/mail.svg" />
          <SupportCard lineText="+92 324 4979529" image="/phone.svg" />
        </div>
      </div>
    </>
  );
};
