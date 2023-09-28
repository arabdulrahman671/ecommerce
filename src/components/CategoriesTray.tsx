import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
interface Slide {
  uri: string;
  title: string;
}

const Slide = ({ uri, title }: Slide) => {
  return (
    <div className={`w-full flex flex-col justify-center items-center`}>
      <div className="h-14 relative rounded-full overflow-hidden w-14">
        <Image
          src={uri}
          layout="fill"
          objectFit="cover"
          // objectPosition="left"
          alt="logo"
        />
      </div>
      <Typography className="font-extralight text-sm text-center">
        {title}
      </Typography>
    </div>
  );
};

export const CategoriesTray = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: isMobile ? 3 : 6,
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
