'use client'
import { Icon } from 'Components';
import { useProductDetail } from 'Hooks';
import { useCartContext } from 'Context';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

type CartProps = {
    id: number;
    quantity: number;
    size?: number;
    color?: string;
}

export const ShoppingCartItem = ({ id, quantity, size, color }: CartProps) => {

    const { product } = useProductDetail(id);
    const { updateItemQuantity, decreaseItem, removeItem } = useCartContext()
    const defaultImage = '/images/default-image-bicycle.jpeg';

    if (product == null) return null
    console.log(size)
    return (
        <div className='shadow rounded p-4'>
            <div className='flex md:items-center justify-between'>
                <div className='flex flex-col md:flex-row md:items-center gap-4'>
                    <div className="flex items-center justify-center flex-shrink-0">
                        <img src={product.images ? product.images[0] : defaultImage} alt={product.title} className="h-[100px] w-[100px] flex-shrink-0" />
                    </div>
                    <span className='text-xs sm:text-sm font-bold'>{product.title}</span>
                </div>
                <button type='button' className='h-fit' onClick={() => removeItem(product.id)}>
                    <Icon iconName={faTrashCan} className="text-red-600" />
                </button>
            </div>
            <div className='flex items-center justify-between mt-3'>
                <div className='flex items-center center gap-6'>
                    <button type='button' className='flex items-center justify-center font-semibold' onClick={() => updateItemQuantity(product.id, quantity + 1)}>
                        <Icon iconName={faChevronUp} size='lg' className="text-green-600" />
                    </button>
                    <span className='font-semibold'>{quantity}</span>
                    <button type='button' className='flex items-center justify-center font-semibold' onClick={() => decreaseItem(product.id)}>
                        <Icon iconName={faChevronDown} size='lg' className="text-red-500" />
                    </button>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm font-semibold">
                    <span>QAR</span>
                    <span>123123{product.price}</span>
                </div>
                <span  className='text-bold text-red-700'>{size && size}</span>
                <span  className='text-bold text-red-700'>{color && color}</span>
            </div>
        </div>
    );
};