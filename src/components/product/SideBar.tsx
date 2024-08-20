'use client'
import { SidebarContent } from 'Components';

export const Sidebar = () => {
    return (
        <div className="hidden lg:block p-4 h-full w-64 bg-gray-50 rounded-lg">
            <SidebarContent />
        </div>
    );
}


