"use client";
import Link from "next/link";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import Image from "next/image";
import IconFace from "@/images/icon_facebook.svg";
import IconInsta from "@/images/icon_instagram.svg";
import IconLinkedin from "@/images/icon_linkedin.svg";

const robotoFont = localFont({ src: "../../app/fonts/Roboto-Bold.ttf" });
const robotoRegularFont = localFont({
  src: "../../app/fonts/Roboto-Regular.ttf",
});

export default function Footer() {
  const itemTab = [
    { title: "HOME", href: "/home" },
    { title: "VIDEOS", href: "/videos" },
    { title: "NEWS", href: "/news" },
    { title: "STORIES", href: "/stories" },
    { title: "SHOP", href: "/shop" },
    { title: "GET IN TOUCH", href: "/getInTouch" },
  ];
  const pathname = usePathname();
  return (
    <header className="w-full bg-[#0D0D0D] pb-5">
      <div className="w-full pr-16 pl-8  pt-10 sm:pl-16 sm:pt-14 md:pt-20 flex sm:flex-row flex-col sm:justify-between sm:items-center relative ">
        <div className={`${robotoFont.className}`}>
          <span className="text-[#808080] text-[18px] lg:text-[26px] sm mr-2 text-lat tracking-[0.5em]">
            BELIEVE
          </span>
          <span className=" text-[#FFFFFF] text-[18px] lg:text-[26px] tracking-[0.5em]">
            TASMANIAN
          </span>
        </div>
        <div className="w-[324px] mt-3 ">
          <p
            className={`${robotoRegularFont.className} text-[#999999]  sm:text-right text-[12px] lg:text-[14px] leading-5`}
          >
            The Tasmanian story began over 60,000 years ago. We acknowledge the
            ancient history of the Tasmanian Aboriginal people as the First
            People of lutruwita/Tasmania. For over 2,000 generations, Tasmanian
            Aboriginal people’s culture and language have been and continue to
            be based on a deep and continuous connection to family, community,
            and the land, sea, and waterways.
          </p>
        </div>
      </div>
      <div className="w-full mt-8 pl-0 sm:pl-8 pt-4 pb-4 flex flex-col sm:flex-row  sm:justify-between lg:justify-center  relative  border-b-[0px] sm:border-b-[0.5px] border-t-[0.5px] sm:border-t-[0px] border-[#383838]">
        {itemTab.map((item, index) => (
          <div
            key={index}
            className="pr-[20px] pl-8 sm:pl-[20px] relative flex items-center justify-start sm:justify-center"
          >
            <Link
              href={item.href}
              className={`${
                pathname === item.href ? "text-white" : "text-[#666666]"
              } text-[24px]`}
            >
              {item.title}
            </Link>
          </div>
        ))}
        <div className="flex relative flex-row pl-8 pr-8 mt-5 sm:mt-0 lg:hidden">
          <Image
            src={IconFace}
            width={24}
            height={24}
            alt="icon facebook"
            className="mr-3"
          />
          <Image
            src={IconInsta}
            width={24}
            height={24}
            alt="icon insta"
            className="mr-3"
          />
          <Image
            src={IconLinkedin}
            width={24}
            height={24}
            alt="icon linkedin"
            className="mr-3"
          />
        </div>
      </div>
      <div
        className={`${robotoRegularFont.className} w-full h-16  flex relative items-center justify-between sm:justify-center  pl-3 pr-3`}
      >
        <p
          className={`text-[#999999]   text-[12px] leading-3 mr-[20px] ml-[20px]`}
        >
          Privacy Policy
        </p>
        <p
          className={`text-[#999999]   text-[12px] leading-3 mr-[20px] ml-[20px]`}
        >
          Terms & Conditions
        </p>
      </div>
      ;
    </header>
  );
}
