import React, { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./style.scss";

export interface СarouselProps {
  children?: ReactElement | string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

const Carousel = (): ReactElement => (
  <>
    <Swiper
      slidesPerView={1.20}
      spaceBetween={8}
      setWrapperSize={true}
      breakpoints={{
        320: {
          slidesPerView: 1.25,
        },
        480: {
          slidesPerView: 1.17,
        },
        768: {
          slidesPerView: 1.155,
        },
        900: {
          slidesPerView: 1.3,
        },
        1024: {
          slidesPerView: 1.125,
        },
        1280: {
          slidesPerView: 1.34,
        },
        1350: {
          slidesPerView: 1.4,
        },
        1440: {
          slidesPerView: 1.3,
        },
        1600: {
          slidesPerView: 1.4,
        },
        1920: {
          slidesPerView: 1.275,
        },
        2220: {
          slidesPerView: 1.4,
        },
        2500: {
          slidesPerView: 1.5,
        },
      }}
      centeredSlides
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      navigation={{
        nextEl: ".next",
      }}
      className={"mySwiper"}
    >
      <SwiperSlide>
        <img src="/img/about-us1.jpeg" alt="ups" className={"next"} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/about-us4.png" alt="ups" className={"next"} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/about-us2.png" alt="ups" className={"next"} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/about-us3.png" alt="ups" className={"next"} />
      </SwiperSlide>
    </Swiper>
  </>
);


export default Carousel;
