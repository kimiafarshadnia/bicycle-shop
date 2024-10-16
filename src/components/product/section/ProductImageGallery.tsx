'use client';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

type ThumbsGalleryProps = {
  images: string[];
};


export const ProductImageGallery = ({ images }: ThumbsGalleryProps) => {
  const defaultImage = '/images/default-image-bicycle.jpeg';
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  if (images.length === 0) {
    return (
      <div className="w-full flex justify-center items-center">
        <img
          src={defaultImage}
          alt="Default Image"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className="w-full flex justify-center items-center">
        <img
          src={images[0]}
          alt="Single Image"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* Main Swiper */}
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        centeredSlides={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="main-swiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[400px]">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs-swiper mt-5 h-[100px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[100px] cursor-pointer">
              <img
                src={src}
                alt={`Thumbnail ${index}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
