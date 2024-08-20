'use client'
import Link from 'next/link';

export const HeroSection = () => {
    return (
        <div className='container mx-auto px-5 md:px-2 pb-5 lg:pb-0'>
            <div className='flex flex-col-reverse md:flex-row md:justify-between gap-10'>
                <div className='md:basis-2/4'>
                    <div className='flex flex-col gap-6 pr-5'>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary font-bold'>Gulf Youth Bicycle</h1>
                        <h2 className='text-xl sm:text-2xl font-semibold'>Best Cycling Experience</h2>
                        <p className='w-full md:w-3/5 text-sm sm:text-base text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor eum provident ipsam totam nostrum eligendi repellendus ratione reprehenderit, eveniet vel pariatur id neque ipsum, quibusdam laudantium in, quam fuga.</p>
                        <Link href={'/products/75'} className='w-fit px-5 py-2 rounded-full text-white bg-primary duration-300 hover:border-2 hover:border-primary hover:text-primary hover:bg-white'>
                            shop now
                        </Link>
                    </div>
                </div>
                <div className='md:basis-2/4'>
                    <div className="">
                        <img src='images/hero-bicycle-3.jpeg' alt="bicycle" />
                    </div>
                </div>
            </div>
        </div>
    );
};
