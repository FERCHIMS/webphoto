'use client'
import { Deutschlander } from "@/app/fonts/Fonts";
import Link from "next/link";
import { useState } from "react"

const DropDown = ({ children, buttonText }) => {
    const [isDrop, setIsDrop] = useState(false);

    const handleDrop = () => {
        setIsDrop(!isDrop)
    };

    return (
        <>

            <div className={`w-full absolute overflow-hidden transition-all duration-[1200ms] bg-red-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] ${isDrop ? "h-screen " : "h-0"} `} >
                <div className="w-full h-full flex justify-center items-center">
                    <ul className="flex w-full gap-[-10px] justify-center items-center  flex-col">
                        <Link className={`${Deutschlander.className} text-[6rem] leading-none `} href="/fashion" > FASHION</Link>
                        <li className={`${Deutschlander.className} h-fit text-[6rem] leading-none`}>STREET</li>
                        <li className={`${Deutschlander.className} h-fit text-[6rem] leading-none`}>ADVERTISING</li>
                        <li className={`${Deutschlander.className} h-fit text-[6rem] leading-none`}>KIDS</li>
                        <li className={`${Deutschlander.className} h-fit text-[6rem] leading-none`}>WEDDING</li>
                        <li className={`${Deutschlander.className} h-fit text-[6rem] leading-none`}>PORTRAIT</li>
                    </ul>
                </div>
            </div>

            <div className=" relative overflow-hidden z-[1000px] w-full flex justify-end pr-2   ">
                <button className="overflow-hidden block lg: top-4  rounded-l-[100px] rounded-r-[100px]  w-[80px] h-[80px]" onClick={handleDrop}>
                    <div className={`w-full gap-8 flex flex-col overflow-hidden justify-center items-center transition duration-700 ${isDrop ? "translate-y-[-6vh] " : "translate-y-[3.5vh]"} `}>
                        <div className={`w-full h-full overflow-hidden items-center  flex flex-col transition duration-700 ${isDrop ? "opacity-0 rotate-90" : "opacity-100 rotate-0"} `} >
                            <svg className="w-[50%]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 25">
                                <path fill="#FFFFFF" d="M0 5V0h32v5zm0 10v-5h32v5zm0 10v-5h32v5z" />
                            </svg>
                        </div>
                        <div className={`flex justify-center items-center transition duration-700 ${isDrop ? "opacity-100 rotate-0" : "opacity-0 rotate-90"} `}>
                            <svg className="w-[50%]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
                                <path fill="#FFFFFF" d="m0 4 4-4 28 29-4 3z" />
                                <path fill="#FFFFFF" d="m28 0 4 4L4 32l-4-4z" />
                            </svg>
                        </div>
                    </div>
                </button>
            </div>
        </>
    )
}

export default DropDown