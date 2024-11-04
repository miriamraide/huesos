"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { Context } from "./Context/Context";
import { useContext } from "react";

const Products = () => {
  const productsData = [
    {
      id: 1,
      title: "Correa con soporte para pasear a nuestros amigos caninos",
      mainTitle:
        "Super Segura, con correa extendible, realizada con materiales reciclados",
      img: "/assets/bark-02-dogleash-support.jpg",
      price: 28000,
      quantity: 7,
      stock: 10,
    },

    {
      id: 2,
      title: "Mochila para llevar mascotas pequeñas/como gatos",
      mainTitle:
        "Confeccionada por abuelas del Noreste Argentino, super liviana y flexible, lista para llevar a todas partes",
      img: "/assets/bark-01-catbackpack.jpg",
      price: 35000,
      quantity: 5,
      stock: 10,
    },
    {
      id: 3,
      title: "Cama moderna, ideal para mascotas pequeñas",
      mainTitle:
        "Super contemporánea, y muy original, ideal para quienes buscan un estilo de decoración moderno",
      img: "/assets/bark-23-catbed2.jpg",
      price: 45000,
      quantity: 3,
      stock: 10,
    },

    {
      id: 4,
      title: "Pecera de vidrio acojedora adaptable a lugares pqueños",
      mainTitle:
        "Este estilo de pecera no desilusiona, siempre vigente para admirar a nuestros peces amigos.",
      img: "/assets/bark-05-fishbowl.jpg",
      price: 55000,
      quantity: 6,
      stock: 10,
    },
    {
      id: 5,
      title: "Alimentador con semillas y néctar para pájaros",
      mainTitle:
        "Fácil de instalar, es un atractivo para ver alimentarse desde tu ventana, aves de distintos tipos y colores. Un sueño!.",
      img: "/assets/bark-04-birdfeeder.jpg",
      price: 25000,
      quantity: 4,
      stock: 10,
    },

    {
      id: 6,
      title: "Doble set of bowls para perros",
      mainTitle:
        "Realizado completamente con productos reciclados, este estilo de bowls es perfecto para adornar cualquier ambiente.",
      img: "/assets/bark-03-dogbowls.jpg",
      price: 32000,
      quantity: 3,
      stock: 10,
    },

    {
      id: 7,
      title: "Alimento orgánico para perros",
      mainTitle:
        "Ingrededientes de alta calidad, desarrollado por un grupo de nutricionistas locales. Se vedne por kilo.",
      img: "/assets/bark-06-dogfood.jpg",
      price: 5000,
      quantity: 5,
      stock: 10,
    },

    {
      Id: 8,
      title: "Alimento orgánico para gatos",
      mainTitle:
        "Ingrededientes de alta calidad, desarrollado por un grupo de nutricionistas locales. Se vende por kilo.",
      img: "/assets/bark-07-catfood.jpeg",
      price: 5000,
      quantity: 8,
      stock: 10,
    },

    {
      Id: 9,
      title: "Alimento orgánico para pájaros",
      mainTitle:
        "Ingrededientes de alta calidad, desarrollado por un grupo de nutricionistas locales. Se vende por 100 gramos.",
      img: "/assets/bark-08-birdfood.jpeg",
      price: 3000,
      quantity: 6,
      stock: 10,
    },

    {
      Id: 10,
      title: "Alimento orgánico para peces",
      mainTitle:
        "Ingrededientes de alta calidad, desarrollado por un grupo de nutricionistas locales. Se vende por 100 gramos.",
      img: "/assets/bark-09-fishfood.jpg",
      price: 2000,
      quantity: 4,
      stock: 10,
    },

    {
      id: 12,
      title: "Alimento orgánico para hamsters",
      mainTitle:
        "Ingrededientes de alta calidad, desarrollado por un grupo de nutricionistas locales. Se vende por 100 gramos.",
      img: "/assets/bark-10-hamsterfood.jpg",
      price: 2000,
      quantity: 5,
      stock: 10,
    },

    {
      id: 13,
      title: "Cama peluda para nuestros amigos caninos",
      mainTitle:
        "Realizado completamente con productos reciclados, este estilo de cama es perfecto para adornar cualquier ambiente.",
      img: "/assets/bark-16-dogbed1.jpg",
      price: 28000,
      quantity: 6,
      stock: 10,
    },

    {
      id: 14,
      title: "Cama estilo cueva a para nuestros amigos felinos",
      mainTitle:
        "Realizado completamente con productos reciclados, este estilo de cama/cueva es perfecto para adornar cualquier ambiente.",
      img: "/assets/bark-24-catbed3.jpeg",
      price: 28000,
      quantity: 10,
      stock: 10,
    },

    {
      id: 15,
      title: "Cama canasto a para nuestros amigos caninos",
      mainTitle:
        "Realizado completamente con productos reciclados, este estilo de canastos es perfecto para adornar cualquier ambiente.",
      img: "/assets/bark-18-dogbed3.jpg",
      price: 25000,
      quantity: 5,
      stock: 10,
    },
  ];

  const { cart, setCart } = useContext(Context);

  const buyProducts = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="bg-bgImage bg-repeat bg-cover bg-bottom w-full max-h-full flex justify-around">
      <div className="container">
        <div className="font-bold text-4xl  mt-3 pb-4 text-center text-blue-600">
          Barkery Productos
        </div>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
              stock={item.stock}
            />
          ))}
          <button onClick={() => buyProducts}>Comprar</button>
        </div>
      </div>
    </div>
  );
};
export default Products;
