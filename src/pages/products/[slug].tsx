import { Header } from "@/components/ProductPage/Header";
import Layout from "@/components/Layout";
import { TopBanner } from "@/components/TopBanner";
import React from "react";
import { Typography } from "@material-tailwind/react";
import { ProductGrid } from "@/components/ProductPage/ProductGrid";
import { SideBar } from "@/components/ProductPage/SideBar";

const Slug = () => {
  return (
    <Layout>
      <Header CategoryName={"Fruits"} />
      <div className="mt-5 grid grid-col-8 grid-flow-col md:gap-2 spac md:max-w-[1240px] relative mb-10 md:mx-auto">
        <div className="mb-5 mx-2 order-2 md:order-1 col-span-full md:col-span-2">
          {/* Filter menu and ADs */}
          <SideBar />
        </div>
        <div className="mb-5 rounded-lg bg-white  col-span-full order-1 md:order-2 md:col-span-6 p-5 shadow-md">
          {/* Product Grid*/}
          <ProductGrid />
        </div>
      </div>
    </Layout>
  );
};

export default Slug;
