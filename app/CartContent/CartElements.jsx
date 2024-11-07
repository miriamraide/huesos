"use client";

import { Context } from "../CartContext";
import { useContext } from "react";
import Image from "next/image";

const CartElements = () => {
  const { cart } = useContext(Context);

  return cart.map((item) => {
    return (
      <div key={item.id}>
        <Image src={item.image} width={300} height={200} alt="Producto" />
        <h3>{item.name}</h3>
        <h4>{item.price}</h4>
      </div>
    );
  });
};

export default CartElements;
