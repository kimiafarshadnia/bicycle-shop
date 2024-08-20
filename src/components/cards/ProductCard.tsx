'use client'
import { Product } from "Types";
import { useRouter } from 'next/navigation';

type Props = {
    product: Product;
}

export const ProductCard = ({ product }: Props) => {
    const router = useRouter();
    const defaultImage = '/images/default-image-bicycle.jpeg';
    const handleProductClick = (id: number) => {
        router.push(`/products/${id}`);
      };
    return (
        <div className="max-w-full h-full flex flex-col justify-between gap-4 cursor-pointer">
            <div className="flex items-center justify-center"onClick={() => handleProductClick(product.id)}>
                <img src={product.images ? product.images[0] : defaultImage} alt={product.title} className="h-[200px] max-w-[300px] flex-shrink-0" />
            </div>

            <h2 className="text-sm md:text-base font-semibold hover:text-primary" onClick={() => handleProductClick(product.id)}>{product.title}</h2>
            <div className="flex items-center gap-2 text-xs md:text-sm hover:text-gray-400 font-bold">
                <span>{product.price}</span>
                <span>QAR</span>
            </div>
        </div>
    );
};
