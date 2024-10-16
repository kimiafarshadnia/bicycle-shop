'use client';

import { useState, useEffect } from "react";
import { Product } from "Types";
import { useProductsList } from "Hooks";
import { Pagination } from '@mui/material';
import { ProductCard, ProductCardSkeleton, NoContent } from "Components";
import { useBrandContext } from "@/src/context";

type Props = {
  categoryId: number;
};

export const ProductList = ({ categoryId }: Props) => {
  const { selectedBrand } = useBrandContext(); // Get selected brand from context

  const [page, setPage] = useState(1);

  // Fetch products based on the current page, category, and brand selection
  const { products, loading, error, pagination } = useProductsList(page, categoryId, undefined, selectedBrand !== null ? selectedBrand : undefined);

  // Handle page changes
  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center mt-10">
        {loading
          ? Array(15)
            .fill(null)
            .map((_, i) => <ProductCardSkeleton key={i} />)
          : products.length === 0 ? (
            <NoContent />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {products.map((product: Product) => (
                <div key={product.id} className="p-4 cursor-pointer">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
      </div>
      <div className="flex justify-center mt-6">
        <Pagination
          count={pagination.totalPages}
          page={pagination.currentPage}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};
