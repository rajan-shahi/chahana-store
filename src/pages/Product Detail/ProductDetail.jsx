import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router"; // Correct import
import { TiStar } from "react-icons/ti";
import { FaStore } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { BsArrowLeftShort } from "react-icons/bs";

export default function ProductDetail({ addToCart }) {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    title,
    brand,
    price,
    previous_price,
    rating,
    reviews,
    units_sold,
    images = {},
    category = {},
    variants = {},
    description,
    store = {},
  } = location.state || {}; //yoh destructure gareko sajilae naming haru lekkhn lae insread of boring naming like product.title, product.price

  const { colors = [], sizes = [] } = variants; // Default empty arrays to prevent undefined error
  const {
    name: storeName,
    location: storeLocation,
    established,
    is_verified,
  } = store;

  // yoh tala ko store profile visit garda ko lagi
  const handleStoreDetails = (store, reviews, rating, category) => {
    // console.log({ store, reviews, rating, category });
    const dataToPassInStoreProfilePage = {
      store,
      reviews,
      rating,
      category,
    };
    navigate("/storeProfile", { state: dataToPassInStoreProfilePage });
  };

  const handleAddToCart = () => {
    const product = {
      title,
      price,
      rating,
      images: images,
      description,
      brand,
    };
    addToCart(product);
  };

  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColor = (color) => {
    setSelectedColor(color);
  };

  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleSize = (size) => {
    setSelectedSize(size);
  };


  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <Link
          to={"/"}
          className="px-3 py-2 rounded-md bg-primary-250 ml-5 my-5 text-white text-base flex items-center w-fit gap-2"
        >
          <span>
            <BsArrowLeftShort size={25} />
          </span>
          Back
        </Link>
        <div className="grid md:grid-cols-2">
          {/* Product Images and Store Info */}
          <div className="w-full px-4 mb-8 flex-1">
            {/* Main Image */}
            <img
              src={images}
              alt="Product"
              className="w-full h-80 md:h-96 rounded-lg shadow-md mb-4 object-contain bg-white p-6 pt-0.5 "
              id="mainImage"
            />

            {/* Store Info */}
            <div className="w-full flex flex-col p-4 bg-white shadow-lg gap-2 rounded-lg border border-gray-200">
              <div className="flex justify-between">
                <p className="flex items-center gap-1">
                  <FaStore size={12} className="text-primary-250" />
                  <span className="text-xs">{storeName}</span>
                </p>
                <p className="flex items-center text-xs gap-1">
                  <TiStar size={15} className="text-primary-250" />
                  <span>{rating}</span>
                  <span>({reviews})</span>
                </p>
              </div>

              <div className="flex justify-between">
                <p className="flex items-center gap">
                  <CiLocationOn size={15} className="text-primary-250" />
                  <span className="text-xs">{storeLocation}</span>
                </p>
                <button
                  className="flex items-center text-[10px] rounded-md border-primary-300 border p-1 hover:bg-primary-50 hover:text-primary-300"
                  onClick={() =>
                    // function invoke gardae xan while onclick event
                    handleStoreDetails(store, reviews, rating, category)
                  }
                >
                  Visit Store
                </button>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full px-4 flex-1">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <div className="flex items-center mb-4">
              <span className="ml-2 text-gray-600">({rating})</span>
              <span className="ml-2 text-green-600 text-xs">
                {reviews} Reviews
              </span>
              <span className="ml-2 text-xs text-amber-950">
                {units_sold} sold
              </span>
            </div>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2"> Rs. {price}</span>
              <span className="text-gray-500 line-through">
                {previous_price}
              </span>
            </div>

            {/* Colors Variant */}
            <div className="mb-3">
              <h3 className="text-sm font-semibold mb-2 uppercase">
                Available Colors
              </h3>
              <div className="flex gap-2">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => handleColor(color)}
                    className={`px-2 text-xs py-1.5 rounded-sm shadow-sm transition ${
                      selectedColor === color
                        ? "bg-primary-250 text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Available Sizes */}
            <div className="mb-3">
              <h3 className="text-sm font-semibold mb-2 uppercase">
                Select Size
              </h3>
              <div className="flex gap-2">
                {sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => handleSize(size)}
                    className={`px-2 text-xs py-1.5 rounded-sm shadow-sm transition ${
                      selectedSize === size
                        ? "bg-primary-250 text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* description */}
            <p className="text-gray-700 mb-3 text-sm">
              <span className="uppercase block font-semibold text-sm text-black mb-1">
                Description
              </span>
              {description}
            </p>

            {/* Buying process Buttons */}
            <div className="buttons my-8 flex gap-5">
              <button
                type="button"
                className="hover:bg-primary-450 bg-primary-350 duration-300 text-white border-primary-350 bordertext-white px-4 py-1.5 rounded-md"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="hover:bg-indigo-950 bg-indigo-800 duration-300 border-indigo-950 border text-white px-4 py-1.5 rounded-md"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
