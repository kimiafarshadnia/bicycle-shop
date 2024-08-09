'use client';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

const brands = [
  {
    name: 'Brand One',
    image: '/images/brands/brand1.png',
  },
  {
    name: 'Brand Two',
    image: '/images/brands/brand1.png',
  },
  {
    name: 'Brand Three',
    image: '/images/brands/brand1.png',
  },
  {
    name: 'Brand Four',
    image: '/images/brands/brand1.png',
  },
  {
    name: 'Brand Five',
    image: '/images/brands/brand1.png',
  },
  {
    name: 'Brand Six',
    image: '/images/brands/brand1.png',
  },
  {
    name: 'Brand Seven',
    image: '/images/brands/brand1.png',
  },
  {
    name: 'Brand Eight',
    image: '/images/brands/brand1.png',
  }
];

export const BrandCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(brands.length / itemsPerSlide);
  const intervalRef = useRef<number | undefined>(undefined);

  const startAutoPlay = () => {
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
  };


  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      stopAutoPlay();
    };
  }, [totalSlides]);

  const handlePrev = () => {
    stopAutoPlay();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
    startAutoPlay();
  };

  const handleNext = () => {
    stopAutoPlay();
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
    startAutoPlay();
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
          <div
            key={slideIndex}
            className="w-full flex-shrink-0 grid grid-cols-2 sm:grid-cols-4 gap-4 px-4"
          >
            {brands
              .slice(
                slideIndex * itemsPerSlide,
                slideIndex * itemsPerSlide + itemsPerSlide
              )
              .map((brand, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="w-24 h-24 relative">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="mt-2 text-center">{brand.name}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none"
        onClick={handlePrev}
        aria-label="Previous"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none"
        onClick={handleNext}
        aria-label="Next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};


