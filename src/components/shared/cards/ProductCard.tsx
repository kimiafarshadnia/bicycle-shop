'use client'
import { useState } from "react";
import { ProductDetail } from "Types";

type Props = {
    product: ProductDetail;
}

export const ProductCard = ({ product }: Props) => {
    const [currentImage, setCurrentImage] = useState(product.images[0]);

    return (
        <div className="border p-4 rounded shadow hover:shadow-lg transition-shadow">
            <div className="relative">
                <img
                    src={currentImage}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded"
                    onMouseEnter={() => setCurrentImage(product.images[1])}
                    onMouseLeave={() => setCurrentImage(product.images[0])}
                />
            </div>
            <div className="mt-2">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-500">{product.brand}</p>
                <p className="text-xl font-bold">${product.price}</p>
            </div>
        </div>
    );
}  