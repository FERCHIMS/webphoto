import Cards from "@/components/cards/Cards";
import CardsCont from "@/components/cards/CardsCont";
import DropDown from "@/components/dropdown/DropDown";
import TextBio from "@/components/titles/TextBio";
import TitleBanner from "@/components/titles/TitleBanner";
import TopPage from "@/components/toppage/TopPage";
import UsageTop from "@/components/UsageTop";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-black ">
      <div className="z-[100] fixed w-full">
        <DropDown />
      </div>
      <div className="z-50 flex bg-black">
        <TopPage>
          <div className="">
            <TitleBanner />
          </div>
          <div className="w-full flex flex-wrap gap-20">
            <div className="max-w-[50vw] ">
              <Image className="w-full object-contain" src="https://iili.io/dr0IS0x.jpg" width={1000} height={1000} alt="rerere" />
            </div>
            <TextBio />
          </div>
        </TopPage>
      </div>

      {/* <div>
        <Image src="https://iili.io/dr00eK7.jpg" width={1000} height={1000} alt="sto2"/>
      </div> */}

      <div className="pt-[40vh]  ">
        <CardsCont />
      </div>
    </div>
  )
}