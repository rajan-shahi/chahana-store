import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Navigation } from "swiper/modules";

const imageUrls = [
  "https://img.lazcdn.com/us/lazada_mars_image/346a04aaebb336833a21c48a0cdadd63.png_2200x2200q80.png_.webp",
  "https://img.lazcdn.com/us/lazada_mars_image/7d979b8c0ec809ae808f142e9baea482.jpg_2200x2200q80.jpg_.webp",
  "https://img.lazcdn.com/us/domino/e5ffcecc-3955-458d-8efb-4a56eaf00266_NP-1053-360.jpg_2200x2200q80.jpg_.webp",
  "https://img.lazcdn.com/us/lazada_mars_image/f988c52d3651aa33dc06ff2637dbb1b1.jpg_2200x2200q80.jpg_.webp",
  "https://img.lazcdn.com/us/lazada_mars_image/efe552b023c974a12b17e8805b1e19b7.jpg_2200x2200q80.jpg_.webp",
  "https://img.lazcdn.com/us/lazada_mars_image/bade025a8dcf216955e374942090cb3e.png_2200x2200q80.png_.webp",
  "https://img.lazcdn.com/us/domino/52f05eb1-55b7-4398-8cdd-3ffd163344ca_NP-1053-360.jpg_2200x2200q80.jpg_.webp",
];

export default function HomeSlider() {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {imageUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <div className="container md:mx-auto md:px-0 px-5 mt-5 mb-2 rounded-lg overflow-hidden">
              <img
                src={url}
                alt={`Slide ${index + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="custom-prev">
        <GrFormPreviousLink size={25} />
      </button>

      <button className="custom-next">
        <GrFormNextLink size={25} />
      </button>
    </div>
  );
}
