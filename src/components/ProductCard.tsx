import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

export const ProductCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative h-[300px] w-[250px] overflow-hidden rounded-md border-solid border-2 border-gray-500  shadow-sm">
          <Image
            src={"/product.jpg"}
            layout="fill"
            objectFit="contain"
            // objectPosition="left"
            alt="logo"
            className="transition duration-300 ease-in-out hover:scale-150 "
          />
        </div>
        {isHovered && (
          <Button className="rounded-full absolute p-2 bg-green-400 right-[40%]  -bottom-5  border-solid border-4 border-sky-500 hover:bg-red-400 ">
            <PlusIcon className="h-8 w-8 text-white font-bold" />
          </Button>
        )}
      </div>
      <div className="flex flex-col item-center mt-5">
        <Typography
          className={`text-center ${
            isHovered ? "text-red-400" : ""
          } font-semibold`}
        >
          Organic Grape Banana
        </Typography>
        <Typography className="text-center font-bold">$7.99</Typography>
      </div>
    </div>
  );
};
