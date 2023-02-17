import { H2 } from "@/components/base/Typography/Typography";
import React from "react";
import { Ourservices, services } from "@/consts/consts";
import { SlideCard } from "@/components/general/Slider/SlideCard";
import { Navigation, Thumbs, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export const Services = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      <div className="w-screen h-3/4 mt-10 flex items-center justify-center flex-col">
        <H2 className="text-center">{services}</H2>
        <Swiper
          style={{ overflow: "inherit", marginTop: 48, width: "100%" }}
          pagination={true}
          autoplay={true}
          loop={true}
          grabCursor={true}
          modules={[Navigation, Thumbs, Pagination]}
          spaceBetween={39}
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
  );
};
