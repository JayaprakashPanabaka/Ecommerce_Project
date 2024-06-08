import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  // console.log(id);

  const [productData, setProductData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(false);

  const quantityDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const quantityIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  useEffect(() => {
    let url = `https://fakestoreapi.com/products/${id}`;

    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((jsonData) => setProductData([jsonData]));

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setProductData([jsonData]);
        setError(false);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };
    fetchData();
  }, [id]);


  return (
    <div>
      <div>
        {productData.length > 0 &&
          productData.map((eachData) => {
            const { id, image, category, description, price, rating, title } =
              eachData;
            return (
              <div
                key={id}
                className="flex items-center justify-center gap-10 py-7 px-20 bg-sky-000 min-h-[89vh]"
              >
                <div className="w-[100%]">
                  <img
                    src={image}
                    alt={title}
                    className="w-96 border-2 border-black p-5 rounded-2xl h-96"
                  />
                </div>
                <div>
                  <div className="flex flex-col mb-3">
                    <h1 className="text-3xl font-semibold">{title}</h1>
                    <p className="capitalize font-semibold text-amber-600">
                      {category}
                    </p>
                  </div>
                  <p className="text-zinc-500 leading-7 text-xl mb-5">
                    {description}
                  </p>
                  <div className="flex items-center gap-20 mb-3">
                    <p className="text-xl text-zinc-700 font-bold">
                      Rs. {price}
                    </p>
                    <p className="flex items-center text-[20px] font-semibold">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/10961/10961066.png"
                        className="h-5 mr-2"
                        alt="star"
                      />
                      {rating.rate}
                    </p>
                  </div>
                  <div className="flex items-center gap-20">
                    <div className="flex items-center gap-5">
                      <button
                        className="bg-red-500 py-1 px-3 w- text-2xl text-white font-bold rounded-lg"
                        onClick={quantityDecrease}
                      >
                        -
                      </button>
                      <span className="text-stone-800 font-semibold flex items-center gap-2">
                        Quantity:{" "}
                        <span className="font-bold text-2xl">{quantity}</span>
                      </span>
                      <button
                        className="bg-green-700 py-1 px-3 text-2xl text-white font-bold rounded-lg"
                        onClick={quantityIncrease}
                      >
                        +
                      </button>
                    </div>
                    <button className="bg-blue-700 py-2 px-5 rounded-lg text-white">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="flex justify-center items-center min-h-[0vh]">
        {error && (
          <p className="text-red-600 text-3xl font-semibold">
            Something went wrong....!
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
