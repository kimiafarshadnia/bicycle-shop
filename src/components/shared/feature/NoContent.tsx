'use client'

export const NoContent = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-5 text-center">
            <div className='flex flex-shrink-0 items-center justify-center w-[200px] h-[200px]'>
                <img src="/images/no-product.jpg" alt="no_content" className='w-full h-full'/>
            </div>
            <h2 className="text-base md:text-lg capitalize">currently, there are no products available.</h2>
        </div>
    )
}