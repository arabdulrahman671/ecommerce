import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Slide {
  uri: string;
  head: string;
  focus: string;
  footer: string;
}

const Slide = ({ uri, head, focus, footer }: Slide) => {
  return (
    <div className={`w-full h-[500px] relative flex flex-col `}>
      <Image
        src={uri}
        layout="fill"
        objectFit="cover"
        // objectPosition="left"
        alt="logo"
        className="absolute -z-10 "
      />
      <div className="w-full h-full flex justify-center items-center flex-col pt-5">
        <Typography className="text-white font-extralight text-[20px] md:text-[30px] uppercase text-center">
          {head}
        </Typography>
        <Typography className="text-white font-bold  text-[25px] md:text-[50px] uppercase text-center">
          {focus}
        </Typography>
        <Typography className="text-white font-extralight text-[20px] md:text-[30px] uppercase text-center">
          {footer}
        </Typography>
        <Button className="bg-white text-black capitalize hover:bg-green-800 rounded-full hover:text-white mt-5">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export const TopBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 8000,
    arrows: true,
    cssEase: "linear",
  };
  return (
    <>
      <Slider {...settings}>
        <Slide
          uri="/banner-image.jpg"
          focus="Simply Delicious"
          head="Fresh Food"
          footer="we support high quality organic products"
        />
        <Slide
          uri="/banner-image2.jpg"
          focus="Simply Delicious"
          head="Fresh Food"
          footer="we support high quality organic products"
        />
        <Slide
          uri="/banner-image.jpg"
          focus="Simply Delicious"
          head="Fresh Food"
          footer="we support high quality organic products"
        />
      </Slider>
    </>
  );
};
