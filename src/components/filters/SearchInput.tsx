'use client';

import { Icon } from 'Components';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useSearchContext } from 'Context';

export const SearchInput = () => {
  const { searchQuery, setSearchQuery } = useSearchContext();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);  // Update the search query in context
  };

  return (
    <div className='w-full items-end justify-end'>
      <div className="flex w-full lg:w-[220px] border rounded-lg bg-gray-50">
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search products..."
        />
        {/* <button
          onClick={handleSearchSubmit}
          className=" pr-2"
        >
          <Icon iconName={faMagnifyingGlass} size='lg' className='text-primary' />
        </button> */}
      </div>
    </div>
  );
}
