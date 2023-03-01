import { CustomImage } from "@/components/base/Image/CustomImage";
import React from "react";
import styles from "./styles.module.css";

export const ClientLogo = (props: { url: string }) => {
  const { url } = props;
  return (
    <div>
      <div className={styles.clientLogo}>
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
