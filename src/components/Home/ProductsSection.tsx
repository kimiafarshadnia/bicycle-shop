'use client'
import Link from 'next/link';
import { CardProduct } from 'Components';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export const ProductsSection = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <div className='container mx-auto px-5 md:px-0'>
            <div className='flex flex-col items-center justify-center gap-6 text-center py-24'>
                <h2 className='text-2xl sm:text-4xl font-bold capitalize'>Products</h2>

                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Item One" value="1" />
                            <Tab label="Item Two" value="2" />
                            <Tab label="Item Three" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">Item One</TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>

                <Link href={'/products'} className='w-fit h-fit px-5 py-2 rounded-full text-white bg-primary duration-300 hover:border-2 hover:border-primary hover:text-primary hover:bg-white'>
                    more
                </Link>
            </div>
        </div>
    );
};
