'use client'
import { Icon } from 'Components';
import React, { useState } from 'react';
import { useProductDetail } from 'Hooks';
import { useCartContext } from "Context";
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

type ProductDetailPageProps = {
  params: {
    id: number;
  };
};

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = params;
  const { product, loading, error } = useProductDetail(id);
  const { getItemQuantity, addItem, updateItemQuantity, removeItem } = useCartContext();
  const quantity = product?.id ? getItemQuantity(product.id) : 0;
  const [selectedSize, setSelectedSize] = useState<number>();
  const [selectedColor, setSelectedColor] = useState<string>();
 
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found</p>;

  const handleAddToCart = () => {
    if (product && selectedSize !== undefined && selectedColor !== undefined) {
      addItem(product.id, selectedSize, selectedColor);
    } else {
      alert('Please select both a size and a color before adding to cart.');
    }
  };

  return (
    <main className="flex min-h-screen flex-col py-24">
      <div className="container mx-auto p-4 flex flex-col gap-8">
        {
          !loading ? (
            <>
              <div className='flex flex-col md:flex-row md:justify-between gap-6 md:gap-10'>
                <div className='basis-2/4 flex flex-col gap-6'>
                  images
                </div>
                <div className='basis-2/4 flex flex-col gap-5'>
                  <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                  <span className="text-sm bg-gray-500 text-white w-fit rounded-full px-3">{product.brand.title}</span>
                  <div className="flex items-center gap-2 text-xs md:text-sm hover:text-gray-400 font-bold">
                    <h2 className='tyext-base text-gray-700'>{product.price}</h2>
                    <span>QAR</span>
                  </div>
                  <div className='flex flex-col gap-4'>
                    <span className='text-sm sm:text-base capitalize'>size</span>
                    <div className='flex items-center gap-4'>
                      {[45, 46, 47].map(size => (
                        <div
                          key={size}
                          className={`w-fit border py-2 px-3 text-center cursor-pointer ${selectedSize === size ? 'bg-gray-300' : ''}`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='flex flex-col gap-4'>
                    <span className='text-sm sm:text-base capitalize'>color</span>
                    <div className='flex items-center gap-4'>
                      {['Red', 'Blue', 'Green'].map(color => (
                        <div
                          key={color}
                          className={`w-8 h-8 border rounded-full p-2 cursor-pointer ${selectedColor === color ? 'border-gray-300' : ''}`}
                          style={{ backgroundColor: color.toLowerCase() }}
                          onClick={() => setSelectedColor(color)}
                        />
                      ))}
                    </div>
                  </div>
                  <div className='flex flex-col-reverse gap-6'>
                        <button className='w-fit h-fit text-center px-5 py-2 rounded-full gap-4 text-white bg-primary duration-300 flex items-center justify-between' onClick={handleAddToCart}>
                          Add to Cart
                          <Icon iconName={faCartPlus} size='lg' className="text-white" />
                        </button>
                     
                        <div className='flex items-center gap-6'>
                          <div className='flex items-center justify-center gap-6'>
                            <span className='text-lg font-bold capitalize'>quantity :</span>
                            <button type='button' className='flex items-center justify-center font-semibold' onClick={() => updateItemQuantity(product.id, quantity + 1)}>
                              <Icon iconName={faChevronUp} size='lg' className="text-green-600" />
                            </button>
                            <span className='font-semibold'>{quantity}</span>
                            <button type='button' className='flex items-center justify-center font-semibold' onClick={() => updateItemQuantity(product.id, quantity - 1)}>
                              <Icon iconName={faChevronDown} size='lg' className="text-red-500" />
                            </button>
                          </div>
                          <button type='button' className='h-fit' onClick={() => removeItem(product.id)}>
                            <Icon iconName={faTrashCan} size='lg' className="text-red-600" />
                          </button>
                        </div>
                  </div>
                </div>
              </div>
              <div>
                <p>The new JAVA Fuoco Top uses the new generation Shimano 105 R7120 full groupset is an aerodynamics series road bike， It has a carbon Integrated Handlebar and JAVA Decaf carbon wheelset ready, every inch of this bike is designed to provide aero gains across the board – wind tunnel-optimized tube profiles


                  UCI-certified and geometric design for long-distance endurance and comfort, this frame suits general sports and racing.

                  The frame’s dynamic lines express the bike’s enhanced aerodynamics and agile handling. Its carefully crafted details embody an aero road bike that unites all its functions and features into a perfect whole. The clear, dynamic form speaks for itself.</p>
              </div>
            </>
          ) :
            (
              <p>Loading...</p>
            )
        }
      </div>
    </main>
  );
};
