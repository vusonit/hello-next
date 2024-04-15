import Image from "next/image";
import Banner from "@/images/banner.svg";
import BannerMobile from "@/images/Alastair-Clarkson-Feature 1.svg";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between lg:p-24 bg-black pb-[60px]">
      <section className="flex flex-col items-center justify-center">
        <h1 className="text-[101px] text-[#FFFFFF] lg:block hidden">
          TASMANIA. OUR TIME HAS COME
        </h1>
        <h3 className="text-[56px] sm:text-[72px] block lg:hidden text-white leading-[50px]">
          TASMANIA.
        </h3>
        <h3 className="text-[56px] sm:text-[72px] block lg:hidden text-white leading-[50px] tracking-wider mb-[40px]">
          OUR TIME HAS COME.
        </h3>
        <Image
          src={Banner}
          alt={"Banner"}
          className="max-w-[1048px] w-full px-5 mx-auto"
        />
        {/* <div className="relative w-full bg-slate-600 block  lg:hidden">
          <Image src={BannerMobile} alt={"Banner"} className="" />
        </div> */}
      </section>
    </main>
  );
}
