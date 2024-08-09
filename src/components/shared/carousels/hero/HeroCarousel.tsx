'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Images from '../../../../data/heroImages.json';
type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

export const HeroCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {Images.map((image) => (
            <div className="embla__slide" key={image.id}>
              <div className="embla__slide__number">
                <img src={image.url} alt="bicycle" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}