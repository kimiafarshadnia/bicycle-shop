'use client'
import Link from "next/link";
import { Product } from "Types";

type Props = {
    product: Product;
}

export const ProductCard = ({ product }: Props) => {
    const defaultImage = '/images/default-image-bicycle.jpeg';
   
    return (
        <div className="max-w-full h-full flex flex-col justify-between gap-3 cursor-pointer">
            <Link href={`/products/${product.id}`} className="flex items-center justify-center">
                <img src={product.images ? product.images[0] : defaultImage} alt={product.title} className="h-[200px] max-w-[300px] flex-shrink-0" />
            </Link>

            <Link href={`/products/${product.id}`} className="text-sm md:text-base font-semibold hover:text-primary text-left">{product.title}</Link>
            <div className="flex items-center gap-2 text-xs md:text-sm hover:text-gray-400 font-bold">
                <span>{product.price}</span>
                <span>QAR</span>
            </div>
        </div>
    );
};
