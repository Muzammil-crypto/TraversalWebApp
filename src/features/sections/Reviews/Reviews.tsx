import { CustomImage } from "@/components/base/Image/CustomImage";
import { H1, H6, Paragraph } from "@/components/base/Typography/Typography";
import React, { useRef } from "react";
import styles from "./styles.module.css";
import { Navigation, Thumbs, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SlideLeft } from "@/components/general/Slider/SliderLeft";
import { SlideRight } from "@/components/general/Slider/SlideRight";
import { reviews } from "@/consts/consts";
import { ReviewCard } from "./ReviewCard";
export const Reviews = () => {
  const swiperRef = useRef<any>(null);

  return (
    <div
      style={{
        backgroundImage: `url("/proty.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
      }}
      className={styles.mainBox}
    >
      <div className={styles.feedBack}>
        <CustomImage
          url="/linew.svg"
          alt="line"
          height={20}
          width={49}
          classStyles={styles.line}
        />
        <H6 className={styles.feedbackText}>Feedback</H6>
        <CustomImage
          url="/linew.svg"
          alt="line"
          height={20}
          width={49}
          classStyles={styles.line}
        />
      </div>

      <H1 className={styles.head}>Client Reviews</H1>
      <Paragraph className={styles.introParagraph}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. It is a long
        established fact that a reader.
      </Paragraph>
      <div className={styles.servicesContainer}>
        <Swiper
          style={{ width: "100%" }}
          className={styles.swiper}
          autoplay={true}
          loop={true}
          grabCursor={true}
          modules={[Navigation, Thumbs, Pagination]}
          spaceBetween={10}
          ref={swiperRef}
        >
          {reviews.map((item, val) => (
            <SwiperSlide key={val}>
              <ReviewCard key={item.id} data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.buttonsContainer}>
          <SlideLeft
            classname={styles.leftButton}
            onTap={() => swiperRef?.current?.swiper?.slideNext()}
          />
          <SlideRight
            classname={styles.rightButton}
            onTap={() => swiperRef?.current?.swiper?.slidePrev()}
          />
        </div>
      </div>
    </div>
  );
};
