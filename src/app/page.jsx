import Cards from "@/components/cards/Cards";
import CardsCont from "@/components/cards/CardsCont";
import DropDown from "@/components/dropdown/DropDown";
import Redes from "@/components/redes/Redes";
import TextBio from "@/components/titles/TextBio";
import TitleBanner from "@/components/titles/TitleBanner";
import ImageTopPage from "@/components/toppage/ImageTopPage";
import TopPage from "@/components/toppage/TopPage";
import TopResize from "@/components/toppage/TopResize";
import UsageTop from "@/components/UsageTop";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col bg-black ">
      <div className="z-[100] fixed w-full">
        {/* <DropDown /> */}
      </div>
      <div className="w-full block lg:hidden">
        <TopResize />
      </div>
      <div className="z-50 hidden bg-black lg:flex">
        <TopPage>
          <div className="flex flex-wrap w-full">
            <TitleBanner />
            {/* <Redes /> */}
          </div>
          <div className="w-full flex flex-wrap gap-20">
            <div className="max-w-[10vw] ">
              {/* <Image className="w-full object-contain" src="https://iili.io/dr0IS0x.jpg" width={1000} height={1000} alt="rerere" /> */}
              <ImageTopPage src="https://iili.io/dr0IS0x.jpg" />
            </div>
            <TextBio />
          </div>
        </TopPage>
      </div>

      <div className="pt-[40vh]  ">
        <CardsCont />
      </div>
    </div>
  )
}