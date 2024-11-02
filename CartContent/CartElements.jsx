"use client";

import useContext from "react";
import Context from "../../Context/Context";
import CartItemCounter from "./CartItemCounter";
import Image from "next/image";

const CartElements = () => {
  const { cart, setCart } = useContext(Context);

  const deleteProducts = (id) => {
    const foundId = cart.find((element) => element.id === id);

    const newCart = cart.filter((element) => {
      return element !== foundId;
    });

    setCart(newCart);
  };

  return cart.map((product) => {
    return (
      <div className="product-card-container" key={product.id}>
        <Image src={product.image} width={200} height={150} alt="producto" />
        <h3>{product.name}</h3>
        <CartItemCounter product={product} />
        <h4>{product.price * product.quantity}</h4>
        <h3
          className="cart-delete-product"
          onClick={() => deleteProducts(product.id)}
        >
          ❌
        </h3>
      </div>
    );
  });
};

export default CartElements;
