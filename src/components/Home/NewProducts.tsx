'use client';
import { useLatestProducts } from 'Hooks';
import { Icon, ProductCard } from 'Components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination } from 'swiper/modules';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';

export const NewProducts = () => {
  const { products, loading, error } = useLatestProducts();

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className='container mx-auto px-5 md:px-0'>
      <div className='flex flex-col items-center justify-center gap-6 text-center py-24'>
        <h2 className='text-2xl sm:text-4xl font-bold capitalize'>New Products</h2>

        {loading ? (
          <Icon iconName={faBicycle} size='xl' className="animate-spin text-primary" />
        ) : (
          <div className="w-full">
            <Swiper
            centeredSlidesBounds
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                }
              }}
              
              className="swiper-container"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};
