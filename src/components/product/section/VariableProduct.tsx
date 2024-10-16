'use client'
import { Variant } from "Types";

type Props = {
  variants: Variant[];
  onVariantSelect: (id: number) => void;

}
export const VariableProduct = ({ variants, onVariantSelect }: Props) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = Number(event.target.value);
    onVariantSelect(selectedId);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm">Select Option</label>
      <select className="w-[200px] p-2 border rounded" onChange={handleSelectChange}>
        {variants.map((variant: Variant) => (
          <option key={variant.id} value={variant.id}>
            {variant.title}
          </option>
        ))}
      </select>
    </div>
  );
}


