import { IconButton, Option, Select } from "@material-tailwind/react";
import React, { useState } from "react";
import { Square3Stack3DIcon, ListBulletIcon } from "@heroicons/react/24/solid";
import { ProductCard } from "../ProductCard";
import { cn } from "@/libs/utils";
export const ProductGrid = () => {
  const [isListView, setIsListView] = useState(false);
  return (
    <div>
      <div className="mb-5 flex justify-between">
        {/* Toolbar */}
        <div className="space-x-3">
          <IconButton
            variant="outline"
            className={`${
              !isListView ? "bg-green-400" : "bg-gray-300"
            }  text-black`}
            onClick={() => {
              if (isListView) setIsListView(false);
            }}
          >
            <Square3Stack3DIcon
              className={`${
                !isListView ? "text-white" : "text-black"
              } h-full w-full`}
            />
          </IconButton>
          <IconButton
            variant={"outline"}
            className={`${
              isListView ? "bg-green-400" : "bg-gray-300"
            }  text-black`}
            onClick={() => {
              if (!isListView) setIsListView(true);
            }}
          >
            <ListBulletIcon
              className={`${
                isListView ? "text-white" : "text-black"
              } h-full w-full`}
            />
          </IconButton>
        </div>
        <div>
          <Select label="Sorting">
            <Option>Recent Items</Option>
            <Option>By Price:Ascending</Option>
            <Option>By Price:Descending</Option>
          </Select>
        </div>
      </div>
      <div
        className={cn(
          "grid grid-cols-1",
          isListView
            ? "sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4"
            : "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4"
        )}
      >
        {/* Products Grid- */}
        {/* <div className=""> */}
        <ProductCard isListView={isListView} />
        <ProductCard isListView={isListView} />
        <ProductCard isListView={isListView} />
        <ProductCard isListView={isListView} />
        <ProductCard isListView={isListView} />
      </div>
    </div>
  );
};
