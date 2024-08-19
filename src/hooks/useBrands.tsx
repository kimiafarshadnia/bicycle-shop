import axios from "axios";
import { Brand } from "Types";
import { useState, useEffect } from 'react';

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
