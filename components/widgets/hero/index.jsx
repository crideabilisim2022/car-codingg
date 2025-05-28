"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Typewriter } from "react-simple-typewriter";

const slides = [
  {
    id: 1,
    title: "Araç Yazılımında Uzmanlık",
    desc: "Performansınızı artıran, güvenli ve güncel araç yazılım çözümleri.",
    img: "/img/hero/car1.jpg",
  },
  {
    id: 2,
    title: "Chip Tuning Çözümleri",
    desc: "Motor performansınızı optimize eden son teknoloji chip tuning hizmetleri.",
    img: "/img/hero/car2.jpg",
  },
  {
    id: 3,
    title: "Diagnostik Hizmetleri",
    desc: "Araç arızalarını hızlı tespit ve çözüm için profesyonel diagnostik sistemler.",
    img: "/img/hero/car3.webp",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-black text-white">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation
        effect="fade"
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {slides.map(({ id, img }) => (
          <SwiperSlide key={id} className="relative h-full">
            <img
              src={img}
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center max-w-2xl mx-auto z-20">
        <h1 className="text-5xl md:text-7xl font-bold text-red-600 mb-4 drop-shadow-lg">
          <Typewriter
            key={activeIndex}
            words={[slides[activeIndex].title]}
            loop={false}
            cursor={true}
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8 drop-shadow-md">
          {slides[activeIndex].desc}
        </p>
        <button className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-md font-semibold shadow-lg transition">
          Hizmetlerimizi Keşfet
        </button>
      </div>
    </section>
  );
}
