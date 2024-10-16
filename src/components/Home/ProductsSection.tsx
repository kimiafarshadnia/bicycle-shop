'use client';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import { useProductsList } from 'Hooks';
import TabPanel from '@mui/lab/TabPanel';
import { ProductCard } from 'Components';
import { useState, useEffect } from 'react';
import TabContext from '@mui/lab/TabContext';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ProductsSection = () => {
    const [value, setValue] = useState('1');
    const [categoryId, setCategoryId] = useState<number | undefined>(undefined);
    const { products, loading, error } = useProductsList(categoryId);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        const id = newValue === '1' ? 75 : newValue === '2' ? 76 : 77;
        setCategoryId(id);
    };

    useEffect(() => {
        setCategoryId(75);
    }, []);

    const getRandomProducts = (products: any[], count: number) => {
        const shuffled = products.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    return (
        <div className='container mx-auto px-5 md:px-2'>
            <div className='flex flex-col items-center justify-center gap-6 text-center py-24'>
                <h2 className='text-2xl sm:text-4xl font-bold capitalize'>Products</h2>

                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="product categories">
                            <Tab label="Bikes" value="1" />
                            <Tab label="Accessories" value="2" />
                            <Tab label="Parts" value="3" />
                        </TabList>
                    </Box>
                    {['1', '2', '3'].map((tabValue, index) => (
                        <TabPanel key={tabValue} value={tabValue}>
                            {loading ? (
                                <p>Loading...</p>
                            ) : error ? (
                                <p className="text-red-500">{error}</p>
                            ) : (
                                <Swiper
                                centeredSlidesBounds
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
                                    {getRandomProducts(products, 3).map((product) => (
                                        <SwiperSlide key={product.id} className='swiper-slide-home'>
                                            <ProductCard product={product} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}
                        </TabPanel>
                    ))}
                </TabContext>
            </div>
        </div>
    );
};
