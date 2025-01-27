import React from "react";
import { useLocation, useNavigate } from "react-router";
import { VscVerified } from "react-icons/vsc";
import ProductCard from "../components/ProductCard";

export default function StoreProfile() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    name: storeName = "Unknown Store",
    location: storeLocation = "Unknown Location",
    established: established = "Not Available",
    is_verified: is_verified = false,
    products = [],
  } = location.state.store || {};

  const handleProductDetails = (items) => {
    navigate("/product-detail", { state: items });
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-start">
      {/* Store Logo */}
      <div className="flex items-center justify-start">
        <div className="img-container">
          <img
            src="https://shoping-store-egvv.vercel.app/_next/image?url=%2Fimages%2Fstore.jpg&w=128&q=75"
            alt="Store Logo"
          />
        </div>

        {/* Store Details */}
        <div className="store-details ml-4 flex flex-col gap-1">
          <p className="text-lg font-semibold text-secondary-400">
            {storeName}
          </p>
          <p className="text-md font-semibold text-secondary-400">
            {storeLocation}
          </p>
          <div className="flex items-center gap-2">
            <p className="text-sm"> Est: {established}</p>
            <p>
              {is_verified && is_verified !== "Not Available" && (
                <span className="text-green-500 text-xs font-semibold ml-1 bg-primary-50 rounded-full px-2 py-1 flex items-center gap-1">
                  <VscVerified size={18} />
                  Verified
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
      {/* Products List */}
    </div>
  );
}
