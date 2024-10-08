'use client'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

const Cards = ({src, text, className4=""}) => {

    const [isInView, setIsInView ] = useState(false);
    const cardRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entries]) => {
                setIsInView(entries.isIntersecting)
            },
            {
                rootMargin:"100px"
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
        
            <div ref={cardRef} className={`relative overflow-hidden w-full h-[80vh] transition-all duration-[2000ms] delay-500 ${isInView ? "opacity-100" : "opacity-0"} `}>
                <Image className='w-full h-full object-cover absolute opacity-50 transition duration-700 hover:opacity-20' src={src} width={500} height={500} alt='reggef' />
                <div className={`flex justify-center items-center w-full h-full bg-blue-800 object-cover  transition duration-700 ${className4}`} ><h2 className='text-white text-center font-bold text-3xl z-10 '>{text}</h2> </div>
            </div>
        
    )
}

export default Cards