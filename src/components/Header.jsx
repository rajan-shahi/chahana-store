import React, { useEffect } from "react";
import { Link, useLocation } from "react-router"; // Fixed typo with 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import logo from "../assets/logo.svg"; // Update the path as necessary

export default function Header({ cartCount, user }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement search logic here
  };

  const userInitials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
    : "CH";

  return (
    <div className="w-full bg-white sticky top-0 shadow-md md:px-0 px-5 z-50 backdrop-blur">
      <div className=" md:w-11/12 mx-auto flex justify-between items-center py-3">
        {/* Logo */}
        <Link to="/">
          <img
            className="md:w-[220px] sm:w-[180px] w-[130px]"
            src={logo}
            alt="Logo"
          />
        </Link>

        {/* Search Bar */}
        <form
          className="w-3/6 rounded-full border border-primary-300 px-4 gap-5 py-1 h-8 md:flex hidden"
          onSubmit={handleSubmit}
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
          >
            <IoSearchOutline size={15} />
          </button>
        </form>

        {/* User Actions */}
        <div className="flex items-center gap-2 lg:gap-3">
          <Link
            to="/profile"
            className="bg-primary-100 rounded-full p-1 text-secondary-500 text-[10px] text-center"
            title="Profile"
          >
            {userInitials}
          </Link>
          <Link
            to="/cart"
            className="relative md:px-3 py-1 rounded-xl bg-transparent hover:bg-primary-50 duration-150 transition-colors"
            title="Cart"
          >
            <BsCart2 size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 md:right-1 bg-primary-100 text-primary-300 text-xs font-semibold rounded-full px-1.5">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Horizontal Line */}
      <span className="border-b mt-2 container mx-auto flex"></span>

      {/* Secondary Menu */}
      <div className="md:flex hidden justify-center text-xs gap-5 pt-2 pb-3">
        {[
          "Jeans",
          "Bags",
          "Glasses",
          "Shoes",
          "Smartphone",
          "Laptops",
          "Smartwatch",
        ].map((item) => (
          <Link
            to={`/${item.toLowerCase()}`}
            key={item}
            className={`hover:bg-primary-150 px-1.5 py-1 relative  ${
              location.pathname.includes(item.toLowerCase())
                ? "font-semibold bg-primary-200 text-indigo-900 rounded-sm "
                : ""
            }`}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
