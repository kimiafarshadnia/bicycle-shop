'use client'
import { BrandCarousel } from "Components";

export const BrandSection = () => {

    return (
        <div className="bg-gray-50">
            <div className='container mx-auto px-5 md:px-0'>
                <div className='flex flex-col items-center justify-center gap-6 text-center py-24'>
                    <h2 className='text-2xl sm:text-4xl font-bold capitalize'>our brands</h2>
                    <p className='w-full sm:w-1/2 text-sx sm:text-sm text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum ut, accusamus corrupti ad iure, corporis perferendis facilis qui enim quo, aut nulla blanditiis iusto hic saepe eligendi illum totam. Cupiditate.</p>
                    <BrandCarousel />
                </div>
            </div>
        </div>
    );
};
