import React from "react";
import { Link } from "react-router";
export default function Category() {
  return (
    <>
      <div className="container mx-auto flex flex-col md:px-0 px-5">
        {/* Category title */}
        <div className="  mt-16 mb-10 ">
          <span className="md:text-2xl  sm:text-2xl lg:text-3xl text-xl font-bold px-2">
            Category
          </span>
        </div>

        {/* category icons */}
        <div className="flex gap-2 sm:gap-3 md:gap-0 flex-wrap justify-between bg-white rounded-sm p-2">

          <Link to={"/jeans"} className="flex  flex-col gap-2  p-2 bg-white ">
            <img
              className="md:h-24 sm:h-16 h-14 a  w-full object-contain cursor-pointer"
              src="https://media.istockphoto.com/id/1076492576/vector/pants-cartoon.jpg?s=612x612&w=0&k=20&c=7x-Y65s9B47yqGxCVLiTWvgYYAjqi0zdffvp1EgeHN8="
              title="jeans"
            />
            <p className="md:text-sm text-sm text-center ">Unisex Jeans </p>
          </Link>

          <Link to={"/bags"} className="flex  flex-col gap-2  p-2  bg-white">
            <img
              className="md:h-24 sm:h-16 h-14 a  w-full object-contain cursor-pointer"
              src="https://media.istockphoto.com/id/1366623059/vector/vector-leather-brown-womens-bag-with-handles.jpg?s=612x612&w=0&k=20&c=cLbt0Pr5mOEroKIF4i5J_PEKc5kQMnfMZhEtgfFXTwY="
              title="Bag"
            />
            <p className="md:text-sm text-xs text-center">Unisex Bags</p>
          </Link>

          <Link to={"/glasses"} className="flex  flex-col gap-2  p-2  bg-white ">
            <img
              className="md:h-24 sm:h-16 h-14 a  w-full object-contain cursor-pointer"
              src="https://media.istockphoto.com/id/1181692373/vector/sunglasses-flat-icon-with-long-shadow-summer-accessory-for-uv-protection-vector-illustration.jpg?s=612x612&w=0&k=20&c=GI3Y4rJrBv08IJw1ma-5-CiTp3xfXHDzz8rehLFwHHU="
              title="Glasses"
            />
            <p className="md:text-sm text-xs text-center">Eye Glasses</p>
          </Link>

          <Link to={"/shoes"} className="flex  flex-col gap-2  p-2  bg-white">
            <img
              className="md:h-24 sm:h-16 h-14 a  w-full object-contain cursor-pointer"
              src="https://media.istockphoto.com/id/822934436/vector/sneaker-icon.jpg?s=612x612&w=0&k=20&c=O6y1hOn2t3jw-EJ94951ffur338cq6Lx-nvWum9nnyI="
              title="Shoes"
            />
            <p className="md:text-sm text-xs text-center"> Unisex shoes</p>
          </Link>

          <Link to={"/smartphone"} className="flex  flex-col gap-2  p-2  bg-white">
            <img
              className="md:h-24 sm:h-16 h-14 a  w-full object-contain cursor-pointer"
              src="https://media.istockphoto.com/id/1238395731/vector/phone-orange-wednesday-silver.jpg?s=612x612&w=0&k=20&c=t9QerXwitGxyTC6AiaRSjHaKf2cDY-XuKB12HBnmcVY="
              title="Smart Phone"
            />
            <p className="md:text-sm text-xs text-center">Smart Phones</p>
          </Link>

          <Link to={"/laptops"} className="flex  flex-col gap-2  p-2  bg-white ">
            <img
              className="md:h-24 sm:h-16 h-14 a  w-full object-contain cursor-pointer"
              src="https://media.istockphoto.com/id/1289322128/vector/calculation.jpg?s=612x612&w=0&k=20&c=P7f62vGDmpE2GXCnGdaw1SCJY-bqauaFZnDQb0OQW6Y="
              title="Laptop"
            />
            <p className="md:text-sm text-xs text-center">Laptops/Desktop</p>
          </Link>

          <Link
            to={"/smartwatch"}
            className="flex  flex-col gap-2  p-2  bg-white "
          >
            <img
              className="md:h-24 sm:h-16 h-14 a  w-full object-contain cursor-pointer"
              src="https://media.istockphoto.com/id/2167419271/vector/smart-watch-icon.jpg?s=612x612&w=0&k=20&c=bL8ccVaU3x1CwOShxocpgBaEXpnqpIm5HsK2SmcntiQ="
              title="Laptop"
            />
            <p className="md:text-sm text-xs text-center">Smart Watch</p>
          </Link>
        </div>
      </div>
    </>
  );
}
