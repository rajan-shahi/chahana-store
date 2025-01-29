import { BsCart2 } from "react-icons/bs";
import { TiStar } from "react-icons/ti";
import { useNavigate } from "react-router";

const ProductCard = ({ items, addToCart, onClick }) => {
  const navigate = useNavigate();

  if (!items) return null; // Avoid rendering errors when no data is passed.

  const handleBuyNow = (item) => {
    navigate("/buy", { state: { item } }); // Pass item data to the Buy page
  };

  if (!items) return null; // to avoid rendering errors when no data is passed.
  return (
    <article className="card flex flex-col border rounded-xl bg-white relative shadow-md pb-1 group md:mx-0 mx-5  group">
      {/* img container */}
      <div className="card-img  h-[170px] rounded-t-xl relative overflow-hidden">
        <img
          loading="lazy"
          src={items.images}
          alt={items.title || "product image"}
          className="object-contain w-full h-full relative cursor-pointer px-2 pt-2 group-hover:scale-105 duration-500"
          onClick={() => onClick(items)}
        />

        {/* overlay offers and tag */}
        <div className="overlay absolute top-2 left-2 gap-2 flex items-center">
          <span className="text-[10px] px-1 py-0.5 rounded-md text-white border-[0.25px] border-indigo-800 bg-indigo-800">
            -5% off
          </span>
          <span className="text-[10px] px-1 p-0.5 border-[0.25px] border-primary-300 rounded-md text-black bg-white ">
            Best Deal
          </span>
        </div>
      </div>

      {/* card Details */}
      <div className="card-details flex flex-col gap-2 px-3 py-3">
        <h2
          className="card-title font-semibold text-md cursor-pointer"
          onClick={() => onClick(items)}
        >
          {items.title}
        </h2>
        <div className="flex items-center justify-between">
          {/* if kunae items haru payen vane */}
          <p className="text-xs text-gray-600 flex items-center gap-1">
            <TiStar className="text-primary-250" size={18} />
            {items.rating || "N/A"} ({items.reviews || 0})
          </p>

          <p className="text-sm">
            <span className="text-xs line-through text-gray-400">
              Rs {items.previous_price}
            </span>
            <span className="text-sm font-semibold"> Rs. {items.price}</span>
          </p>
        </div>
        <div className="flex justify-between  items-center gap-2 mt-2">
          <div className=" flex gap-2 justify-center items-center">
            <button
              onClick={() => addToCart(items)}
              type="button"
              className="text-xs px-3 py-1"
            >
              <BsCart2
                size={22}
                className="text-black drop-shadow-md hover:text-primary-350 duration-500"
              />
            </button>
          </div>
          <button
            onClick={() => handleBuyNow(items)}
            className="text-sm px-5 bg-primary-350 hover:bg-primary-250 text-white rounded-md py-1 shadow-md"
          >
            Buy Now
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
