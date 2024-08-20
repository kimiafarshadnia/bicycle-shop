import axios from 'axios';
import { Product, ApiResponse, ProductDetail, BrandResponse } from 'Types';
import { useEffect, useState } from 'react';


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

export const useProductsList = (initialPage: number = 1, searchCategoryId?: number, searchQuery?: string): ProductsList => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(initialPage);
  const [pagination, setPagination] = useState({
    currentPage: initialPage,
    totalPages: 1,
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get<ApiResponse>('https://gtrbicycle.qa/api/shop/v1/products', {
          params: {
            page,
            search_category: searchCategoryId,
            search_title: searchQuery

          },
        });
        setProducts(response.data.data.items);
        setPagination({
          currentPage: response.data.meta.pagination.current_page,
          totalPages: response.data.meta.pagination.total_pages,
        });
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };


    fetchData();
  }, [page, searchCategoryId, searchQuery]);

  return { products, loading, error, pagination, setPage };
};

export const useProductDetail = (id: number) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get<ProductDetail>(`https://gtrbicycle.qa/api/shop/v1/products/${id}`);
        setProduct(response.data.data.item);
      } catch (err) {
        setError('Failed to fetch product details');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProductDetail();
    }
  }, [id]);

  return { product, loading, error };
};

export const useLatestProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get<{ data: { items: Product[] } }>(
          'https://gtrbicycle.qa/api/shop/v1/products',
          {
            params: {
              limit: 4,
              sort: 'desc',
            },
          }
        );
        setProducts(response.data.data.items);
      } catch (err) {
        setError('Failed to fetch latest products');
      } finally {
        setLoading(false);
      }
    };

    fetchLatestProducts();
  }, []);

  return { products, loading, error };
};
