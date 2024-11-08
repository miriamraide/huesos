"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Subscription from "./Subscription";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";

import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isContact, setIsContact] = useState(true);

  const handleClick = () => {
    setIsContact(!isContact);
  };

  const router = useRouter();

  return (
    <>
      <header className=" text-yellow-100 py-4 sm:p-6 md:flex md:justify-between md:items-center  bg-blue-600 ">
        <div className="container flex justify-evenly place-items-center ">
          <Image
            src="/barkery-logo.jpg"
            width={80}
            height={100}
            alt="Barkery Logo"
            className="hover:scale-125 transition-all mx-10"
            onClick={() => {
              router.push("/");
            }}
          />
          <div className=" hidden md:flex text-2xl font-semibold -mx-10 gap-5">
            <Link
              className="px-7 py-5 hover:bg-blue-400 hover:text-yellow-400 hover:rounded-md cursor-pointer "
              href="slider"
            >
              Barkery
            </Link>
            <Link
              className="px-7 py-5 hover:bg-blue-400 hover:text-yellow-400 hover:rounded-md cursor-pointer"
              href="inicio"
            >
              Compañía
            </Link>
            <Link
              className="px-7 py-5 hover:bg-blue-400  hover:text-yellow-400 hover:rounded-md cursor-pointer"
              href="/products"
            >
              Productos
            </Link>

            <Link
              className="px-7 py-5 hover:bg-blue-400  hover:text-yellow-400 hover:rounded-md cursor-pointer"
              href="mascotas"
            >
              Mascotas
            </Link>
            <Link
              className="px-7 py-5 hover:bg-blue-400  hover:text-yellow-400 hover:rounded-md cursor-pointer"
              href=""
            >
              Ofertas
            </Link>
            <Link
              className="px-7 py-5 hover:bg-blue-400  hover:text-yellow-400 hover:rounded-md cursor-pointer"
              href=""
            >
              FAQ
            </Link>
          </div>
          <div className="relative cursor-pointer">
            <Link href="/cart">
              <div>
                <AiOutlineShoppingCart
                  size={50}
                  className=" text-orange-400  "
                />
                <span className="='absolute -top-2 text-[13px] h-[18px] rounded-full grid place-items-center font-semibold text-white ">
                  0
                </span>
              </div>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            ></button>
            <GiHamburgerMenu size={40} />
          </div>
        </div>
        <div className="text-white justify-center items-center hidden md:flex">
          <a href="https://www.google.com" target="_blank">
            <FcGoogle size={40} className="bg-slate-300 rounded-md" />
          </a>
          <p className="ml-2 font-bold hidden md:flex"> Reviews </p>
        </div>
        <div>
          <button
            className="bg-orange-600 text-white font-semibold rounded-xl px-7 py-5 mr-20 hidden md:flex"
            onClick={() => {
              router.push("/Subscription");
            }}
          >
            {" "}
            Suscribite
          </button>
          {/* <Subscription /> */}
        </div>
      </header>
    </>
  );
};
export default Navbar;
