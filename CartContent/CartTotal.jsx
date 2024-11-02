"use client";

import useContext from "react";
import Context from "../../Context/Context";

const CartTotal = () => {
  const { cart } = useContext(Context);

  const total = cart.reduce(
    (accumula, item) => accumula + item.price * item.quantity,
    0
  );
  return (
    <div className="txt-xl font-semibold">
      <h3>Total a Pagar: {total}</h3>
    </div>
  );
};

export default CartTotal;
