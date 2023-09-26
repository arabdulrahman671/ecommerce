import { Button, Typography } from "@material-tailwind/react";
import React from "react";

export const NewsLetter = () => {
  return (
    <div className="bg-blue-gray-900  flex flex-col justify-center py-20 items-center ">
      <div>
        <Typography className="text-white font-extralight text-center text-md mb-3">
          Stay Up to date with our new offers
        </Typography>
        <Typography className="text-light-green-400  text-center text-3xl font-extralight">
          Subscribe to our News Letter
        </Typography>
      </div>
      <div className="space-x-5 mt-5 flex">
        <input
          className="rounded-full p-3 px-5 w-72"
          placeholder="youremail@email.com"
        />
        <Button className="rounded-full hover:bg-red-400">
          <Typography>Subscribe</Typography>
        </Button>
      </div>
    </div>
  );
};
