import { AiOutlineFire } from "react-icons/ai";
import ProductCard from "./ProductCard"; // Import the ProductCard component
import ProductData from "../data/ProductData";
import { useNavigate } from "react-router";

export default function FlashSale({ addToCart }) {
  const navigate = useNavigate();

  const visibleItems = 4;

  const handleProductDetails = (items) => {
    navigate("/product-detail", { state: items }); //passing full product details
  };

  return (
    <>
      {/* flash sale title */}
      <div className="flash-sale-title container mx-auto px-4 flex items-center gap-2 py-5">
        <AiOutlineFire size={30} className="text-primary-350 " />
        <span className="text-2xl font-semibold">Flash Sale</span>
      </div>

      {/* All Product Container */}
      <div className="grid container mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-y-4 sm:gap-y-8 py-2 md:px-4">
        {ProductData.categories.jeans
          .slice(0, visibleItems)
          .map((items, index) => (
            <ProductCard
              key={index}
              items={items}
              addToCart={addToCart}
              onClick={handleProductDetails}
            />
          ))}
      </div>
    </>
  );
}
