import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const EventsSwiper = () => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        spaceBetween={650}
        slidesPerView={1} // Default for mobile
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 650,
          },
        }}
        initialSlide={1}
        className="h-full w-screen absolute top-[50vh] transform -translate-y-[60%]"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
      >
        <SwiperSlide>
          <div
            className="relative w-full h-[600px] md:w-[600px] md:h-[350px] border border-gray-300 rounded-lg p-6 flex items-center justify-center shadow-lg transform md:-translate-x-72"
            style={{
              background:
                "linear-gradient(to right, rgba(99, 102, 241, 0.8) 50%, rgba(126, 34, 206, 0.8)) 50%",
            }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] md:w-[40%] h-12 bg-black bg-opacity-60 rounded-b-xl flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                Box Header
              </span>
            </div>
            <p className="text-center text-lg text-white md:transform -translate-y-[50%] ">
              Box 1
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              pretium velit quis sem gravida, ac pharetra lorem scelerisque.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative w-full h-[600px] md:w-[600px] md:h-[350px] border border-gray-300 rounded-lg p-6 flex items-center justify-center shadow-lg transform md:-translate-x-72"
            style={{
              background:
                "linear-gradient(to right, rgba(99, 102, 241, 0.8) 50%, rgba(126, 34, 206, 0.8)) 50%",
            }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] md:w-[40%] h-12 bg-black bg-opacity-60 rounded-b-xl flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                Box Header
              </span>
            </div>
            <p className="text-center text-lg text-white md:transform -translate-y-[50%]">
              Box 2
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              pretium velit quis sem gravida, ac pharetra lorem scelerisque.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative w-full h-[600px] md:w-[600px] md:h-[350px] border border-gray-300 rounded-lg p-6 flex items-center justify-center shadow-lg transform md:-translate-x-72"
            style={{
              background:
                "linear-gradient(to right, rgba(99, 102, 241, 0.8) 50%, rgba(126, 34, 206, 0.8)) 50%",
            }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] md:w-[40%] h-12 bg-black bg-opacity-60 rounded-b-xl flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                Box Header
              </span>
            </div>
            <p className="text-center text-lg text-white md:transform -translate-y-[50%]">
              Box 3
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              pretium velit quis sem gravida, ac pharetra lorem scelerisque.
            </p>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides as needed */}

        <IoIosArrowDropleftCircle
          className="swiper-button-prev text-[#ffffff] absolute left-4 top-0 transform -translate-y-[100%] translate-x-1/2 cursor-pointer scale-150 md:scale-[2.5]"
          style={{ color: "white" }}
        />
        <IoIosArrowDroprightCircle
          className="swiper-button-next text-[#ffffff] absolute right-4 top-0 transform -translate-y-[100%] -translate-x-1/2 cursor-pointer scale-150 md:scale-[2.5]"
          style={{ color: "white" }}
        />
        <div
          className="swiper-pagination absolute top-0 w-full"
          style={{ position: "absolute", bottom: "20%" }}
        ></div>
      </Swiper>
    </>
  );
};

export default EventsSwiper;
