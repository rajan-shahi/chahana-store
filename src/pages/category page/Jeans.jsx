import React, { useState } from "react"; 
import ProductData from "../../data/ProductData"; 
import ProductCard from "../../components/ProductCard"; 
import { useNavigate } from "react-router"; 
import { CiFilter } from "react-icons/ci"; 
import Filter from "../../components/Filter"; 

export default function Jeans({ addToCart }) {
  // Jeans component create garx ra props ma addToCart function linx.
  const navigate = useNavigate(); 

  // Filter state initialize garx, default empty list ra false values rakhera.
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
    navigate("/product-detail", { state: items }); // Product ko details state ma pass garera navigate garx.
  };

  // Unique brand values extract garera array banayeko.
  const uniqueBrands = [
    ...new Set(ProductData.categories.jeans.map((item) => item.brand)),
  ];

  // Unique size values flatten garera array banayeko.
  const uniqueSizes = [
    ...new Set(
      ProductData.categories.jeans.flatMap((item) => item.variants.sizes)
    ),
  ];

  // Unique color values flatten garera array banayeko.
  const uniqueColors = [
    ...new Set(
      ProductData.categories.jeans.flatMap((item) => item.variants.colors)
    ),
  ];

  // Unique gender values extract garera array banayeko.
  const uniqueGenders = [
    ...new Set(
      ProductData.categories.jeans.map((item) => item.category.gender)
    ),
  ];

  // Unique use values flatten garera array banayeko.
  const uniqueUses = [
    ...new Set(
      ProductData.categories.jeans.flatMap((item) => item.category.use)
    ),
  ];

  // Unique age group values extract garera array banayeko.
  const uniqueAgeGroups = [
    ...new Set(
      ProductData.categories.jeans.map((item) => item.category.age_group)
    ),
  ];

  // Filter change handler function banayeko.
  const handleFilterChange = (e, filterType) => {
    const value = e.target.value; // Input value store garx.
    setFilters((prevFilters) => {
      const updatedFilter = prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value) // Remove value if already selected.
        : [...prevFilters[filterType], value]; // Add value if not selected.

      return { ...prevFilters, [filterType]: updatedFilter }; // Updated filters state return garx.
    });
  };

  // Verified seller filter change handler.
  const handleVerifiedChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      verified: e.target.checked, // Checkbox ko value update garx.
    }));
  };

  // Products filter garna ko lagi logic.
  const filteredProducts = ProductData.categories.jeans.filter((item) => {
    return (
      (filters.brand.length === 0 || filters.brand.includes(item.brand)) && // Brand filter apply.
      (filters.size.length === 0 || item.variants.sizes.some((size) => filters.size.includes(size))) && // Size filter apply.
      (filters.color.length === 0 ||
        item.variants.colors.some((color) => filters.color.includes(color))) && // Color filter apply.
      (filters.gender.length === 0 ||
        filters.gender.includes(item.category.gender)) && // Gender filter apply.
      (filters.use.length === 0 ||
        item.category.use.some((use) => filters.use.includes(use))) && // Use filter apply.
      (filters.age.length === 0 ||
        filters.age.includes(item.category.age_group)) && // Age group filter apply.
      (!filters.verified || item.store.is_verified) // Verified seller filter apply.
    );
  });

  return (
    <>
      {/* Page header render garx. */}
      <h1 className="container mx-auto px-2 text-2xl font-semibold my-4 shadow-2xl  ">
        Category :{" "}
        <span className="text-primary-350 font-semibold text-2xl w-fit">
          {location.pathname}{" "}
        </span>
      </h1>

      {/* Main container flex layout. */}
      <div className="container mx-auto flex justify-between">
        {/* Filter section. */}
        <div className="gap-2 w-[25%] hidden md:flex flex-col sticky top-32 max-h-fit max-w-fit rounded-md m-1 py-2 pl-2 pr-10">
          <p className="text-lg font-semibold flex items-center">
            <span>
              <CiFilter size={25} />
            </span>{" "}
            Filter
          </p>

          {/* Filter component call for each filter type. */}
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

          {/* Verified sellers filter. */}
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

        {/* Product listing section. */}
        <div className="p1 w-[70%] flex-1">
          <div className="grid w-11/12 mx-auto grid-cols-1  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 lg:gap-2 gap-y-4 py-2">
            {filteredProducts.map((items, index) => (
              <ProductCard
                key={index} // Unique key assign garx React rendering ko lagi.
                items={items} // Product details pass garx.
                addToCart={addToCart} // Add to cart function pass garx.
                onClick={handleProductDetails} // Product detail click handler pass garx.
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
