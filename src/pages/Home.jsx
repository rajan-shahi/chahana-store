import React from "react";
import FlashSale from "../components/FlashSale";
import Category from "../components/Category";
import HomeSlider from "../components/HomeSlider";
import Popular from "../components/Popular";

export default function Home({ addToCart }) {
  return (
    <div className=" md:w-11/12 md:mx-auto w-full">
      <HomeSlider />
      <FlashSale addToCart={addToCart} />
      <Category />
      <Popular addToCart={addToCart} />
    </div>
  );
}
