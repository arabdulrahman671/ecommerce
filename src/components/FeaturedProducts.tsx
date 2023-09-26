import { Button, Typography } from "@material-tailwind/react";
import React, { useRef } from "react";
import { ProductCard } from "./ProductCard";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const FeaturedProducts = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1500,
    autoplaySpeed: 3000,
    arrows: true,
    cssEase: "linear",
  };
  const sliderRef = useRef(null);
  return (
    <div className="bg-white rounded-md shadow-md p-5 ">
      <div className="flex flex-row justify-between my-5">
        <div className="flex justify-center">
          {/** button */}
          <Button
            className="h-8 w-8 rounded-full relative p-0 flex justify-center items-center"
            onClick={() => {
              sliderRef?.current?.slickPrev();
            }}
          >
            <ArrowLeftIcon className="h-6 w-6 text-white" />
          </Button>
        </div>
        <div>
          <Typography className="text-center font-extrabold text-2xl uppercase">
            Featured Products
          </Typography>
          <Typography className="text-center bg-green-400 text-white font-extralight uppercase rounded-md px-4 my-4">
            So you get to know me better
          </Typography>
        </div>
        <div className="flex justify-center">
          {/** button */}
          <Button
            className="h-8 w-8 rounded-full relative p-0 flex justify-center items-center"
            onClick={() => {
              sliderRef?.current?.slickNext();
            }}
          >
            <ArrowRightIcon className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>

      <Slider {...settings} ref={sliderRef}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Slider>
    </div>
  );
};
