import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, Typography } from "@material-tailwind/react";
import Layout from "@/components/Layout";
import { TopBanner } from "@/components/TopBanner";
import { CategoriesTray } from "@/components/CategoriesTray";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { NewsLetter } from "@/components/NewsLetter";
import { Reviews } from "@/components/Reviews";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <TopBanner />
      {/* <div className="w-full flex-col"> */}
      <div className="md:max-w-[1024px]  relative mb-10 md:mx-auto">
        {/* <div className="md:max-w-[1024px] ml-auto mr-auto relative mb-10"> */}
        <CategoriesTray />
        <FeaturedProducts />
        <Reviews />
      </div>
      <NewsLetter />
      <div className="my-96"></div>
      {/* </div> */}
    </Layout>
  );
}
