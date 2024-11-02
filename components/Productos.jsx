import { useContext, useState, useEffect } from "react";
import { Context } from "../../Context/Context";
import Image from "next/image";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { buyProducts } = useContext(Context);

  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return products.map((product) => {
    return (
      <div className="card" key={product.id}>
        <Image
          src={product.image}
          width={500}
          height={400}
          alt="img-product-card"
        />
        <h3>{product.name}</h3>
        <h4>{product.price}</h4>
        <button onClick={() => buyProducts(product)}>buy</button>
      </div>
    );
  });
};
