'use client'
import { useState } from "react"

const DropDown = ({ children, buttonText }) => {
    const [isDrop, setIsDrop] = useState(false);

    const handleDrop = () => {
        setIsDrop(!isDrop)
    };

    return (
        <>



            <div className={`w-full absolute overflow-hidden h-screen transition-all duration-[1200ms] bg-red-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] ${isDrop ? "h-screen " : "h-0"} `} >
                <div className="w-full flex justify-center items-center">
                    <ul className="flex flex-col">
                        <li>HOLA</li>
                        <li>HOLA2</li>
                        <li>HOLA3</li>
                        <li>HOLA4</li>
                        <li>HOLA5</li>
                        <li>HOLA6</li>
                    </ul>
                </div>
            </div>

            <div className="w-full flex justify-end pr-5 ">
                <button className="relative overflow-hidden block lg:hidden top-4  rounded-l-[100px] rounded-r-[100px] z-[1000px] w-[80px] h-[80px] bg-pink-400 " onClick={handleDrop}>
                    <div className={`flex overflow-hidden justify-center items-center gap-3 flex-col transition-all duration-[1200ms] ${isDrop ? "translate-y-[-5vh] " : "translate-y-[2vh]"} `}>
                        <div className={`flex w-full z-10 gap-3 items-center flex-col justify-center transition-all duration-[1200ms] ${isDrop ? "" : ""} `}>
                            <div className="bg-white w-[60%] h-[5px]"></div>
                            <div className="bg-white w-[60%] h-[5px]"></div>
                            <div className="bg-white w-[60%] h-[5px]"></div>
                        </div>
                        <div className={`flex w-full gap-3 items-center flex-col justify-center transition-all duration-[1200ms] ${isDrop ? "" : ""} `}>
                            <h2 className="text-[3rem] text-white">X</h2>
                        </div>
                    </div>

                </button>

            </div>
        </>
    )
}

export default DropDown