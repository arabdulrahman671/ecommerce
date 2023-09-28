import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  ShoppingBagIcon,
  UserCircleIcon,
  UserIcon,
  MagnifyingGlassIcon,
  Bars4Icon,
} from "@heroicons/react/24/solid";
import { useMediaQuery } from "react-responsive";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { SideMenu } from "./SideMenu";
import Link from "next/link";
import { useRouter } from "next/router";
export const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const [input, setinput] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const router = useRouter();

  const handleScroll = () => {
    let scrollTop = window.scrollY;
    if (scrollTop > 100) setIsScrolled(true);
    else setIsScrolled(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex h-[0px] flex-col align-middle items-center w-auto sticky top-0 z-50 ">
      <SideMenu isDrawerOpen={open} closeDrawer={closeDrawer} />
      <div
        className={`flex flex-row justify-center bg-blue-gray-900  
        ${!isScrolled ? "md:w-[800px] lg:w-[1024px]" : "min-w-full"}
         pt-1 transition-all duration-1000 ease-in-out`}
      >
        {!isScrolled && (
          <Typography className="text-xs text-cyan-50">
            {" "}
            SALE 40% OF ON BULK SHOPPING!
          </Typography>
        )}
      </div>
      <div
        className={`bg-white ${
          !isScrolled ? "md:w-[800px] lg:w-[1024px]" : "min-w-full"
        }  flex flex-row justify-between space-x-3 items-center p-4  shadow-md transition-all duration-1000 ease-in-out`}
      >
        <div className="h-6 flex flex-row items-center ">
          {isMobile && (
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={openDrawer}
              className="m-0 p-0 "
            >
              {<Bars4Icon className="h-6 p-0" />}
            </IconButton>
          )}
          <div className="h-6 w-20 my-auto items-center relative cursor-pointer">
            <Image
              src="/vercel.svg"
              layout="fill"
              objectFit="contain"
              // objectPosition="left"
              alt="logo"
              onClick={() => router.replace("/")}
            />
          </div>
        </div>
        {!isMobile && (
          <div className="flex flex-row  pl-5 justify-start">
            <Typography className="pr-2  hover:text-green-800 font-bold text-sm">
              <Link href={"/"}>HELLOW</Link>
            </Typography>
            <Typography className="pr-2  hover:text-green-800 font-bold text-sm">
              <Link href={"/"}>HELLOW</Link>
            </Typography>
            <Typography className="pr-2  hover:text-green-800 font-bold text-sm">
              <Link href={"/"}>HELLOW</Link>
            </Typography>
            <Typography className="pr-2  hover:text-green-800 font-bold text-sm">
              <Link href={"/"}>HELLOW</Link>
            </Typography>
          </div>
        )}
        {/* searchBox */}
        <div className="flex items-center rounded-full flex-grow md:border-2 shadow-md md:shadow-none pr-2  py-2">
          <input
            type="text"
            className="w-full outline-none pl-5 pr-5 my-auto bg-transparent text-xs sm:text-sm placeholder-gray-400 "
            placeholder={"Start your search..."}
            onChange={(e) => {
              setinput(e.target.value);
            }}
            value={input}
          />
          <MagnifyingGlassIcon className="hidden md:inline-flex h-6  rounded-full bg-green-400 inline-flex p-1 mr-2" />
        </div>
        {/* menu */}
        <div className="relative flex justify-end items-center space-x-3">
          <ShoppingBagIcon className="h-6 cursor-pointer animate-none" />
          <div className="flex h-10 space-x-1 cursor-pointer border-2 rounded-full items-center p-2">
            <Bars4Icon className="h-4" />
            <div className="relative">
              <div className="absolute top-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></div>
              <UserCircleIcon className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
