'use client'
import React, { useState } from 'react';
import { useProductDetail } from 'Hooks';
import { useCartContext } from "Context";
import { Icon, ProductImageGallery, SimpleProduct, VariableProduct, TagsProduct } from 'Components';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

type ProductDetailPageProps = {
  params: {
    id: number;
  };
};

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = params;
  const { product, loading, error } = useProductDetail(id)
  const [selectedVariantId, setSelectedVariantId] = useState<number | null>(null);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found</p>;


  const handleVariantSelect = (id: number) => {
    setSelectedVariantId(id);
    console.log(`Selected variant ID: ${id}`);
  };

  const staticImages = [
    '/images/about-1.jpeg',
    '/images/about-2.jpeg',
    '/images/about-3.jpeg',
    '/images/about-1.jpeg'
  ];

  return (
    <main className="flex min-h-screen flex-col py-16">
      <div className="container mx-auto p-4 flex flex-col gap-8">
        {
          !loading ? (
            <>
              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
              <div className='flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-10'>

                <div className='w-full lg:w-[600px] xl:w- flex flex-col gap-6'>
                  <ProductImageGallery images={staticImages} />
                </div>

                <div className='basis-2/4 flex flex-col gap-5'>
                  <span className="text-sm bg-gray-500 text-white w-fit rounded-full px-3">{product.brand.title}</span>
                  <div className="flex items-center gap-2 text-xs md:text-sm hover:text-gray-400 font-bold">
                    <h2 className='tyext-base text-gray-700'>{product.price}</h2>
                    <span>QAR</span>
                  </div>
                  {
                    product.type === 'simple' ? (
                      <SimpleProduct features={product.features} />
                    ) : (
                      <VariableProduct variants={product.variants} onVariantSelect={handleVariantSelect} />
                    )
                  }
                  <div className='flex flex-col-reverse gap-6'>
                    <button className='w-fit h-fit text-center px-5 py-2 rounded-full gap-4 text-white bg-primary duration-300 flex items-center justify-between'>
                      Add to Cart
                      <Icon iconName={faCartPlus} size='lg' className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
              {product.description &&
                <div className='flex flex-col gap-6'>
                  <p>{product.description}</p>

                  {product.sku !== null && (<div className='flex flex-row gap-3'>
                    <h4 className='font-bold'>sku:</h4>
                    <span>{product.sku}</span>
                  </div>)}
                  {product.tags && (<TagsProduct tags={product.tags} />)}

                </div>
              }
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
