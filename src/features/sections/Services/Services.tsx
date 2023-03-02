import { H2, H4, Paragraph } from "@/components/base/Typography/Typography";
import React, { useRef } from "react";
import { Ourservices, services } from "@/consts/consts";
import { SlideCard } from "@/components/general/Slider/SlideCard";
import { Navigation, Thumbs, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SlideLeft } from "@/components/general/Slider/SliderLeft";
import { SlideRight } from "@/components/general/Slider/SlideRight";
import styles from "./styles.module.css";
import { CustomImage } from "@/components/base/Image/CustomImage";
import { BackgroundVectors } from "../Processes/BackgroundVectors";
import { CustomButton } from "@/components/base/Button/Button";
import useWindowSize from "../Processes/ProcessCard";
import { Spacer } from "@/components/base/Spacer/Spacer";
export const Services = () => {
  const size = useWindowSize();

  const swiperRef = useRef<any>(null);
  return (
    <div className={styles.mainBox}>
      <BackgroundVectors />

      <div className={styles.childBox}>
        <H2 className={styles.heading}>{services}</H2>
        <Spacer spacerStyles="ml-12" />
        <div className={styles.swiperButtonsContainer}>
          <SlideLeft
            classname={styles.leftButton}
            onTap={() => swiperRef?.current?.swiper?.slidePrev()}
          />
          <SlideRight
            classname={styles.rightButton}
            onTap={() => swiperRef?.current?.swiper?.slideNext()}
          />
        </div>
        <div className={styles.servicesContainer}>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination]}
            // loop={true}
            spaceBetween={105}
            slidesPerView={1}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
            ref={swiperRef}
            breakpoints={{
              640: {
                slidesPerView: 1,
                width: 1440,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 3,
              },
              1800: {
                slidesPerView: 4.2,
              },
            }}
          >
            {Ourservices.map((item, index) => (
              <SwiperSlide key={index}>
                <SlideCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.imageBox}>
          <CustomImage
            url="/fram.svg"
            alt="about"
            height={size.width && size.width <= 600 ? 270 : 442}
            width={size.width && size.width <= 600 ? 270 : 692}
            classStyles={styles.img}
          />
        </div>
        <div className={styles.infoBox}>
          <div className={styles.info}>
            <H4 className={styles.aboutHeading}>What we do?</H4>
            <Paragraph>
              Our goal is to provide our clients with high-quality, scalable and
              reliable solutions that meet their unique business needs. We take
              a collaborative approach to software development and work closely
              with our clients to understand their requirements and deliver
              customized solutions.
            </Paragraph>
            <CustomButton child="Contact Us" classStyles={styles.button} />
          </div>
        </div>
      </div>
    </div>
  );
};
