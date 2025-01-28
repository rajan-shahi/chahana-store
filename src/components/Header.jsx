import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router"; // Ensure `react-router-dom` is used
import { IoSearchOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import logo from "../assets/logo.svg"; // Update this path as needed

export default function Header({ cartCount, user }) {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location.pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement search logic here (e.g., trigger search API)
  };

  const userInitials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
    : "CH";

  const categories = [
    { name: "Clothing", items: ["Jeans", "T-Shirts", "Jackets", "Sweaters"] },
    { name: "Accessories", items: ["Bags", "Belts", "Sunglasses", "Watches"] },
    {
      name: "Electronics",
      items: ["Laptops", "Smartphones", "Smartwatches", "Headphones"],
    },
    { name: "Footwear", items: ["Shoes", "Sneakers", "Boots", "Sandals "] },
  ];

  return (
    <div className="w-full bg-white sticky top-0 shadow-md z-50 backdrop-blur">
      {/* Main Header */}
      <div className="md:w-11/12 mx-auto flex justify-between items-center py-3 px-5">
        {/* Logo */}
        <Link to="/" aria-label="Home">
          <img
            className="md:w-[220px] sm:w-[180px] w-[130px]"
            src={logo}
            alt="Logo"
          />
        </Link>

        {/* Search Bar */}
        <form
          className="hidden md:flex w-3/6 rounded-full border border-primary-300 px-4 gap-5 py-1 h-8"
          onSubmit={handleSubmit}
          role="search"
        >
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search"
            className="px-2 bg-transparent focus:outline-none w-full"
          />
          <button
            className="w-6 h-6 bg-primary-100 text-primary-400 font-semibold rounded-full flex items-center justify-center"
            type="submit"
            aria-label="Search"
          >
            <IoSearchOutline size={15} />
          </button>
        </form>

        {/* User Actions */}
        <div className="flex items-center gap-3">
          {/* Profile */}
          <Link
            to="/profile"
            className="bg-primary-100 rounded-full p-1 text-secondary-500 text-[10px] text-center"
            title="Profile"
          >
            {userInitials}
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative px-3 py-1 rounded-xl hover:bg-primary-50 transition-colors"
            title="Cart"
          >
            <BsCart2 size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-primary-100 text-primary-300 text-xs font-semibold rounded-full px-1.5">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Horizontal Divider */}
      <hr className="border-b mt-2" />

      {/* Categories with Hover Dropdown */}
      <nav className="hidden md:flex justify-center text-sm gap-8 pt-2 pb-3 relative">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setActiveCategory(index)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            {/* Main Category */}
            <span
              className={`cursor-pointer font-medium px-2 py-1 hover:text-primary-500 ${
                location.pathname.includes(category.name.toLowerCase())
                  ? "text-primary-700"
                  : "text-gray-700"
              }`}
            >
              {category.name}
            </span>

            {/* Dropdown Items */}
            <div
              className={`absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 p-2 flex flex-col gap-1 transform scale-0 group-hover:scale-100 transition-transform origin-top`}
              role="menu"
            >
              {category.items.map((item) => (
                <Link
                  to={`/${item.toLowerCase()}`}
                  key={item}
                  className={`hover:bg-primary-100 px-3 py-2 rounded text-gray-700 hover:text-primary-600 ${
                    location.pathname.includes(item.toLowerCase())
                      ? "bg-primary-200 text-indigo-900 font-semibold"
                      : ""
                  }`}
                  role="menuitem"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}
