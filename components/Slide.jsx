import React from "react";
import Image from "next/image";

const Slide = ({ img, title, mainTitle, price }) => {
  return (
    <div className="outline-none border-none relative">
      <div>
        <Image
          className=" w-[100%] h-[300px  md:h-auto rounded-xl object-cover object-right md:object-left-bottom ]"
          src={img}
          alt="banner"
          width={1500}
          height={1500}
        />
      </div>
      <div className="absolute right-[30px] md-right[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#fde047] sm:bg-transparent p-4 sm:p-0  rounded-lg sm:rounded-none text-right">
        <h2 className="text-red-600 text-[35px] lg:text-[39px] lg:font-extrabold">
          {title}
        </h2>
        <h3 className="text-white text-[30px] md:text-[30px] lg:txt-[36px] lg:font-bold leading[1.2] ">
          {mainTitle}
        </h3>
        <h2 className="text-blue-300 text-[25px] lg:text-[32px] font-bold">
          {price}
        </h2>
        <div className="bg-yellow-500 text-white text-[25px] md:text-[30px] font-bold p-2 px-4 rounded-lg inline-block  cursor-pointer hover:bg-slate-600 float-right">
          Comprar
        </div>
      </div>
    </div>
  );
};

export default Slide;
