"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import SearchIcon from "../../../public/search-normal.svg";
import { usePathname } from "next/navigation";
import IconMenu from "@/images/menu.svg";
import IconClose from "@/images/close.svg";
import { useEffect, useState } from "react";

export default function Header() {
  const itemTab = [
    { title: "HOME", href: "/" },
    { title: "VIDEOS", href: "/videos" },
    { title: "NEWS", href: "/news" },
    { title: "STORIES", href: "/stories" },
    { title: "SHOP", href: "/shop" },
    { title: "GET IN TOUCH", href: "/getInTouch" },
  ];

  const [isShowMenu, setIsShowMenu] = useState(false);
  const pathname = usePathname();
  return (
    <header
      className={` ${
        isShowMenu ? "fixed" : undefined
      } z-20 w-full pt-6 pb-10 bg-black`}
    >
      <div className={`w-full pr-16 pl-8 sm:pl-16 flex relative lg:`}>
        <div className="h-full items-center relative flex">
          <Image
            src={Logo}
            alt="logo tasmanian"
            className="mr-1 w-[24px] h-[27px] md:w-[37px] md:h-[43px] lg:w-[47px] lg:h-[54px]"
          />
          <p className="text-[32px] md: lg:text-[56px] text-white  font-medium ">
            BELIEVE TASMANIAN
          </p>
        </div>
        <div className="h-full items-center  absolute lg:right-16 w-30 lg:flex hidden">
          <div className="h-10 border-gray-400 border-b-2 items-center relative flex pr-3">
            <Image
              src={SearchIcon}
              width={20}
              height={20}
              alt="icon search"
              className="mr-3"
            />
            <p className="text-[32px] text-[#cccccc] font-extralight">
              SEARCH BELIEVE TASMANIAN
            </p>
          </div>
        </div>
        <button
          className="h-full items-center  absolute right-8  sm:right-16 w-30 lg:hidden block pt-3"
          onClick={() => setIsShowMenu(!isShowMenu)}
        >
          {!isShowMenu ? (
            <Image src={IconMenu} width={24} height={24} alt="Menu tasmanian" />
          ) : (
            <Image
              src={IconClose}
              width={24}
              height={24}
              alt="icon close menu tasmanian"
            />
          )}
        </button>
      </div>
      <div className="hidden lg:flex w-full h-16 mt-[80px] relative items-center justify-center border-t-[1px] border-b-[1px] border-[#1A1A1A]">
        {itemTab.map((item, index) => (
          <div
            key={index}
            className="pr-[28px] pl-[28px] relative flex items-center justify-center"
          >
            <Link
              href={item.href}
              className={`${
                pathname === item.href ? "text-white" : "text-gray-500"
              } text-[32px]`}
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>
      {isShowMenu ? (
        <div className="fixed top-[99px] left-0 right-0 w-full h-full bg-pink-200 z-[999] justify-center items-center lg:hidden">
          <div className="w-full flex relative  justify-center">
            <div className="h-10 border-gray-400 border-b-[1px] items-center relative flex pr-3 w-[300px]">
              <Image
                src={SearchIcon}
                width={20}
                height={20}
                alt="icon search"
                className="mr-3"
              />
              <p className="text-[32px] text-[#cccccc] font-extralight leading-7 tracking-[0.8px]">
                SEARCH BELIEVE TASMANIAN
              </p>
            </div>
          </div>
          <div className="w-full mt-8 flex flex-col justify-between content-center items-center relative">
            {itemTab.map((item, index) => (
              <div
                key={index}
                className="pr-[20px] pl-8 relative flex items-center justify-center w-[200px]"
              >
                <Link
                  href={item.href}
                  onClick={() => {
                    setIsShowMenu(!isShowMenu);
                  }}
                  className={`${
                    pathname === item.href ? "text-white" : "text-[#666666]"
                  } text-[24px]`}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
}
