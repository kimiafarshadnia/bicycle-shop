'use client'
import { useState } from 'react';
import { Icon } from 'Components';
import { Drawer, IconButton } from '@mui/material';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

export const ShoppingCard = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
            <div>
                <IconButton onClick={() => setIsDrawerOpen(true)}>
                    <Icon iconName={faBasketShopping} className='text-primary' />
                </IconButton>

                <Drawer
                    anchor="left"
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                    classes={{ paper: 'w-64' }}
                >
                    hello user
                </Drawer>
            </div>
    );
}


