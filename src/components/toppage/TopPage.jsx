'use client'
import { useEffect, useState } from "react"

const TopPage = ({children, className=""}) => {
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
    <div className={`flex-1 sm:fixed pl-5 sm:pl-20 bg-black z-40 w-full overflow-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.65,0.05,0.36,1)] ${isScrolled ? "h-[0vh] " : "h-screen"} `}>
        {children}
    </div>
  )
}

export default TopPage