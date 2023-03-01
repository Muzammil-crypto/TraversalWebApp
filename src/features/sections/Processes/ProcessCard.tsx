import { CustomImage } from "@/components/base/Image/CustomImage";
import { H5 } from "@/components/base/Typography/Typography";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const ProcessCard = (props: { data: any }) => {
  const size = useWindowSize();
  const { data } = props;
  const { title, logo, arrow } = data;
  return (
    <div className={styles.parentBox}>
      <div className={styles.processes}>
        <div className={styles.cardAndArrow}>
          <CustomImage
            url={logo}
            alt="Group 1"
            height={size.width && size?.width <= 600 ? 170 : 190}
            width={size.width && size?.width <= 600 ? 170 : 190}
          />

          {size.width && size?.width >= 600 && arrow ? (
            <CustomImage
              url={arrow}
              alt="Group 1"
              height={size.width && size?.width >= 1500 ? 300 : 190}
              width={size.width && size?.width >= 1500 ? 300 : 190}
            />
          ) : null}
        </div>
      </div>
      <div className={styles.headingContainer}>
        <H5 className="text-left">{title}</H5>
      </div>
    </div>
  );
};
export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
