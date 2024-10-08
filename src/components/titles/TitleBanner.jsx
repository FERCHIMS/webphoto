'use client'
import { useState, useEffect, useRef} from "react"
import { Deutschlander, HelvDisplayExBold, ResolveBlack, ResolveLight, ResolveThin } from "@/app/fonts/Fonts";
/* import Redes from "../redes/Redes"; */


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
    <div className="overflow-hidden pt-[3rem] z-50  w-fit flex justify-start  ">
        <h2 ref={titleRef} className={`text-[3em] w-full leading-[1em] sm:leading-0 sm:text-[7em] tracking-[0.01em] text-[#848484] transition-all duration-[1200ms] delay-200 font-bold ease-[cubic-bezier(0.25, 1, 0.5, 1)] ${ResolveThin.className} ${isInView ? "translate-y-0 opacity-100 " : "translate-y-[5vh] opacity-0"}  `} >CHRISTIAN JOHNS</h2>
        {/* <Redes /> */}
    </div>
  )
}

export default TitleBanner