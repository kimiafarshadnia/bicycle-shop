export const ProductCardSkeleton = () => {
  return (
    <div className="p-4 animate-pulse">
      <div className="w-full h-[200px] bg-gray-300 rounded"></div>
      <div className="mt-2">
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
}
