'use client'
import { useState, useEffect, useRef} from "react"
import { Deutschlander, HelvDisplayExBold, ResolveBlack, ResolveLight, ResolveThin } from "@/app/fonts/Fonts";


const TitleBanner = () => {
    const [isInView, setIsInview] = useState(false);
    const titleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entries]) => {
                setIsInview(entries.isIntersecting)
            }
        )
        if(titleRef.current) {
            observer.observe(titleRef.current)
        }
        return() => {
            if(titleRef.current) {
                observer.unobserve(titleRef.current)
            }
        }
    },[])

  return (
    <div className="overflow-hidden pt-[3rem] z-50  w-fit  justify-start flex ">
        <h2 ref={titleRef} className={`text-[3em] leading-[1em] sm:leading-0 sm:text-[7em] tracking-[0.01em] text-white transition-all duration-[1200ms] delay-200 font-bold ease-[cubic-bezier(0.25, 1, 0.5, 1)] ${ResolveThin.className} ${isInView ? "translate-y-0 opacity-100 " : "translate-y-[5vh] opacity-0"}  `} >CHRISTIAN JOHNS</h2>
    </div>
  )
}

export default TitleBanner