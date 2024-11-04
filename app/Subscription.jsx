const Contact = () => {
  return (
    <>
      <div className="h-[1000px] flex justify-center items-center">
        <div
          id="contact"
          className="lg:bg-banner bg-cover bg-fixed lg:h-[490px] h-[650px] lg:px-16 py-5"
        >
          <div className="lg:mx-40 lg:my-40 flex flex-col items-center justify-center bg-white rounded-[50px] py-20">
            <h2 className="title text-3xl mb-16 text-blue-600">
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
                <button className="bg-yellow-600 lg:w-1/3 m-0">
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
