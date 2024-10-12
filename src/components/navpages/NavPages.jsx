'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
import TransitionLink from "../transitionLink/TransitionLink"
import { Deutschlander, HelvDisplayExBold, ResolveLight } from "@/app/fonts/Fonts"
import { links } from "../links/Links"



const NavPages = () => {
  const pathName = usePathname()
  return (
    <div className="flex w-fit flex-wrap gap-4 justify-center pr-20 items-center">
        {links.map((link) => (
            <li className="w-fit" key={link.title}>
                <TransitionLink  className={`text-[#848484] text-[0.8rem] hover:text-white uppercase transition duration-700 font-bold ${pathName === link.href ? "text-white" : ""} ${ResolveLight.className} `}href={link.href} >{link.title} </TransitionLink>
            </li>
        ))}
    </div>
  )
}

export default NavPages