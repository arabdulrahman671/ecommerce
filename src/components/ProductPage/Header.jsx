import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

export const Header = ({ CategoryName }) => {
  return (
    <div className="w-full">
      <div className="relative w-full h-[200px] flex justify-center items-center">
        <Image
          src="/banner-image2.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="left"
          alt="logo"
          className="absolute -z-5 w-full h-full"
        />
        <Typography className="z-10 text-white mt-16 text-2xl font-extrabold">
          Category : {CategoryName}
        </Typography>
      </div>
    </div>
  );
};
