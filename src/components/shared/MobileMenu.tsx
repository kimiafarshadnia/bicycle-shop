'use client'
import Link from 'next/link';
import { MegaMenuItem } from 'Types';
import { menuData } from 'Constants';
import { usePathname } from 'next/navigation';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import { useState } from 'react';

import { MobileMenuAccordion } from 'Components';
export const MobileMenu = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const toggleDrawer =
        (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setOpen(inOpen);
        };
    return (
        <>
            <Button variant="outlined" color="neutral" onClick={toggleDrawer(true)} className="md:hidden p-0 border-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d='M4 6h16M4 12h16m-7 6h7'
                    />
                </svg>
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <div
                    className='md:hidden transition-all duration-300'
                >
                    <div className="p-5">
                        {menuData.menuItems.map((item: MegaMenuItem, index: number) => (
                            <div key={index} className="mb-4 relative group">

                                {item.categories ? (
                                    <MobileMenuAccordion categories={item.categories} title={item.title}/>
                                ) : (
                                    <Link
                                        href={item.url  || '#'}
                                        className={`${pathname.endsWith(item.url as string) ? 'text-primary' : ''} hover:text-primary`}
                                    >
                                        {item.title}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Drawer>
        </>
    )
}


