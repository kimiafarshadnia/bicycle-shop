'use client'
import { useState } from 'react';
import { Icon } from 'Components';
import { Drawer, IconButton } from '@mui/material';
import { faGears } from '@fortawesome/free-solid-svg-icons';

export const Sidebar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            <div className="hidden lg:block w-64 p-4 bg-gray-200">
                <SidebarContent />
            </div>

            <div className="lg:hidden p-4">
                <IconButton onClick={() => setIsDrawerOpen(true)}>
                    <Icon iconName={faGears} />
                </IconButton>

                <Drawer
                    anchor="left"
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                    classes={{ paper: 'w-64' }}
                >
                    <div className="p-4 bg-gray-200 h-full">
                        <SidebarContent />
                    </div>
                </Drawer>
            </div>
        </>
    );
}

function SidebarContent() {
    return (
        <>
            <div className="mb-4">
                <label className="block text-sm">Price Range</label>
                <input type="range" min="0" max="1000" className="w-full" />
            </div>
            <div className="mb-4">
                <label className="block text-sm">Bicycle Size</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="e.g., Medium" />
            </div>
            <div className="mb-4">
                <label className="block text-sm">Color</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="e.g., Red" />
            </div>
            <div className="mb-4">
                <label className="block text-sm">Brand</label>
                <select className="w-full p-2 border rounded">
                    <option value="">Select a brand</option>
                    <option value="Brand A">Brand A</option>
                    <option value="Brand B">Brand B</option>
                </select>
            </div>
        </>
    );
}
