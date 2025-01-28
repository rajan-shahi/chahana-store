import React, { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wishlist from "./pages/Wishlist";
import ProductDetail from "./pages/Product Detail/ProductDetail";
import StoreProfile from "./pages/StoreProfile";
import Jeans from "./pages/category page/Jeans";
import Bags from "./pages/category page/Bags";
import Glasses from "./pages/category page/Glasses";
import Shoes from "./pages/category page/Shoes";
import SmartPhone from "./pages/category page/SmartPhone";
import SmartWatch from "./pages/category page/SmartWatch";
import Laptops from "./pages/category page/Laptops";
import toast, { Toaster } from "react-hot-toast";
import Buy from "./pages/Buy";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (items) => {
    setCart((prevCart) => [...prevCart, items]);
    toast.success("Item added to cart.");
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <>
      <BrowserRouter>
        <Header cartCount={cart.length} />

        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />

          <Route path="/wishlist" element={<Wishlist />} />
          <Route
            path="/product-detail"
            element={<ProductDetail addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cart} removeFromCart={removeFromCart} />}
          />
          <Route path="/storeProfile" element={<StoreProfile />} />
          <Route path="/jeans" element={<Jeans addToCart={addToCart} />} />
          <Route path="/bags" element={<Bags addToCart={addToCart} />} />
          <Route path="/glasses" element={<Glasses addToCart={addToCart} />} />
          <Route path="/shoes" element={<Shoes addToCart={addToCart} />} />
          <Route
            path="/smartphone"
            element={<SmartPhone addToCart={addToCart} />}
          />
          <Route path="/laptops" element={<Laptops addToCart={addToCart} />} />
          <Route
            path="/smartwatch"
            element={<SmartWatch addToCart={addToCart} />}
          />
          <Route path="/buy" element={<Buy />} />
        </Routes>

        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
}
