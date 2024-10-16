'use client'
import Link from 'next/link';
import { useProductsList } from 'Hooks';
import { useCartContext } from 'Context';
import { ShoppingCartItem } from 'Components';

type Props = {
    onClose : ()=>void
}

export const ShoppingCardContent = ({onClose}: Props) => {
    const { products } = useProductsList();
    const { cartItems } = useCartContext()
    
    return (
        <div className='h-full flex flex-col justify-between p-4'>
            {cartItems ?
                (
                    <>
                        <div className='flex flex-col gap-6'>
                            <h2 className='text-xl md:text-2xl font-bold'>shopping cart</h2>
                            <div className='flex flex-col gap-4'>
                                <div className='d-flex flex-column gap-6 align-items-center'>
                                    {cartItems.map((item) => (
                                        <div key={item.id}>
                                            <ShoppingCartItem id={item.id} quantity={item.quantity} size={item.size}
                                                color={item.color} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center justify-between font-semibold text-lg capitalize'>
                                <span>Subtotal</span> {' '}
                                <span>
                                    {cartItems.reduce((total, currentItem) => {
                                        const product = products.find((item) => item.id === currentItem.id)

                                        return total + (product?.price || 0) * currentItem.quantity
                                    }, 0)}
                                </span>
                            </div>

                            <Link href={'/cart'} className='w-full h-fit text-center px-5 py-2 rounded-full text-white bg-primary duration-300 hover:border-2 hover:border-primary hover:text-primary hover:bg-white capitalize'>checkout</Link>

                            <button type='button' onClick={onClose} className='w-full h-fit text-center px-5 py-2 rounded-full text-white bg-primary duration-300 hover:border-2 hover:border-primary hover:text-primary hover:bg-white capitalize'>keep shopping</button>
                        </div>
                    </>
                ) : (
                    <div>
                        there is no product in your cart
                    </div>
                )
            }
        </div>
    );
}


