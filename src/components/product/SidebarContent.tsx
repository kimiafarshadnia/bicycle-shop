export const SidebarContent = () => {
    return (
        <form>
            <div className="flex items-center justify-between mb-10">
                <span className='font-semibold text-base capitalize'>filters</span>
                <button type="reset" className="text-base bg-transparent border-0 text-primary font-semibold cursor-pointer capitalize">reset filters</button>
            </div>
            <div className="mb-4">
                <label className="block text-sm">Price Range</label>
                <input type="range" min="0" max="1000" className="w-full" />
            </div>
            <div className="mb-4">
                <label className="block text-sm">Bicycle Size</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="e.g., Medium" />
            </div>
            <div className="mb-4">
                <label className="block text-sm">Color</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="e.g., Red" />
            </div>
            <div className="mb-4">
                <label className="block text-sm">Brand</label>
                <select className="w-full p-2 border rounded">
                    <option value="">Select a brand</option>
                    <option value="Brand A">Brand A</option>
                    <option value="Brand B">Brand B</option>
                </select>
            </div>
        </form>
    );
}