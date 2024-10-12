'use client'
import Image from "next/image";
import { useState, useEffect, useRef} from "react"

const ImageTopPage = ({src}) => {

    const [isInView, setIsInview] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entries]) => {
                setIsInview(entries.isIntersecting)
            }
        )
        if(imageRef.current) {
            observer.observe(imageRef.current)
        }
        return() => {
            if(imageRef.current) {
                observer.unobserve(imageRef.current)
            }
        }
    },[])

  return (
    <Image ref={imageRef} className={` transition-all duration-[1200ms] delay-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)]  ${isInView ? "opacity-100 translate-y-[0rem] scale-[100%]" : "opacity-0 translate-y-[2rem] scale-[120%]"} `} src={src} width={500} height={500} alt="foto home"/>
  )
}

export default ImageTopPage