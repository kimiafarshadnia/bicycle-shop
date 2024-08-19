'use client';
import Image from 'next/image';
import { useBrandsList } from 'Hooks';
import { useEffect, useState, useRef } from 'react';

export const BrandCarousel = () => {
  const { brands } = useBrandsList();
  const defaultImage = '/images/default-image-bicycle.jpeg';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(5); // Default to 5 items per slide for larger screens
  const totalSlides = Math.ceil(brands.length / itemsPerSlide);
  const intervalRef = useRef<number | undefined>(undefined);

  const updateItemsPerSlide = () => {
    if (window.innerWidth < 640) {
      setItemsPerSlide(2);
    }
    else if (window.innerWidth < 768) {
      setItemsPerSlide(3);
    } else {
      setItemsPerSlide(5);
    }
  };

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    
    startAutoPlay();

    return () => {
      window.removeEventListener('resize', updateItemsPerSlide);
      stopAutoPlay();
    };
  }, [totalSlides]);

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
    <div className="relative w-fit overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
          <div
            key={slideIndex}
            className="w-full flex-shrink-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
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
                  <div className="w-24 h-24 relative flex items-center justify-center">
                    <img
                      src={brand.image || defaultImage}
                      alt={brand.title}
                      className='bg-cover rounded-lg'
                    />
                  </div>
                  <p className="mt-2 text-center text-base sm:text-md font-medium">{brand.title}</p>
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
