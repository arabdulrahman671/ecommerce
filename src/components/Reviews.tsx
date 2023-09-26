import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";

interface Review {
  uri: string;
  comment: string;
  customerName: string;
  designation: string;
}
const Review = ({ uri, comment, customerName, designation }: Review) => {
  return (
    <div className="flex text-center items-center flex-col p-10 px-20 md:px-40">
      <div className="relative h-24 w-24  mb-5">
        <Image
          src={uri}
          layout="fill"
          objectFit="contain"
          alt="logo"
          className="rounded-3xl"
        />
        <ChatBubbleOvalLeftIcon className="absolute z-10 h-6 -bottom-[10px] -left-[5px] text-green-400" />
      </div>
      <div className="mb-5">
        <Typography>{comment}</Typography>
      </div>
      <div className="flex flex-row space-x-5 ">
        <Typography className="text-xs text-green-600 font-bold">
          {customerName}
        </Typography>
        <Typography className="text-xs font-bold">{designation}</Typography>
      </div>
    </div>
  );
};

export const Reviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1500,
    autoplaySpeed: 2000,
    arrows: true,
    cssEase: "linear",
  };
  return (
    <div className="">
      <Slider {...settings}>
        <Review
          uri={"/product.jpg"}
          comment="Esse aliqua excepteur esse eu officia. Ullamco ad qui ullamco qui
          magna aliquip nulla esse Lorem commodo veniam non ex. Nulla irure amet
          do commodo ullamco est nisi officia aute tempor id excepteur deserunt
          est. Officia officia do consequat qui laborum et minim. Et laboris
          nulla fugiat ipsum tempor irure eu ullamco ea nulla et."
          customerName="Customer name"
          designation="Happy Customer"
        />
        <Review
          uri={"/product.jpg"}
          comment="Esse aliqua excepteur esse eu officia. Ullamco ad qui ullamco qui
          magna aliquip nulla esse Lorem commodo veniam non ex. Nulla irure amet
          do commodo ullamco est nisi officia aute tempor id excepteur deserunt
          est. Officia officia do consequat qui laborum et minim. Et laboris
          nulla fugiat ipsum tempor irure eu ullamco ea nulla et."
          customerName="Customer name"
          designation="Happy Customer"
        />
        <Review
          uri={"/product.jpg"}
          comment="Esse aliqua excepteur esse eu officia. Ullamco ad qui ullamco qui
          magna aliquip nulla esse Lorem commodo veniam non ex. Nulla irure amet
          do commodo ullamco est nisi officia aute tempor id excepteur deserunt
          est. Officia officia do consequat qui laborum et minim. Et laboris
          nulla fugiat ipsum tempor irure eu ullamco ea nulla et."
          customerName="Customer name"
          designation="Happy Customer"
        />
        <Review
          uri={"/product.jpg"}
          comment="Esse aliqua excepteur esse eu officia. Ullamco ad qui ullamco qui
          magna aliquip nulla esse Lorem commodo veniam non ex. Nulla irure amet
          do commodo ullamco est nisi officia aute tempor id excepteur deserunt
          est. Officia officia do consequat qui laborum et minim. Et laboris
          nulla fugiat ipsum tempor irure eu ullamco ea nulla et."
          customerName="Customer name"
          designation="Happy Customer"
        />
      </Slider>
    </div>
  );
};
