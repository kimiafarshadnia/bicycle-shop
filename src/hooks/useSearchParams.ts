'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Define the shape of the search parameters
interface QueryParams {
  category?: string;
  brand?: string;
  priceRange?: string;
  q?: string;
  page?: string;
}

export const useSearchParams = () => {
  const router = useRouter();
  const [query, setQuery] = useState<QueryParams>({});

  useEffect(() => {
    // Parse the URL's query parameters and set them in state
    const { query } = router;
    setQuery(query as QueryParams);
  }, [router.query]);

  // Function to clear specific search parameters
  const clearSearchParams = (paramsToClear: string[]) => {
    const newQuery = { ...query };

    // paramsToClear.forEach(param => {
    //   delete newQuery[param];
    // });

    // Update the URL with the new query parameters
    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
  };

  // Function to set a new search parameter
  const setSearchParam = (key: string, value: string) => {
    const newQuery = { ...query, [key]: value };

    // Update the URL with the new query parameters
    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
  };

  return {
    query,
    clearSearchParams,
    setSearchParam,
  };
};
