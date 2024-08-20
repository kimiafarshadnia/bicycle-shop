'use client';

import { Icon } from 'Components';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const searchQuery = searchParams.get('search_title') || '';
    setInputValue(searchQuery);
  }, [searchParams]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearchSubmit = () => {
    router.push(`/products/?search_title=${inputValue}`);
  };

  return (
    <div className='w-full items-end justify-end'>
      <div className="flex w-full lg:w-[220px] border rounded-lg bg-gray-50">
        <input
          type="text"
          value={inputValue}
          onChange={handleSearchChange}
          placeholder="Search products..."
          className="w-full p-2  border-gray-300 rounded-l-lg"
        />
        <button
          onClick={handleSearchSubmit}
          className=" pr-2"
        >
          <Icon iconName={faMagnifyingGlass} size='lg' className='text-primary' />
        </button>
      </div>
    </div>
  );
}
