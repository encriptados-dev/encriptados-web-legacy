import { useGetProducts } from "@/features/products/queries/useGetProducts";
import React from "react";
import CardProduct from "./CardProduct";
import Loader from "@/shared/components/Loader";
import { useFormContext } from "react-hook-form";

const ListOfProducts = () => {
  const { watch } = useFormContext();
  const { data, isFetching } = useGetProducts(watch("selectedOption"));

  if (isFetching) {
    return (
      <div className="flex justify-center items-center mt-6">
        <Loader />
      </div>
    );
  }

  const productCount = data?.data.length || 0;

  return (
    <div className="">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 w-full md:w-11/12 lg:w-full xl:w-[1220px] 2xl:w-8/12">
          <h2 className="text-lg font-semibold  mb-6">
            {productCount} producto{productCount !== 1 ? "s" : ""} encontrado
            {productCount !== 1 ? "s" : ""}
          </h2>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 w-full md:w-11/12 lg:w-full xl:w-[1220px] 2xl:w-8/12">
          {data?.data.map((product) => (
            <CardProduct
              key={product.id}
              priceDiscount={product.sale_price}
              productImage={product.image}
              features={product.advantages.map((item) => item.title)}
              priceRange={`${product.price}$`}
              headerIcon={""}
              headerTitle={product.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListOfProducts;
