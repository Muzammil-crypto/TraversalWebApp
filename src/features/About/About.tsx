import { CustomButton } from "@/components/base/Button/Button";
import { H2, Paragraph } from "@/components/base/Typography/Typography";
import { SlideRight } from "@/components/general/Slider/SlideRight";
import { SlideLeft } from "@/components/general/Slider/SliderLeft";
import React, { useRef } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Hero } from "../Sections/Hero/Hero";
import { BackgroundImages } from "./BackgroundImage";
import styles from "./styles.module.css";
import { Navigation, Thumbs, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Teams } from "@/consts/consts";

import { TeamsCard } from "./TeamsCard";
import { Banner } from "./components/Banner";
export const About = () => {
  const swiperRef = useRef<any>(null);

  return (
    <>
      <Hero
        heading="Megaverse Technology- Accelerate 
      Your Business Growth With Us!"
        image="/about.svg"
        baseLine="Your business is only as good as the technology behind it. We have the expertise. You have the vision. We make technology happen! Our team of world-class engineers and innovators will build your next software project, leaving you to focus on running your business.
            Got an idea? Bring it to life with Megaverse!"
      />

      {/* <div className={styles.teamsBox}>
        <H2 className={styles.teamHeading}>Meet Our Team</H2>
        <Paragraph>
          Megaverse is a diverse team of 50+ skilled professionals, led by
          passionate leaders who set their example to success. We are
          continuously growing in numbers and expertise, thanks to the visionary
          leadership and work culture at Megaverse. Here are our front runners:
        </Paragraph>
      </div> */}

      {/* <div className={styles.swiperButtons}>
        <SlideLeft
          onTap={() => swiperRef?.current?.swiper?.slideNext()}
          classname={styles.swiperleftButton}
        />
        <SlideRight
          classname={styles.swiperRightButton}
          onTap={() => swiperRef?.current?.swiper?.slidePrev()}
        />
      </div> */}
      {/* <div className={styles.servicesContainer}>
        <Swiper
          style={{ zIndex: 0 }}
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
          {Teams.map((item, val) => (
            <SwiperSlide key={val}>
              <TeamsCard
                key={item.id}
                name={item.name}
                img={item.image}
                designation={item.designation}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
      <Banner
        heading="Curious About Our Services And Client Stories?"
        buttonText="Check out our portfolio"
        bannerStyles="mt-[16%]"
      />
    </>
  );
};
