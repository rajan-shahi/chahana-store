import React, { useState } from "react";
import ProductData from "../../data/ProductData";
import ProductCard from "../../components/ProductCard";
import { useNavigate } from "react-router";
import { CiFilter } from "react-icons/ci";
import Filter from "../../components/Filter";  // Import the Filter component

export default function laptop({ addToCart }) {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    brand: [],
    size: [],
    color: [],
    gender: [],
    use: [],
    age: [],
    verified: false,
  });

  const handleProductDetails = (items) => {
    navigate("/product-detail", { state: items });
  };

  // Extract unique values from the product data
  const uniqueBrands = [...new Set(ProductData.categories.laptop.map((item) => item.brand))];
  const uniqueSizes = [
    ...new Set(ProductData.categories.laptop.flatMap((item) => item.variants.sizes)),
  ];
  const uniqueColors = [
    ...new Set(ProductData.categories.laptop.flatMap((item) => item.variants.colors)),
  ];
  const uniqueGenders = [
    ...new Set(ProductData.categories.laptop.map((item) => item.category.gender)),
  ];
  const uniqueUses = [
    ...new Set(ProductData.categories.laptop.flatMap((item) => item.category.use)),
  ];
  const uniqueAgeGroups = [
    ...new Set(ProductData.categories.laptop.map((item) => item.category.age_group)),
  ];

  const handleFilterChange = (e, filterType) => {
    const value = e.target.value;
    setFilters((prevFilters) => {
      const updatedFilter = prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value];
      return { ...prevFilters, [filterType]: updatedFilter };
    });
  };

  const handleVerifiedChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      verified: e.target.checked,
    }));
  };

  const filteredProducts = ProductData.categories.laptop.filter((item) => {
    return (
      (filters.brand.length === 0 || filters.brand.includes(item.brand)) &&
      (filters.size.length === 0 ||
        item.variants.sizes.some((size) => filters.size.includes(size))) &&
      (filters.color.length === 0 ||
        item.variants.colors.some((color) => filters.color.includes(color))) &&
      (filters.gender.length === 0 || filters.gender.includes(item.category.gender)) &&
      (filters.use.length === 0 || item.category.use.some((use) => filters.use.includes(use))) &&
      (filters.age.length === 0 || filters.age.includes(item.category.age_group)) &&
      (!filters.verified || item.store.is_verified)
    );
  });

  return (
    <>
     <h1 className="container mx-auto px-2 text-2xl font-semibold my-4 shadow-2xl  ">
        Category : <span className="text-primary-350 font-semibold text-2xl w-fit">{location.pathname} </span>
      </h1>
      <div className="container mx-auto flex justify-between">

        {/* Filter Section */}
        <div className="gap-2 w-[25%] hidden md:flex flex-col sticky top-32 max-h-fit max-w-fit rounded-md m-1 py-2 pl-2 pr-10">
          <p className="text-lg font-semibold flex items-center">
            <span>
              <CiFilter size={25} />
            </span>{" "}
            Filter
          </p>

          {/* Use the Filter component for each filter category */}

          <Filter
            title="Brand"
            options={uniqueBrands}
            filterType="brand"
            filters={filters}
            handleFilterChange={handleFilterChange}
          />

          <Filter
            title="Size"
            options={uniqueSizes}
            filterType="size"
            filters={filters}
            handleFilterChange={handleFilterChange}
          />

          <Filter
            title="Colors"
            options={uniqueColors}
            filterType="color"
            filters={filters}
            handleFilterChange={handleFilterChange}
          />

          <Filter
            title="Gender"
            options={uniqueGenders}
            filterType="gender"
            filters={filters}
            handleFilterChange={handleFilterChange}
          />

          <Filter
            title="Use"
            options={uniqueUses}
            filterType="use"
            filters={filters}
            handleFilterChange={handleFilterChange}
          />

          <Filter
            title="Age Group"
            options={uniqueAgeGroups}
            filterType="age"
            filters={filters}
            handleFilterChange={handleFilterChange}
          />

          {/* Verified Filter */}
          <div className="flex flex-col">
            <p>Verified Sellers</p>
            <div className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={filters.verified}
                onChange={handleVerifiedChange}
              />
              Verified Only
            </div>
          </div>
        </div>

        {/* Product Listing */}
        <div className="p1 w-[70%] flex-1">
          <div className="grid w-11/12 mx-auto grid-cols-1  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 lg:gap-2 gap-y-4 py-2">
            {filteredProducts.map((items, index) => (
              <ProductCard
                key={index}
                items={items}
                addToCart={addToCart}
                onClick={handleProductDetails}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
