'use client'
import Link from "next/link";
import { useState, useEffect, useRef } from "react"

const Redes = () => {
    const [isInView, setIsInView] = useState(false);
    const cardRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entries]) => {
                setIsInView(entries.isIntersecting)
            },
            {
                rootMargin: "100px"
            }
        )
        if (cardRef.current) {
            observer.observe(cardRef.current)
        }
        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current)
            }
        }
    }, [])

    return (
        <div ref={cardRef} className=" w-full flex justify-end items-center pt-10 pr-5 gap-2 " >
            <Link href="/" className="w-[30px] flex items-center overflow-hidden">
                <svg className ={  `transition duration-[1200ms] ${isInView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}  `} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="#848484" d="M7.03.08a8.76 8.76 0 0 0-2.91.57A5.7 5.7 0 0 0 2 2.04 5.88 5.88 0 0 0 .62 4.16c-.3.77-.5 1.64-.56 2.92A84.6 84.6 0 0 0 0 12.02c0 3.26.02 3.67.08 4.95.06 1.28.27 2.15.57 2.91.3.79.72 1.46 1.39 2.12a5.87 5.87 0 0 0 2.12 1.38c.77.3 1.64.5 2.92.56 1.27.05 1.69.06 4.94.06 3.26 0 3.67-.02 4.95-.08a8.78 8.78 0 0 0 2.91-.57c.79-.3 1.46-.72 2.12-1.38a5.88 5.88 0 0 0 1.38-2.13c.3-.77.5-1.64.56-2.92.05-1.28.06-1.68.06-4.94 0-3.26-.02-3.67-.08-4.95a8.76 8.76 0 0 0-.57-2.91A5.9 5.9 0 0 0 21.97 2 5.86 5.86 0 0 0 19.84.62c-.77-.3-1.64-.5-2.92-.56A85.49 85.49 0 0 0 11.98 0C8.72 0 8.3.02 7.03.08m.14 21.7a6.66 6.66 0 0 1-2.23-.41 3.74 3.74 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.37 6.65 6.65 0 0 1-.42-2.23 84.83 84.83 0 0 1-.08-4.85c0-3.2 0-3.58.06-4.85.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38a3.7 3.7 0 0 1 1.38-.9 6.65 6.65 0 0 1 2.22-.42c1.27-.06 1.65-.07 4.85-.07 3.2-.01 3.58 0 4.85.06 1.17.05 1.8.24 2.23.4.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.36 1.05.42 2.22.06 1.27.07 1.65.08 4.85 0 3.2 0 3.59-.06 4.85a6.66 6.66 0 0 1-.41 2.23c-.22.56-.48.96-.9 1.38a3.7 3.7 0 0 1-1.38.9c-.42.17-1.05.36-2.22.42a84.9 84.9 0 0 1-4.85.08c-3.2 0-3.58 0-4.85-.06m9.78-16.2a1.44 1.44 0 1 0 1.44-1.44 1.44 1.44 0 0 0-1.44 1.45M5.84 12a6.16 6.16 0 1 0 12.32 0 6.16 6.16 0 0 0-12.32 0M8 12a4 4 0 1 1 4 4 4 4 0 0 1-4-4" />
                </svg>
            </Link>
            <Link href="/" className="w-[30px] overflow-hidden">
                <svg className ={  `transition duration-[1300ms] delay-100 ${isInView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}  `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1239 1279">
                    <path fill="#848484" d="M23.98 1278.68h239.75V391.6H23.98v887.08ZM143.85 0A143.25 143.25 0 0 0 0 143.85 143.25 143.25 0 0 0 143.85 287.7 143.25 143.25 0 0 0 287.7 143.85 143.25 143.25 0 0 0 143.85 0Zm527.46 527.46V391.6H431.56v887.08H671.3V823.15c0-255.73 327.66-271.72 327.66 0v455.53h239.75V735.24c0-431.55-455.53-415.57-567.41-207.78Z" />
                </svg>
            </Link>
        </div>
    )
}

export default Redes