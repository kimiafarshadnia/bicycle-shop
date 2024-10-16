import { BrandSelect } from "Components";
import { useBrandContext } from 'Context';

export const SidebarContent = () => {
  const { setSelectedBrand } = useBrandContext(); 

  const handleResetFilters = () => {
    setSelectedBrand(0);
   
  };

  return (
    <form className='bg-gray-100 p-5 rounded-lg lg:w-[300px]'>
      <div className="flex items-center justify-between mb-10">
        <span className='font-semibold text-base capitalize'>filters</span>
        <button 
          type="button" 
          onClick={handleResetFilters} 
          className="text-base bg-transparent border-0 text-primary font-semibold cursor-pointer capitalize"
        >
          reset filters
        </button>
      </div>
      <BrandSelect />
    </form>
  );
};
