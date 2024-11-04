import React from "react";
import Image from "next/image";

const ProductCard = ({ title, mainTitle, img, price, stock }) => {
  return (
    <div className="px-6 py-6 bg-slate-300 border border-red-800 rounded-xl max-w-[1000px]">
      <div>
        <Image
          className="w-full h-auto"
          src={img}
          width={1000}
          height={800}
          alt={title}
        />
      </div>
      <div className="space-y-2 py-2">
        <h2 className="text-gray-600 text-center font-bold  uppercase">
          {title}{" "}
        </h2>
        <h3 className="text-blue-800 text-center font-bold">{mainTitle}</h3>
        <div className="flex font-bold gap-4  text-blue-800 text-xl p-4 justify-evenly items-center">
          ${price}
          <button className="bg-blue-400 rounded-xl p-4">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
