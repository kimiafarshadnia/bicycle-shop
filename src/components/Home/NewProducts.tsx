'use client'
import Link from 'next/link';
import { CardProduct } from 'Components';
export const NewProducts = () => {

    return (
        <div className='container mx-auto px-5 md:px-0'>
            <div className='flex flex-col items-center justify-center gap-6 text-center py-24'>
                <h2 className='text-2xl sm:text-4xl font-bold capitalize'>new products</h2>

                <div className='flex flex-row overflow-x-scroll justify-center gap-6'>
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>

                <Link href={'/products'} className='w-fit h-fit px-5 py-2 rounded-full text-white bg-primary duration-300 hover:border-2 hover:border-primary hover:text-primary hover:bg-white'>
                    more
                </Link>
            </div>
        </div>
    );
};
