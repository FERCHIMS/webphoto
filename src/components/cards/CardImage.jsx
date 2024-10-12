'use client'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

const CardImage = ({src, width, height, alt, className=""}) => {
    const [isInView, setIsInView ] = useState(false);
    const cardRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entries]) => {
                setIsInView(entries.isIntersecting)
            },
            {
                threshold: 0.5
            }
        )
        if(cardRef.current) {
            observer.observe(cardRef.current)
        }
        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current)
            }
        }
    }, [])

  return (
    <div ref={cardRef} className={`w-full h-full transition-all duration-[1800ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)] ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-[95%]"} `}>
        <Image className={className}  src={src} width={width} height={height} alt={alt} />
    </div>
  )
}

export default CardImage