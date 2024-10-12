
'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
} 

const TransitionLink = ({children, href, ...props}) => {
    const pathName = usePathname()
    const router = useRouter();

    const handleTransition = async (e) => {
        e.preventDefault();

        if(pathName === href) {
            return;
        }
        const transitionClass = document.querySelector(".transition-container");
        transitionClass?.classList.add("page-transition");
        await sleep(700);
        
        router.push(href);
        
        await sleep(700);
        transitionClass?.classList.remove("page-transition")
    }
  return (
   <Link  onClick={handleTransition}
   href={href} {...props} >{children} </Link>
  )
}

export default TransitionLink;