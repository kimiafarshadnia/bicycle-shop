import React from 'react';

interface SearchContainerProps {
  searchType: string;
  title: string;
  backgroundImage: string;
  result: any;
  isFetching: boolean;
  filters: React.ReactNode;
  children: React.ReactNode;
}

export const SearchContainer: React.FC<SearchContainerProps> = ({
  searchType,
  title,
  backgroundImage,
  result,
  isFetching,
  filters,
  children,
}) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div
        className="bg-cover bg-center h-60 flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto py-10">
        <div className="flex">
          {/* Filters Sidebar */}
          <aside className="w-1/4 p-4 bg-white border rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            {filters}
          </aside>

          {/* Products List Section */}
          <section className="flex-1 p-4 ml-8 bg-white border rounded-md shadow-md">
            {/* Search Summary */}
            <div className="mb-6">
              <h3 className="text-lg font-medium">
                {isFetching
                  ? `Loading ${searchType}...`
                  : `${result?.items?.length ?? 0} ${searchType} found`}
              </h3>
            </div>

            {/* Product List or Children Components */}
            <div className="flex flex-wrap gap-6">
              {children}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
