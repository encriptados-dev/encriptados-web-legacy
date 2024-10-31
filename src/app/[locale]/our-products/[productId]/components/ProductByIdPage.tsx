import React from "react";
import CardProduct from "./CardProduct";
import CardProductBanner from "./CardProductBanner";
import Features from "./Features";
import Advantages from "./Advantages";

const ProductByIdPage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center w-10/12 mx-auto gap-x-12 mt-24 mb-24">
        <div className="w-full md:w-5/12 mb-4 md:mb-0">
          <CardProduct />
        </div>
        <div className="w-full md:w-5/12">
          <CardProductBanner />
        </div>
      </div>

      <div className="mt-24">
        <Features />
      </div>

      <div className="mt-24">
        <Advantages />
      </div>
    </>
  );
};

export default ProductByIdPage;
