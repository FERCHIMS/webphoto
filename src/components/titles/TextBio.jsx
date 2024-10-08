'use client'
import { useState, useRef, useEffect } from 'react'
import { ResolveLight, ResolveThin } from '@/app/fonts/Fonts'
import DropDown from '../dropdown/DropDown'
import Redes from '../redes/Redes'


const TextBio = () => {
  const [isInView, setIsInView] = useState(false);
  const pRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entries]) => {
        setIsInView(entries.isIntersecting)
      },
      {
        rootMargin: "-100px"
      }
    )
    if (pRef.current) {
      observer.observe(pRef.current)
    }
    return () => {
      if (pRef.current) {
        observer.unobserve(pRef.current)
      }
    }
  }, [])

  return (


    <div ref={pRef} className={`flex flex-col gap-4 max-w-[90vw] pr-5 sm:pr-0 z-50 sm:max-w-[30vw] `} >
      <p className={`text-white pt-0 sm:pt-10 text-[0.9em] sm:text-[1.1em] w-auto transition duration-[1200ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)] ${ResolveThin.className} ${isInView ? "translate-x-0 opacity-100" : "translate-x-[20vh] opacity-0"} `}>Originally born in England, Chris has been taking pictures since his early days as an awkward teenager in the wilds of Canada, discovering he had a real knack for capturing the light. It may be in his blood, as his grandfather established a portrait studio in Taunton, England, in the 1940’s which still exists to this day, Chris is well known for his fashion & beauty photography- both editorial and commercial work- as well as his celebrity portraiture. His photographic style is celebrated for his sensitive use of light and colour. Chris’s shoots have taken him around the world to many countries including Italy, England, France, China, Argentina, Brazil, the Caribbean and Mexico, and he is currently focusing his time between Toronto, New York and Los Angeles.</p>
      <div className="w-full flex items-center ">
        <Redes />
      </div>
    </div>

  )
}

export default TextBio