// context/BrandContext.tsx
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { Brand } from 'Types';

interface BrandContextProps {
  brands: Brand[];
  selectedBrand: number;
  setSelectedBrand: (brandId: number) => void;
  loading: boolean;
  error: string | null;
}

// Create a context with default values
const BrandContext = createContext<BrandContextProps>({
  brands: [],
  selectedBrand: 0,
  setSelectedBrand: () => {},
  loading: false,
  error: null,
});

// Custom hook to use the BrandContext
export const useBrandContext = () => useContext(BrandContext);

// BrandProvider component to wrap around the part of the app that needs access to this context
export const BrandProvider = ({ children }: { children: ReactNode }) => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch brands from API
    const fetchBrands = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get('https://gtrbicycle.qa/api/shop/v1/product_brands');
        setBrands(response.data.data.items);
      } catch (err) {
        setError('Failed to fetch brands');
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  return (
    <BrandContext.Provider value={{ brands, selectedBrand, setSelectedBrand, loading, error }}>
      {children}
    </BrandContext.Provider>
  );
};
