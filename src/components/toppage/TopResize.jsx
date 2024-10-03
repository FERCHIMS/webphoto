import Image from "next/image";
import { Deutschlander, HelvDisplayExBold, ResolveBlack, ResolveLight, ResolveThin } from "@/app/fonts/Fonts"


const TopResize = () => {
    return (
        <div className="flex flex-col items-center justify-center  pt-5">
            <div className="py-10 pl-[5vw] lg:pl-0  ">
                <h2 className={`${ResolveThin.className} text-[5em] md:text-[7em] leading-none h-[200px] pt-10 text-white`}>CHRISTIAN JOHNS</h2>
            </div>
            <div className="flex flex-col items-center" >
                <div>
                    <Image src="https://iili.io/dr0IS0x.jpg" width={1000} height={1000} alt="fotin" />
                </div>
                <div className="w-[90%] py-10 text-white text-[1rem]">
                    <p className={`leading-[1em] ${ResolveLight.className} `}>Originally born in England, Chris has been taking pictures since his early days as an awkward teenager in the wilds of Canada, discovering he had a real knack for capturing the light. It may be in his blood, as his grandfather established a portrait studio in Taunton, England, in the 1940’s which still exists to this day, Chris is well known for his fashion & beauty photography- both editorial and commercial work- as well as his celebrity portraiture. His photographic style is celebrated for his sensitive use of light and colour. Chris’s shoots have taken him around the world to many countries including Italy, England, France, China, Argentina, Brazil, the Caribbean and Mexico, and he is currently focusing his time between Toronto, New York and Los Angeles.</p>
                </div>
            </div>
        </div>
    )

}

export default TopResize;