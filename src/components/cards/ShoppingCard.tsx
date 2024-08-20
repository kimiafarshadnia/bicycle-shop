'use client'
import { useState } from 'react';
import { Drawer, IconButton } from '@mui/material';
import { Icon, ShoppingCardContent } from 'Components';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from 'Context';

export const ShoppingCard = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { cartQuantity } = useCartContext()
    return (
        <div>
            <div className='relative'>
                <IconButton onClick={() => setIsDrawerOpen(true)}>
                    <Icon iconName={faBasketShopping} className='text-primary' />
                </IconButton>
                <div className='absolute top-0 -right-[8px]'>
                    <div className='w-6 h-6 p-2 flex items-center justify-center rounded-full text-white text-sm bg-gray-500'>
                        <span>{cartQuantity}</span>
                    </div>
                </div>
            </div>
            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                classes={{ paper: 'w-64 md:w-[400px]' }}
            >
                <ShoppingCardContent />
            </Drawer>
        </div>
    );
}


