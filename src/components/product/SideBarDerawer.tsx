'use client'
import { useState } from 'react';
import { Icon, SidebarContent } from 'Components';
import { Drawer, IconButton } from '@mui/material';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

export const SideBarDerawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <div className="lg:hidden">
            <button
                onClick={() => setIsDrawerOpen(true)} className='border rounded-lg'
            >
                <IconButton>
                    <Icon iconName={faSliders} />
                </IconButton>
            </button>

            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                classes={{ paper: 'w-64 p-4' }}
            >
                <SidebarContent />
            </Drawer>
        </div>
    );
}


