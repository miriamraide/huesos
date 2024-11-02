"use client";

import useContext from "react";
import Context from "../../Context/Context";

const CartItemCounter = ({ product }) => {
  const { cart, setCart, buyProducts } = useContext(Context);

  const decrease = () => {
    const repeatproduct = cart.find((item) => item.id === product.id);

    repeatproduct.quantity !== 1 &&
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...product, quantity: repeatproduct.quantity - 1 }
            : item
        )
      );
  };

  return (
    <>
      <p className="txt-xl font-semibold" onClick={decrease}>
        -
      </p>
      <p>{product.quantity}</p>
      <p className="txt-xl font-semibold" onClick={() => buyProducts(product)}>
        +
      </p>
    </>
  );
};

export default CartItemCounter;
