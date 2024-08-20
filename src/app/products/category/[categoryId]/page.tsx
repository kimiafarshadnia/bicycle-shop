'use client';

import { Product } from 'Types';
import { useSearch } from 'Context';
import { useProductsList } from 'Hooks';
import { Pagination } from '@mui/material';
import { Sidebar, ProductCardSkeleton, ProductCard, SearchInput, SideBarDerawer } from 'Components';
import { useSearchParams } from 'next/navigation';

interface Props {
  params: {
    categoryId: number;
  };
}

export default function Products({ params }: Props) {
  const { categoryId } = params;
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search_title') || '';
  const { products, loading, error, pagination, setPage } = useProductsList(1, categoryId, searchQuery);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  console.log(searchQuery)
  return (
    <main className="container mx-auto px-5 md:px-0 min-h-screen py-10 md:py-24 flex flex-col md:flex-row gap-6">
      <Sidebar />
      <div className="flex-1">
        <div className='flex items-center justify-between lg:justify-normal lg:items-baseline gap-4 lg:gap-0'>
          <SearchInput />
          <SideBarDerawer />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {loading
            ? Array(15)
              .fill(null)
              .map((_, i) => <ProductCardSkeleton key={i} />)
            : products.length === 0 ? (
              <div className="flex justify-center items-center text-xl font-semibold">
                No products found.
              </div>
            )
              : products.map((product: Product) => (
                <div
                  key={product.id}
                  className="p-4 cursor-pointer"
                >
                  <ProductCard product={product} />
                </div>
              ))}
        </div>
        <div className="flex justify-center mt-6">
          <Pagination
            count={pagination.totalPages}
            page={pagination.currentPage}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </main>
  );
}
