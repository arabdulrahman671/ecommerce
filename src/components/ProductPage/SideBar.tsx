import {
  ChevronDownIcon,
  ChevronRightIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Slider,
  Typography,
} from "@material-tailwind/react";
import React, { SetStateAction, useState } from "react";

interface FilterItem {
  header: string;
  items: string[];
}

const FilterItem = ({ header, items }: FilterItem) => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: React.SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <Accordion
        open={open === 2}
        icon={
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 transition-transform ${
              open === 2 ? "rotate-180" : ""
            }`}
          />
        }
      >
        <ListItem className="p-0" selected={open === 2}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="border-b-0 p-3"
          >
            <Typography color="blue-gray" className="mr-auto">
              {header}
            </Typography>
          </AccordionHeader>
        </ListItem>
        <AccordionBody className="py-1">
          <List className="p-0">
            {items?.map((item) => (
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                {item}
              </ListItem>
            ))}
          </List>
        </AccordionBody>
      </Accordion>
      <hr className="my-2 border-blue-gray-50" />
    </>
  );
};

export const SideBar = () => {
  return (
    <div>
      <Card className="m-0 mb-5 overflow-hidden">
        {/* Filter By Price */}
        <div className="mt-2 border-l-4 p-2  border-green-400">
          <Typography className="text-lg font-bold">Filter by price</Typography>
        </div>

        <div className="w-full p-5">
          <Slider defaultValue={50} className="text-green-400" />
        </div>
        <div className="p-5 flex justify-between items-center space-x-2">
          <Typography>Price: $0 - {"$100"}</Typography>
          <Button className="rounded-full bg-green-400">Filter</Button>
        </div>
      </Card>

      <Card className="m-0 mb-5 overflow-hidden">
        <div className="mt-2 border-l-4 p-2  border-green-400">
          <Typography className="text-lg font-bold">Filter by price</Typography>
        </div>
        <div className="p-2">
          <FilterItem
            header={"Fruits"}
            items={["Berries", "Vegetables Fruits"]}
          />
          <FilterItem
            header={"Fruits"}
            items={["Berries", "Vegetables Fruits"]}
          />
          <FilterItem
            header={"Fruits"}
            items={["Berries", "Vegetables Fruits"]}
          />
          <FilterItem
            header={"Fruits"}
            items={["Berries", "Vegetables Fruits"]}
          />
        </div>
      </Card>
    </div>
  );
};
