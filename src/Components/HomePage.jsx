import React, { useEffect, useState } from "react";
// import { ProductsArray } from "./ProductsArray";
import Header from "./Header/Header";
import Products from "./Products";

const HomePage = () => {
  const [productsData, setProductsData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";

    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((jsonData) => setProductsData(jsonData));

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setProductsData(jsonData);
        setError(false);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };

    fetchData();
  }, []);

  // console.log(productsData);
  // console.log(error);

  return (
    <div className="bg-blue-300 min-h-[89vh]">
      {/* <Header /> */}
      <div className="flex flex-wrap justify-between gap-10 p-10">
        {productsData.length > 0 &&
          productsData.map((eachProduct) => {
            return <Products product={eachProduct} key={eachProduct.id} />;
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

export default HomePage;
