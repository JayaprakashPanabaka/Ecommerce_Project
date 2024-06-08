import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Products = (props) => {
  const { product } = props;
  const { id, title, price, category, image, rating } = product;

  const {addToCart} = useContext(CartContext);

  let quantity = 1;

  const add_to_cart = () => {
    addToCart(product, quantity);
  }

  return (
    <div className="flex flex-col bg-orange-100 m-2 w-60 rounded-lg">
      <Link to={`/products/${id}`}>
        <div>
          <img src={image} alt={title} className="h-48 w-60 rounded-t-lg" />
        </div>
        <div className="px-4 py-5">
          <h3 className="truncate text-xl font-semibold font-serif mb-3">
            {title}
          </h3>
          <div className="flex justify-between my-2">
            <p className="flex items-center text-[14px] font-semibold">
              <img
                src="https://cdn-icons-png.flaticon.com/512/10961/10961066.png"
                className="h-4 mr-1"
                alt="star"
              />
              {rating.rate}
            </p>
            <p className="capitalize text-[14px] font-semibold">{category}</p>
          </div>
        </div>
      </Link>
      <div className="flex justify-between items-center px-4 pb-5">
        <p className="text-[18px] font-semibold text-cyan-600">Rs. {price}</p>
        <button onClick={add_to_cart} className="bg-green-700 py-1 px-3 rounded-lg text-white">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
