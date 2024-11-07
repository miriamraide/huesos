import Image from "next/image";

function OurCompany() {
  return (
    <>
      <section className="flex justify-evenly items-center w-full">
        <div className="flex justify-evenly items-center">
          <div className="box text-lg text-center pb-6 sm:pb-0  bg-yellow-400">
            <div className=" font-bold text-4xl m-10 text-blue-600 bg-yellow-200 rounded-md p-1">
              BARK y sus Amigos
            </div>

            <Image
              src="/bark-friends.jpg"
              width={750}
              height={550}
              alt="Bark y sus Amigos"
            />
            <div className="text-xl text-center pb-6 sm:pb-0 text-gray-700  font-bold mx-5 my-5">
              En Barkery vas a encontrar productos alimenticios orgánicos, de
              primera calidad, desarrollados en granjas locales con materia
              prima puramente orgánica. Alimentos balanceados, controlados por
              nutricionistas respetados en el país y en el extranjero. Nosotros
              sabemos que tu mascota es tu bebé. Y a nuestros bebés le ofrecemos
              lo mejor. Los precios son muy razonables. En Barkery, nos
              esforzamos en que la calidad no impacte altamente en los precios.
              Cuidamos tus mascotas y tu presupuesto. <br /> <br />
              <p className="text-orange-600 text-2xl font-bold">
                No te olvides de SUSCRIBIRTE!
              </p>
            </div>
          </div>
          <div className=" bg-yellow-400 box text-xl text-center pb-6 sm:pb-0 text-gray-700  font-bold mx-5 my-5">
            <div>
              En la última década, ha surgido un notorio auge en la adopción de
              prácticas sostenibles por parte de diversas marcas, las cuales han
              decidido comprometerse con la fabricación de productos utilizando
              materiales reciclados. siguiendo la creciente conciencia ambiental
              por parte de los consumidores, sino que también representa una
              contribución positiva al bienestar del planeta. <b>BARKery</b> se
              ha sumado a esta tendencia, ya sea ofreciendo productos
              alimenticios orgánicos preparados con los más frescos ingredients,
              como también disponiendo de productos no alimenticios fabricados
              con materiales reciclados.
            </div>
            <h2 className=" font-bold text-4xl m-10 text-blue-600 bg-yellow-200 rounded-md p-1">
              Sumate a la BARKerymanía. Reciclá!
            </h2>
            <div className="place-items-center">
              <Image
                src="/bark-recycle.jpg"
                width={500}
                height={250}
                alt="Bark recicla"
              />
            </div>
          </div>

          <div className=" box bg-yellow-400 text-lg text-center pb-4 sm:pb-0 ">
            <div className=" font-bold text-4xl m-10 text-blue-600 bg-yellow-200 rounded-md p-1">
              Alimentos Ricos y Saludables
            </div>
            <div>
              <Image
                src="/bark-healthyfood.jpg"
                width={750}
                height={550}
                alt="Bark come sano"
              />
            </div>
            <div className="text-xl text-center pb-4 sm:pb-0 text-gray-700  font-bold mx-5 my-5">
              El principal desafío al formular y desarrollar productos para el
              mercado en alimentos de mascotas es garantizar una nutrición
              adecuada.Cada especie tiene requerimientos nutricionales
              específicos, y es esencial que los productos se formulen para
              satisfacer estas necesidades. Los nutricionistas formuladores
              trabajan con colaboración con granjeros locales para asegurarse de
              que los productos sean equilibrados y cumplan con todos los
              requisitos nutricionales necesarios. <b>BARKery</b> promueve la
              venta de alimentos sanos y sabrosos para las mascotas, asegurando
              la salud, la longevidad de las mascotas y la satisfacción de los
              tutores.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default OurCompany;
