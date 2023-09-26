import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import Slider from "react-slick";

interface Slide {
  uri: string;
  title: string;
}

const Slide = ({ uri, title }: Slide) => {
  return (
    <div className={`w-full`}>
      <div className="h-14 relative">
        <Image
          src={uri}
          layout="fill"
          objectFit="contain"
          // objectPosition="left"
          alt="logo"
        />
      </div>
      <Typography className="font-extralight text-sm text-center uppercase">
        {title}
      </Typography>
    </div>
  );
};

export const CategoriesTray = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1500,
    autoplaySpeed: 3000,
    arrows: true,
    cssEase: "linear",
  };
  return (
    <div className="w-full bg-white -top-10 relative rounded-sm p-5  shadow-md ">
      <Slider {...settings}>
        <Slide uri="/product.jpg" title="banana" />
        <Slide uri="/product.jpg" title="banana" />
        <Slide uri="/product.jpg" title="banana" />
        <Slide uri="/product.jpg" title="banana" />
        <Slide uri="/product.jpg" title="banana" />
        <Slide uri="/product.jpg" title="banana" />
        <Slide uri="/product.jpg" title="banana" />
        <Slide uri="/product.jpg" title="banana" />
      </Slider>
    </div>
  );
};
