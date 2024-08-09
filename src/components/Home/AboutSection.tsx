'use client'
import Link from 'next/link';
import { Icon } from 'Components';
import { faClock, faDollarSign, faTags, faTruckMoving } from '@fortawesome/free-solid-svg-icons';

export const AboutSection = () => {
    return (
        <div className='bg-gray-50 py-24'>
            <div className='container mx-auto px-5 md:px-0 flex flex-col gap-10'>
                <div className='flex flex-col-reverse md:flex-row md:justify-between gap-10'>
                    <div className='md:basis-2/4'>
                        <div className="flex items-center justify-center transform bg-primary w-full rounded-3xl">
                            <div className="overflow-hidden">
                                <img
                                    src="images/Bikes.jpeg"
                                    alt="Sample"
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='md:basis-2/4'>
                        <div className='flex flex-col gap-6'>
                            <h3 className='text-4xl text-primary font-bold text-capitalize'>whye Gulf Youth Bicycle ?</h3>
                            <p className='text-xs sm:text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae porro omnis odit quisquam recusandae! Repellat, porro unde. Nam, voluptate soluta. Maiores, quibusdam! Repudiandae inventore ipsa ex, doloribus aliquam quaerat sapiente!</p>

                            <p className='text-xs sm:text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, debitis veritatis ipsa aliquam nisi pariatur quibusdam voluptatum, culpa, molestias voluptates voluptate ipsam eligendi explicabo magnam cumque ex ut. Magnam, tempora.</p>

                            <p className='text-xs sm:text-sm lg:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum perspiciatis minus, amet officiis dignissimos iste ducimus aperiam accusamus laudantium maxime sed sequi aut? Explicabo veniam voluptatem, iusto autem magnam doloribus?</p>

                            <Link href={'/about-us'} className='w-fit h-fit px-5 py-2 rounded-full text-white bg-primary duration-300 hover:border-2 hover:border-primary hover:text-primary hover:bg-white'>
                                know more
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:pt-10'>
                    <div className='flex flex-col items-center justify-center text-center gap-4'>
                        <Icon iconName={faTruckMoving} size='2xl' className='text-primary' />
                        <h5 className='font-semibold'>Fast Shipping & Return</h5>
                        <p className='text-gray-500 text-xs md:text-sm'>We will help you send your wishes to your loved ones. We drive to save time.</p>
                    </div>

                    <div className='flex flex-col items-center justify-center text-center gap-4'>
                        <Icon iconName={faClock} size='2xl' className='text-primary' />
                        <h5 className='font-semibold'>Customer support</h5>
                        <p className='text-gray-500 text-xs md:text-sm'>Customer support is not a service, it’s an attitude. Making every conversation count.</p>
                    </div>

                    <div className='flex flex-col items-center justify-center text-center gap-4'>
                        <Icon iconName={faDollarSign} size='2xl' className='text-primary' />
                        <h5 className='font-semibold'>Moneyback Guarantee</h5>
                        <p className='text-gray-500 text-xs md:text-sm'>Items must be returned within 30 Days from date of delivery in its original condition</p>
                    </div>

                    <div className='flex flex-col items-center justify-center text-center gap-4'>
                        <Icon iconName={faTags} size='2xl' className='text-primary' />
                        <h5 className='font-semibold'>Best Price</h5>
                        <p className='text-gray-500 text-xs md:text-sm'>A price match guarantee for best prices on all our products</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
