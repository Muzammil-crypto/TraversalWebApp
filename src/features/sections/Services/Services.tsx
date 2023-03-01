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
export const Services = () => {
  const size = useWindowSize();

  const swiperRef = useRef<any>(null);
  return (
    <div className={styles.mainBox}>
      <BackgroundVectors />

      <div className={styles.childBox}>
        <H2 className={styles.heading}>{services}</H2>
        <div className="flex flex-row  mt-48 absolute w-full">
          <SlideLeft
            classname="text-primary"
            onTap={() => swiperRef?.current?.swiper?.slideNext()}
          />
          <SlideRight
            classname="ml-auto text-primary"
            onTap={() => swiperRef?.current?.swiper?.slidePrev()}
          />
        </div>
        <div className={styles.servicesContainer}>
          <Swiper
            className={styles.swiper}
            autoplay={true}
            loop={true}
            grabCursor={true}
            modules={[Navigation, Thumbs, Pagination]}
            spaceBetween={39}
            ref={swiperRef}
            breakpoints={{
              1410: {
                width: 1220,
                slidesPerView: 3,
              },
              1160: {
                width: 1100,
                slidesPerView: 3,
              },
              900: {
                width: 900,
                slidesPerView: 3,
              },
              800: {
                width: 820,
                slidesPerView: 2,
              },
              700: {
                width: 768,
                slidesPerView: 2,
              },
            }}
          >
            {Ourservices.map((item, val) => (
              <SwiperSlide key={val}>
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
