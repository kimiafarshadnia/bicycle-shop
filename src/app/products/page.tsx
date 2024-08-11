'use client'
import { ProductDetail } from 'Types';
import { useEffect, useState } from 'react';
import { Sidebar, ProductCardSkeleton, ProductCard } from 'Components';

export default function Products() {
  const [products, setProducts] = useState<ProductDetail[]>([]);
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const res = await fetch('/api/products');
//       const data = await res.json();
//       setProducts(data);
//       setLoading(false);
//     };

//     fetchProducts();
//   }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {loading
            ? Array(6).fill(null).map((_, i) => <ProductCardSkeleton key={i} />)
            : products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </div>
  );
}
