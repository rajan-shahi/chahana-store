import React from "react";
import { GoQuestion } from "react-icons/go";
import { LuRefreshCcwDot } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { RiCoupon3Line } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="w-full border-t mx-auto py-1  mt-20 ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:flex  md:items-center md:justify-between py-5 border-b md:gap-5 gap-10 px-5 ">
          {/* right */}
          <p className="text-2xl font-semibold ">We're Always Here To Help </p>

          {/* left */}
          <div className="grid  grid-cols-1 md:grid-cols-4 md:flex  md:gap-10 gap-8">
            <div className="group flex items-center gap-2 cursor-pointer">
              <GoQuestion
                size={20}
                className="group-hover:text-primary-300 duration-200 "
              />
              <p className="group-hover:text-primary-300 duration-200 ">
                Help Center
              </p>
            </div>

            <div className="group flex items-center gap-2 cursor-pointer">
              <LuRefreshCcwDot
                size={20}
                className="group-hover:text-primary-300 duration-200 "
              />
              <p className="group-hover:text-primary-300 duration-200 ">
                Return & Refund
              </p>
            </div>

            <div className="group flex items-center gap-2 cursor-pointer">
              <FiPhoneCall
                size={20}
                className="group-hover:text-primary-300 duration-200 "
              />
              <p className="group-hover:text-primary-300 duration-200 ">
                Contact Us
              </p>
            </div>

            <div className="group flex items-center gap-2 cursor-pointer">
              <RiCoupon3Line
                size={20}
                className="group-hover:text-primary-300 duration-200 "
              />
              <p className="group-hover:text-primary-300 duration-200 ">
                Coupon Code
              </p>
            </div>
          </div>
        </div>

        {/* social media */}
        <div className=" md:flex md:justify-between    pt-5 px-5">
          <div className=" flex md:justify-center md:items-center gap-5">
            <p className="capitalize pb-2">follow us</p>
            {/* social icons */}
            <div className="flex items-center gap-2">
              <span className="py-1  cursor-pointer">
                <FaFacebook size={20} className=" text-yellow-700" />
              </span>
              <span className="py-1  cursor-pointer">
                <FaInstagram size={20} className=" text-yellow-700" />
              </span>
            </div>
          </div>
          <div > @2025 Develop And Design by Rajan Shahi</div>
        </div>
      </div>
    </>
  );
}
