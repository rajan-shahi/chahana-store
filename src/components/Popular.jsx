import React from "react";
import productData from "../data/ProductData";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router";

export default function Popular({addToCart}) {
  const navigate = useNavigate();

  // Flatten and filter products with a rating greater than 4.7
  const popularProducts = Object.values(productData.categories)
    .flat()
    .filter((product) => product.rating > 4.7);

  const handleProductDetails = (product) => {
    navigate("/product-detail", { state: product });

  };
  const visibleItems = 8;

  return (
    <div className="   container mx-auto flex flex-col px-2">
      {/* popular product title */}
      <div className=" container mx-auto  mt-16 mb-10">
        <span className="sm:text-2xl lg:text-3xl text-xl font-bold px-2" title="products with rating more than 4.7 ">
          Popular Product
        </span>
      </div>
      <div className="grid gap-y-4 gap-2 gap-x-0 md:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {popularProducts
        .slice(0, visibleItems)
        .map((product, index) => (
          <ProductCard
            key={index}
            items={product}
            addToCart={addToCart}
            onClick={handleProductDetails}
          />
        ))}
      </div>
    </div>
  );
}
