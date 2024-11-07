"use client";

import { ContextProvider } from "./CartContext";
import { CartElements } from "./CartContent/CartElements";

const Home = () => {
  return;
  <ContextProvider>
    <CartElements />
  </ContextProvider>;
};

export default Home;
