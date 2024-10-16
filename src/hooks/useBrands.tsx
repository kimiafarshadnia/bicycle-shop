'use client'
import axios from "axios";
import { Brand, Product, ApiResponse } from "Types";
import { useState, useEffect } from 'react';

interface ProductsList {
    products: Product[];
    loading: boolean;
    error: string | null;
    pagination: {
      currentPage: number;
      totalPages: number;
    };
    setPage: (page: number) => void;
  }
interface BrandResponse {
    data: {
        items: Brand[];
    };
}

export const useBrandsList = () => {
    const [brands, setBrands] = useState<Brand[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBrands = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get<BrandResponse>('https://gtrbicycle.qa/api/shop/v1/product_brands');
                setBrands(response.data.data.items);
            } catch (err) {
                setError('Failed to fetch brands');
            } finally {
                setLoading(false);
            }
        };

        fetchBrands();
    }, []);

    return { brands, loading, error };
};

// const selectedBrand = 61;
// export const useBrandProducts = (selectedBrand?: number): ProductsList => {
//     console.log('Selected Brand:', selectedBrand);
//     const [products, setProducts] = useState<Product[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);
//     console.log('products:', products);
//     useEffect(() => {
//       if (!selectedBrand) return; // Exit if no brand is selected
  
//       const fetchBrandProducts = async () => {
//         setLoading(true);
//         setError(null);
  
//         try {
//           const response = await axios.get<ApiResponse>('https://gtrbicycle.qa/api/shop/v1/products', {
//             params: {
//               search_brand: selectedBrand, // API request with brand filter
//             },
//           });
  
//           setProducts(response.data.data.items); // Set products from the response
//         } catch (err) {
//           setError('Failed to fetch products for the selected brand.');
//         } finally {
//           setLoading(false);
//         }
//       };
  
//       fetchBrandProducts();
//     }, [selectedBrand]);
  
//     return { products, loading, error };
//   };