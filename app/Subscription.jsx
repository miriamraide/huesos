"use client";

import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/Subscription");
  };

  return (
    <>
      <div className="h-[1000px] flex justify-center items-center">
        <div id="contact" className="lg:h-[490px] h-[650px] lg:px-16 py-5">
          <div className="lg:mx-40 lg:my-40 flex flex-col items-center justify-center bg-blue-600 rounded-[50px] py-20">
            <h2 className="title text-3xl mb-16 text-yellow-400 font-semibold">
              Completa tus datos
            </h2>
            <form
              className="flex flex-col gap-2 lg:w-full lg:px-40 px-[20px]"
              action=""
            >
              <div className="lg:flex gap-4">
                <input placeholder="Ingresa tu nombre completo" type="text" />
                <input placeholder="Ingresa tu email" type="email" />
              </div>
              <div className="lg:flex gap-4">
                <input placeholder="Ingresa to nro. de teléfono" type="phone" />
                <input placeholder="Ingresa to dirección" type="address" />
              </div>
              <textarea
                className="w-full my-2 rounded-lg p-4 border-2 border-gray-200 text-xl text-slate-400"
                placeholder="Escribe un mensaje...."
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <div className="flex justify-center">
                <button
                  onClick={handleClick}
                  className="bg-yellow-500 lg:w-1/3 m-0 rounded-xl p-2 mt-4 text-blue-700 font-bold"
                >
                  Suscribite
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
