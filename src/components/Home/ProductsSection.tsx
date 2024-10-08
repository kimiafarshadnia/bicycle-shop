'use client'
import Link from 'next/link';
import { ProductCard } from 'Components';
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
        <div className='container mx-auto px-5 md:px-2'>
            <div className='flex flex-col items-center justify-center gap-6 text-center py-24'>
                <h2 className='text-2xl sm:text-4xl font-bold capitalize'>Products</h2>

                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Bikes" value="1" />
                            <Tab label="Accessories" value="2" />
                            <Tab label="Parts" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">Bikes</TabPanel>
                    <TabPanel value="2">Accessories</TabPanel>
                    <TabPanel value="3">Parts</TabPanel>
                </TabContext>
            </div>
        </div>
    );
};
