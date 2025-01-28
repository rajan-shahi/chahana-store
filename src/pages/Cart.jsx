import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router"; // Import useLocation for location.pathname
import toast from "react-hot-toast";

export default function Cart({ cartItems: initialCartItems, removeFromCart }) {
  const [cartItems, setCartItems] = useState(
    initialCartItems.map((item) => ({
      ...item,
      quantity: item.quantity || 1, // Ensure each item has a quantity field
    }))
  );

  // Remove item from the cart
  const removeItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
    removeFromCart(index); // Call the function passed from parent to handle removal globally
    toast.success("Item Removed from Cart");
  };

  // Increase item quantity
  const incItem = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].quantity += 1; // Increase quantity by 1
      return updatedItems;
    });
  };

  // Decrease item quantity
  const decItem = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      if (updatedItems[index].quantity > 1) {
        // Prevent going below 1
        updatedItems[index].quantity -= 1; // Decrease quantity by 1
      }
      return updatedItems;
    });
  };

  // Calculate total cost
  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="w-11/12 mx-auto mt-2">
        <h1 className="container mx-auto px-2 text-2xl font-semibold my-2 shadow-2xl">
          <span className="text-primary-350 font-semibold text-2xl w-fit">
            <span className="  text-gray-800">Home</span> {location.pathname}{" "}
          </span>
        </h1>
        <div className="sm:flex shadow-md my-10">
          {/* Cart Items Section */}
          <div className="w-full sm:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">
                {cartItems.length} Items
              </h2>
            </div>

            {cartItems.length > 0 ? (
              cartItems.map((item, index) => {
                // Debugging: log item to check its structure
                console.log(item);

                return (
                  <div
                    key={index}
                    className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50"
                  >
                    <div className="md:w-4/12 2xl:w-1/4 w-full flex justify-center p-2 md:border-0 border  border-yellow-500 rounded-sm my-2">
                      <img
                        src={item.images}
                        alt={item.title}
                        className="md:h-36 h-52 w-full object-center object-contain"
                      />
                    </div>
                    <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                      <p className="text-base font-semibold leading-none text-gray-800">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-600 mt-2 font-semibold">
                        Material:{" "}
                        <span className="text-xs">{item.materials}</span>
                      </p>
                      <div className=" grid md:grid-cols-2  gap-4 items-center pt-5">
                        <div className="flex items-center">
                          <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                            <FaRegHeart size={20} />
                          </p>
                          <p
                            onClick={() => removeItem(index)} // Updated to remove item correctly
                            className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                          >
                            <MdOutlineRemoveShoppingCart
                              size={20}
                              title="Remove Item from the cart."
                            />
                          </p>
                          <div className="flex items-center ml-5 gap-4">
                            <span className="text-sm">Quantity:</span>
                            <div className="flex items-center gap-x-3 px-1 bg-slate-50 border rounded-sm">
                              <button
                                onClick={() => decItem(index)} // Decrease quantity
                                className="text-2xl px-2"
                              >
                                -
                              </button>
                              <span className="border-l-2 border-slate-300 h-5">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => incItem(index)} // Increase quantity
                                className="text-xl px-2"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <p className=" flex md:justify-end text-base font-bold text-gray-800">
                          Rs. {(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-gray-600 mt-5">Your cart is empty.</p>
            )}

            <Link
              to={"/"}
              className="flex font-semibold bg-primary-350 text-white p-3 w-fit  text-xs mt-10 items-center gap-2 rounded-md hover:bg-primary-250 duration-500"
            >
              <FaArrowLeftLong size={15} />
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary Section */}
          <div
            id="summary"
            className="w-full sm:w-1/4 md:w-1/2 px-8 py-10 sticky top-5 h-fit bg-gray-100"
          >
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {cartItems.length}
              </span>
              <span className="font-semibold text-sm">
                Rs. {totalCost.toLocaleString()}
              </span>
            </div>
            <div>
              <label
                htmlFor="shipping"
                className="font-medium inline-block mb-3 text-sm uppercase"
              >
                Shipping
              </label>
              <select
                id="shipping"
                className="block p-2 text-gray-600 w-full text-sm"
              >
                <option>Standard Shipping - Rs. 100</option>
              </select>
            </div>
            <div className="py-10">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-primary-300 px-5 py-2 text-sm text-white uppercase rounded-md">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>Rs. {(totalCost + 100).toLocaleString()}</span>
              </div>
              <button className="bg-primary-300 font-semibold py-3 text-sm text-white uppercase w-full rounded-md g= hover:bg-primary-250 duration-500">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import React, { useState } from "react";
// import { FaRegHeart } from "react-icons/fa";
// import { MdOutlineRemoveShoppingCart } from "react-icons/md";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { Link } from "react-router"; // Import useLocation for location.pathname
// import toast from "react-hot-toast";

// export default function Cart({ cartItems: initialCartItems, removeFromCart }) {
//   const [cartItems, setCartItems] = useState(initialCartItems);

//   // Remove item from the cart
//   const removeItem = (index) => {
//     setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
//     removeFromCart(index); // Call the function passed from parent to handle removal globally
//     toast.success("Item Removed from Cart");
//   };

//   // Calculate total cost
//   const totalCost = cartItems.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <>
//       <div className="w-11/12 mx-auto mt-2">
//         <h1 className="container mx-auto px-2 text-2xl font-semibold my-2 shadow-2xl">
//           <span className="text-primary-350 font-semibold text-2xl w-fit">
//             {location.pathname}{" "}
//           </span>
//         </h1>
//         <div className="sm:flex shadow-md my-10">
//           {/* Cart Items Section */}
//           <div className="w-full sm:w-3/4 bg-white px-10 py-10">
//             <div className="flex justify-between border-b pb-8">
//               <h1 className="font-semibold text-2xl">Shopping Cart</h1>
//               <h2 className="font-semibold text-2xl">
//                 {cartItems.length} Items
//               </h2>
//             </div>

//             {cartItems.length > 0 ? (
//               cartItems.map((item, index) => {
//                 // Debugging: log item to check its structure
//                 console.log(item);

//                 return (
//                   <div
//                     key={index}
//                     className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50"
//                   >
//                     <div className="md:w-4/12 2xl:w-1/4 w-full flex justify-center p-2 md:border-0 border border-indigo-500 rounded-sm my-2">
//                       <img
//                         src={item.images}
//                         alt={item.title}
//                         className="md:h-36 h-52 w-full object-center object-contain"
//                       />
//                     </div>
//                     <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
//                       <p className="text-base font-semibold leading-none text-gray-800">
//                         {item.title}
//                       </p>
//                       <p className="text-sm text-gray-600 mt-2 font-semibold">
//                         Material:{" "}
//                         <span className="text-xs">{item.materials}</span>
//                       </p>
//                       <div className="flex items-center justify-between pt-5">
//                         <div className="flex items-center">
//                           <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
//                             <FaRegHeart size={20} />
//                           </p>
//                           <p
//                             onClick={() => removeItem(index)} // Updated to remove item correctly
//                             className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
//                           >
//                             <MdOutlineRemoveShoppingCart
//                               size={20}
//                               title="Remove Item from the cart."
//                             />
//                           </p>
//                           <div className="flex items-center ml-5 gap-2">
//                             <span className="text-sm">Quantity:</span>
//                             <div className="flex items-center gap-x-3 px-1 bg-slate-50 border rounded-sm">
//                               <button
//                                 onClick={() => decItem(index)}
//                                 className="text-2xl px-2"
//                               >
//                                 -
//                               </button>
//                               <span className="border-l-2 border-slate-300 h-5"></span>
//                               <button
//                                 onClick={() => incItem(index)}
//                                 className="text-xl px-2"
//                               >
//                                 +
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                         <p className="text-base font-bold text-gray-800">
//                           Rs. {item.price.toLocaleString()}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })
//             ) : (
//               <p className="text-gray-600 mt-5">Your cart is empty.</p>
//             )}

//             <Link
//               to={"/"}
//               className="flex font-semibold bg-primary-350 text-white p-3 w-fit rounded-sm text-sm mt-10 items-center gap-2"
//             >
//               <FaArrowLeftLong size={20} />
//               Continue Shopping
//             </Link>
//           </div>

//           {/* Order Summary Section */}
//           {/* Order Summary Section */}
//           <div
//             id="summary"
//             className="w-full sm:w-1/4 md:w-1/2 px-8 py-10 sticky top-5 h-fit bg-gray-100"
//           >
//             <h1 className="font-semibold text-2xl border-b pb-8">
//               Order Summary
//             </h1>
//             <div className="flex justify-between mt-10 mb-5">
//               <span className="font-semibold text-sm uppercase">
//                 Items {cartItems.length}
//               </span>
//               <span className="font-semibold text-sm">
//                 Rs. {totalCost.toLocaleString()}
//               </span>
//             </div>
//             <div>
//               <label
//                 htmlFor="shipping"
//                 className="font-medium inline-block mb-3 text-sm uppercase"
//               >
//                 Shipping
//               </label>
//               <select
//                 id="shipping"
//                 className="block p-2 text-gray-600 w-full text-sm"
//               >
//                 <option>Standard Shipping - Rs. 100</option>
//               </select>
//             </div>
//             <div className="py-10">
//               <label
//                 htmlFor="promo"
//                 className="font-semibold inline-block mb-3 text-sm uppercase"
//               >
//                 Promo Code
//               </label>
//               <input
//                 type="text"
//                 id="promo"
//                 placeholder="Enter your code"
//                 className="p-2 text-sm w-full"
//               />
//             </div>
//             <button className="bg-primary-300 px-5 py-2 text-sm text-white uppercase">
//               Apply
//             </button>
//             <div className="border-t mt-8">
//               <div className="flex font-semibold justify-between py-6 text-sm uppercase">
//                 <span>Total cost</span>
//                 <span>Rs. {(totalCost + 100).toLocaleString()}</span>
//               </div>
//               <button className="bg-primary-300 font-semibold py-3 text-sm text-white uppercase w-full">
//                 Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
