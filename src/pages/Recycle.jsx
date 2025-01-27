// this is secondary nav data
<>
  {/* Electronic Devices */}
  <p className="hover:bg-primary-50 active:bg-primary-50 px-1.5 py-1 relative group">
    Electronic Devices
    <div className="absolute  hidden  group-hover:flex -left-1 top-6 bg-secondary-100 rounded-sm transition-all duration-200 z-10 ">
      <ul className="min-w-max    flex flex-col ">
        <li className="py-2 pt-3 px-3 hover:bg-primary-100 bg-primary-50 ">
          Smartphones
        </li>
        <li className="py-2 px-3 hover:bg-primary-100 bg-primary-50 ">
          Tablets
        </li>
        <li className="py-2 px-3 hover:bg-primary-100  bg-primary-50">
          Laptops
        </li>
        <li className="py-2 pt-3 px-3 hover:bg-primary-100 bg-primary-50 ">
          Desktops
        </li>
        <li className="py-2 px-3 hover:bg-primary-100 bg-primary-50 ">
          Monitors
        </li>
        <li className="py-2 px-3 hover:bg-primary-100  bg-primary-50">
          Gaming Consoles
        </li>
        <li className="py-2 px-3 hover:bg-primary-100 bg-primary-50 ">
          Cameras
        </li>
        <li className="py-2 px-3 hover:bg-primary-100  bg-primary-50">
          Printers
        </li>
      </ul>
    </div>
  </p>
  ;{/* TV & Applicances */}
  <p className="hover:bg-primary-50 active:bg-primary-50 px-1.5 py-1 relative group">
    TV & Applicances
    <div className="absolute  hidden  group-hover:flex -left-1 top-6 bg-secondary-100 rounded-sm transition-all duration-200 z-10 ">
      <ul className="min-w-max    flex flex-col ">
        <li className="py-2 pt-3 px-3 hover:bg-primary-100 bg-primary-50 ">
          Televesions
        </li>
        <li className="py-2 px-3 hover:bg-primary-100 bg-primary-50 ">
          TV Accessories
        </li>
        <li className="py-2 px-3 hover:bg-primary-100  bg-primary-50">
          Audio & Video Devices
        </li>
        <li className="py-2 px-3 hover:bg-primary-100  bg-primary-50">
          Small Kitchen Appliances
        </li>
      </ul>
    </div>
  </p>
  ;{/* Home & Lifestyle */}
  <p className="hover:bg-primary-50 active:bg-primary-50 px-1.5 py-1 relative group">
    Home & Lifestyle
    <div className="absolute  hidden  group-hover:flex -left-1 top-6 bg-secondary-100 rounded-sm transition-all duration-200 z-10 ">
      <ul className="min-w-max    flex flex-col ">
        <li className="py-2 pt-3 px-3 hover:bg-primary-100 bg-primary-50 ">
          Bath
        </li>
        <li className="py-2 px-3 hover:bg-primary-100 bg-primary-50 ">
          Bedding
        </li>
        <li className="py-2 px-3 hover:bg-primary-100  bg-primary-50">Decor</li>
        <li className="py-2 px-3 hover:bg-primary-100 bg-primary-50 ">
          Furniture
        </li>
        <li className="py-2 px-3 hover:bg-primary-100  bg-primary-50">
          Kitchen & Dining
        </li>
      </ul>
    </div>
  </p>
  ;
</>;

//with view more button

<>
  {/* import React, { useState } from "react";
import { AiOutlineFire } from "react-icons/ai";
import ProductCard from "./ProductCard"; // Import the ProductCard component
import ProductData from "../data/ProductData";
import { useNavigate } from "react-router";
import productData from "../data/ProductData";

export default function FlashSale() {
  const navigate = useNavigate();

  const [visibleItems, setVisibleItems] = useState(4);
  const loadMoreItems = () => {
    setVisibleItems(visibleItems + 1);
  };

  const handleProductDetails = (items) => {
    navigate("/product-detail", { state: items });
  };

  return (
    <>
      {/* flash sale title */}
  <div className="flash-sale-title container mx-auto flex items-center gap-2 py-5">
    <AiOutlineFire size={30} className="text-primary-350 " />
    <span className="text-2xl font-semibold">Flash Sale</span>
  </div>
  {/* All Product Container */}
  {/* <div className="grid container mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-2">
        {ProductData.categories.jeans
          .slice(0, visibleItems)
          .map((items, index) => (
            <ProductCard
              key={index}
              items={items}
              onClick={handleProductDetails} // Pass the handleProductDetails function
            />
          ))}
      </div>
      {visibleItems < productData.categories.jeans.length && (
        <button onClick={loadMoreItems}>load more</button>
      )}
    </> */}
  // ); // } */}
</>;

// product images slider show
<>
  const [selectedImage, setSelectedImage] = useState(img1 ); // Initially set to
  the first image
  <div className="flex gap-4 py-4 justify-center overflow-x-auto">
    {/* Map through the images and create thumbnails */}
    {Object.entries(images).map(([key, img], index) => (
      <div key={index} className="image-item">
        <img
          src={img}
          alt={key}
          className="image size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
          onClick={() => setSelectedImage(img)} // Set clicked thumbnail as the main image
        />
      </div>
    ))}
  </div>
</>;


// add to cart page
<>
import React from "react";
import { Link } from "react-router";

export default function Cart({ cartItems }) {
  return (
    <div>
      <section className="flex flex-col items-center h-full sm:p-16 dark:bg-gray-50 dark:text-gray-800">
        <div className="flex items-center justify-center mb-10">
          <h1 className="text-2xl font-semibold text-gray-900">Cart Items</h1>
        </div>
        {cartItems.length > 0 ? (
          <div className="list-disc ml-5">
            {cartItems.map((item, index) => (
              <ul key={index} className="my-5">
                <li className="flex gap-4 p-2 justify-between my-1 border border-orange-600 rounded-md">
                  <img
                    src={item.images}
                    className="h-24 w-24 max-w-full rounded-lg object-contain m-1"
                    alt={item.title}
                  />

                  <div className="flex flex-1 col-span-1 flex-col justify-between">
                    <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                      <div className="pr-8 sm:pr-5">
                        <p className="text-base font-semibold text-gray-900">
                          {item.title}
                        </p>
                        {item.variants?.colors &&
                          item.variants.colors.length > 0 && (
                            <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                              Colors: {item.variants.colors.join(", ")}
                            </p>
                          )}
                        <p className="shrink-0 w-20 text-base font-semibold text-gray-900">
                          Rs. {item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-indigo-800 text-2xl font-semibold my-2">
              Your cart is empty.
            </p>
            <Link
              to={"/"}
              className="px-8 py-3 font-semibold rounded bg-primary-300 text-secondary-100 dark:text-gray-50"
            >
              Back to homepage
            </Link>
          </div>
        )}
      </section>
         
    </div>
  );
}

</>