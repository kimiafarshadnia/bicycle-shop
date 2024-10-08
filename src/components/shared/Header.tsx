'use client'
import Link from 'next/link';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { DiscountNews, Icon, MainMenu, MobileMenu, ShoppingCard } from 'Components';

export const Header = () => {
    return (
        <header>
            <DiscountNews />
            <div className='px-5 md:px-2 shadow-lg bg-white sticky top-0 z-50 backdrop-filter backdrop-blur-[20px] w-full duration-500 h-20 flex items-center'>
                <div className='container mx-auto flex items-center justify-center relative'>
                    <div className='absolute left-0 flex flex-shrink-0 items-center justify-center w-20 h-20'>
                        <img src="/images/logo.png" alt="logo" />
                    </div>
                    <MainMenu />
                    <div className='absolute right-0 flex flex-row flex-shrink-0 items-center justify-center h-20 w-fit gap-4'>
                        <Link href={'/'}>
                            <Icon iconName={faUser} size='lg' className='text-primary' />
                        </Link>

                        <ShoppingCard />

                        <div className='md:hidden'>
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
