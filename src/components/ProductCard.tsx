import {
  Button,
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import React, { useState } from "react";
import { HeartIcon, PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { cn } from "@/libs/utils";
export const ProductCard = ({ isListView }: { isListView: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="flex flex-col items-center p-0 rounded-lg">
      <Card
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "mt-6 p-0 overflow-hidden",
          isListView ? "flex-row min-w-full" : "flex-col"
        )}
      >
        <CardHeader
          color="blue-gray"
          className={cn(
            "relative h-[200px]  p-0 m-0 overflow-hidden",
            isListView
              ? "min-w-[200px] rounded-r-none"
              : "w-full rounded-b-none"
          )}
        >
          <Image
            className={`transition duration-300 ease-in-out ${
              isHovered ? "scale-150" : "scale-100"
            }`}
            src={"/product.jpg"}
            layout="fill"
            objectFit="cover"
            alt="card-image"
          />
          <IconButton
            size="sm"
            color="red"
            variant="text"
            className="!absolute top-2 right-2 rounded-full"
          >
            <HeartIcon className="h-6 w-6 text-red-900" />
          </IconButton>
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="blue-gray" className="mb-2">
            Organic Grape Banana
          </Typography>
          <Typography>$7.99</Typography>
          <div className="pt-5">
            <Button className="rounded-full bg-green-400">Add to Cart</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
