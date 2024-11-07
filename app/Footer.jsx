import {
  FaFacebook,
  FaSquareInstagram,
  FaXTwitter,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <footer className="relative bg-blue-700 text-white ">
      <div className="absolute top-0 left-0 w-[100%] overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                        250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                        3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="relative block h-[600px] fill-white"
          ></path>
        </svg>
        <div className="grid lg:grid-cols-4 gap-20 sm:grid-cols-1 p-20">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl text-yellow-300 font-bold">BARKery</h2>
            <p>
              Nuestros alimentos están formulados a base de ingredientes
              puramente orgánicos. Proveedores de nuestros productos son
              empresas pequeñas argentinas, dedicadas a trabajar con materia
              prima reciclada.
            </p>
          </div>

          <div>
            <li className="text-[22px] list-none  text-yellow-300 font-bold py-2 uppercase">
              Devoluciones
            </li>
            <li className="my-4 list-none">SE ACEPTAN DEVOLUCIONES SI:</li>
            <li className="my-4 list-none">Envío de retorno en 30 días Max.</li>
            <li className="my-4 list-none">
              No se permiten devoluciones de alimentos.
            </li>
          </div>

          <div>
            <li className="text-[22px] list-none font-bold text-yellow-300 py-2 uppercase">
              Contactanos
            </li>
            <li className="my-4 list-none">Teléfono: 54 11 311-311-3333 </li>
            <li className="my-4 list-none">Email: bark@barkey.com.ar</li>
            <li className="my-4 list-none">Villa Urquiza, Bs.As.</li>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-[22px] font-bold text-yellow-300 py-2 uppercase">
              Seguinos en Social media
            </h2>

            <div className="flex space-x-4">
              <a
                className="text-white hover:text-orange-500 transform hover:scale-150 
                            transition-all duration-150 ease-in-out"
                href=""
              >
                <FaFacebook size={50} />
              </a>
              <a
                className="text-white hover:text-orange-500 transform hover:scale-150
                             transition-all duration-150 ease-in-out"
                href=""
              >
                <FaSquareInstagram size={50} />
              </a>
              <a
                className="text-white hover:text-orange-500 transform hover:scale-150
                             transition-all duration-150 ease-in-out"
                href=""
              >
                <FaTwitter size={50} />
              </a>
              <a
                className="text-white hover:text-orange-500 transform hover:scale-150
                             transition-all duration-150 ease-in-out"
                href=""
              >
                <FaXTwitter size={50} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="h-full flex items-center justify-center mb-5">
            <form className="w-96 relative">
              <input
                type="email"
                placeholder="hola@mail.com"
                className="w-full text-gray-800 p-4 h-10 rounded-full focus:outline-none 
                            focus:border border-pink-800"
              />
              <button
                type="Submit"
                className="bg-orange-500 px-8 py-2 rounded-full text-white
                                 absolute top-0 right-0"
              >
                Suscribite y recibí ofertas!
              </button>
            </form>
          </div>
        </div>
        <h6 className="text-center">&copy; right BarkeryCO {Year}</h6>
      </div>
    </footer>
  );
};

export default Footer;
