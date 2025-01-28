import React, { useState } from "react";
import { useLocation } from "react-router";

export default function Buy() {
  const location = useLocation();
  const { item } = location.state || {}; // Retrieve the passed item data

  if (!item) {
    return <div>No item details available.</div>;
  }

  const [paymentMethod, setPaymentMethod] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState(""); // User name input
  const [phoneNumber, setPhoneNumber] = useState(""); // Phone number input
  const [email, setEmail] = useState(""); // Email input
  const [locationInput, setLocationInput] = useState(""); // For location input
  const [paymentDetails, setPaymentDetails] = useState(""); // For payment details

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocationInput(event.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handlePaymentDetailsChange = (event) => {
    setPaymentDetails(event.target.value);
  };

  const isFormValid = () => {
    return (
      isLoggedIn &&
      locationInput &&
      paymentMethod &&
      paymentDetails &&
      userName &&
      phoneNumber &&
      email
    );
  };

  return (
    <div className="flex justify-center items-center py-10 md:px-0 px-4">
      <div className="flex flex-col lg:flex-row justify-between md:w-11/12 lg:w-10/12 bg-white rounded-lg md:shadow-lg">
        {/* Item Details Section */}
        <div className=" flex flex-col justify-center md:items-center md:flex-1 lg:border-r lg:pr-8 px-4 py-6 h-max  ">
          <img
            src={item.images}
            alt={item.title || "Product Image"}
            className=" h-[170px] mb-4 object-contain rounded-md"
          />
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            {item.title}
          </h2>
          <p className=" flex  items-center gap-2 mb-4">
            <p className="text-xl font-bold text-primary-350">
              Rs. {item.price}
            </p>
            <p className="text-sm text-gray-500 line-through">
              Rs. {item.previous_price}
            </p>{" "}
          </p>
          <p className=" text-gray-600 mb-2">{item.description}</p>
        </div>

        {/* Buy Section */}
        <div className="md:flex-1 lg:px-8 py-6">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Complete Your Purchase
          </h2>
          <form className="flex flex-col gap-4">
            {/* Display product name as text */}
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2">
                Product Name
              </label>
              <input
                type="text"
                value={item.title}
                className="border p-2 rounded-md w-full text-gray-700 bg-gray-100"
                readOnly
              />
            </div>

            {/* User details section */}
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="border p-2 rounded-md w-full"
                required
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border p-2 rounded-md w-full"
                required
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded-md w-full"
                required
              />
            </div>

            {/* Location input */}
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2">
                Your Location
              </label>
              <input
                type="text"
                placeholder="Enter delivery location"
                value={locationInput}
                onChange={handleLocationChange}
                className="border p-2 rounded-md w-full"
                required
              />
            </div>

            {/* Payment Method Dropdown */}
            <div>
              <label
                htmlFor="payment"
                className="text-sm font-semibold text-gray-700 mb-2"
              >
                Choose Payment Method
              </label>
              <select
                id="payment"
                value={paymentMethod}
                onChange={handlePaymentChange}
                className="border p-2 rounded-md w-full"
                required
              >
                <option value="">Select Payment Method</option>
                <option value="esewa">eSewa</option>
                <option value="bank_transfer">Bank Transfer</option>
                <option value="khalti">Khalti</option>
                <option value="credit_card">Credit Card</option>
              </select>
            </div>

            {/* Conditional rendering for login after choosing payment method */}
            {paymentMethod && !isLoggedIn && (
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Please Login to Continue
                </h3>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border p-2 rounded-md w-full mb-4"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border p-2 rounded-md w-full mb-4"
                />
                <button
                  type="submit"
                  onClick={handleLoginSubmit}
                  className="bg-primary-350 hover:bg-primary-250 text-white py-2 rounded-md w-full"
                >
                  Login
                </button>
              </div>
            )}

            {/* Conditional rendering for additional payment details after login */}
            {isLoggedIn && paymentMethod && (
              <div className="mt-4">
                <label className="text-sm font-semibold text-gray-700 mb-2">
                  {paymentMethod === "esewa"
                    ? "eSewa Number"
                    : paymentMethod === "bank_transfer"
                    ? "Bank Account Number"
                    : paymentMethod === "khalti"
                    ? "Khalti Number"
                    : "Credit Card Number"}
                </label>
                <input
                  type="text"
                  placeholder={`Enter ${
                    paymentMethod === "esewa"
                      ? "eSewa Number"
                      : paymentMethod === "bank_transfer"
                      ? "Bank Account Number"
                      : paymentMethod === "khalti"
                      ? "Khalti Number"
                      : "Credit Card Number"
                  }`}
                  value={paymentDetails}
                  onChange={handlePaymentDetailsChange}
                  className="border p-2 rounded-md w-full"
                  required
                />
              </div>
            )}

            {/* Confirm Purchase Button */}
            {isFormValid() && (
              <button
                type="submit"
                className="bg-primary-350 hover:bg-primary-250 text-white py-2 rounded-md mt-4"
              >
                Confirm Purchase
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
