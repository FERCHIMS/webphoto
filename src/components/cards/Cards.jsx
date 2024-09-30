'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Cards = ({src, text, className4=""}) => {

    const [isScrolled, setIsScrolled ] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(scrollY > 0) {
                setIsScrolled(true)
            }else {
                setIsScrolled(false)
            }
        }
        addEventListener("scroll", handleScroll)
        return () => {
            removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        
            <div className={`relative overflow-hidden w-full h-[80vh] transition-all duration-[2000ms] delay-500 ${isScrolled ? "opacity-100" : "opacity-0"} `}>
                <Image className='w-full h-full object-cover absolute opacity-50 transition duration-700 hover:opacity-20' src={src} width={500} height={500} alt='reggef' />
                <div className={`flex justify-center items-center w-full h-full  object-cover  transition duration-700 ${className4}`} ><h2 className='text-white font-bold text-3xl z-10 '>{text}</h2> </div>
            </div>
        
    )
}

export default Cards