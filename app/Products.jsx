"use client";

import data from "/data.json";
import ProductCard from "./ProductCard";
import { Context } from "./CartContext";
import { useContext } from "react";

const Products = () => {
  const { cart, setCart } = useContext(Context);

  const buyProducts = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="bg-bgImage bg-repeat bg-cover bg-bottom w-full max-h-full flex justify-around">
      <div className="container">
        <div className="font-bold text-4xl  mt-3 pb-4 text-center text-blue-600">
          Barkery Productos
        </div>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-x-20 xl:gap-y-10">
          {data.map((item, index) => (
            <ProductCard
              key={index}
              img={item.image}
              title={item.name}
              mainTitle={item.description}
              price={item.price}
            />
          ))}
          <button onClick={() => buyProducts(item)}>Comprar</button>
        </div>
      </div>
    </div>
  );
};
export default Products;
