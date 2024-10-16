'use client';

import { useProductsList } from 'Hooks';
import { ProductList, SearchInput, SideBarDerawer, SidebarContent } from 'Components';

interface Props {
  params: {
    categoryId: number;
  };
}

export default function Products({ params }: Props) {
  const { categoryId } = params;
 
  return (
    <main className="container mx-auto px-5 md:px-2 min-h-screen py-10 md:py-24 flex flex-col md:flex-row gap-6">
      <SidebarContent />
      <div className="flex-1">
        <div className='flex items-center justify-between lg:justify-normal lg:items-baseline gap-4 lg:gap-0'>
          <SearchInput />
          <SideBarDerawer />
        </div>
        <ProductList categoryId={categoryId} />
      </div>
    </main>
  );
}