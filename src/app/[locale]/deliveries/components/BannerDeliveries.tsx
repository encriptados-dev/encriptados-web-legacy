import React from "react";

const BannerDeliveries = () => {
  return (
    <section className="w-full bg-blue-500 text-white py-10 text-center flex flex-col items-center">
      <h1 className="text-4xl font-bold max-w-2xl">Con la Mejor Seguridad, Llega a Tiempo y sin Problemas</h1>
      <p className="mt-4 max-w-lg text-lg">
        Nuestro sistema de entregas garantiza seguridad y rapidez en cada pedido.
      </p>
      <button className="mt-6 bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition">
        Conocer Más
      </button>
      {/* Imagen decorativa */}
      <img src="/images/delivery-banner.png" alt="Entrega Segura" className="mt-6 max-w-md" />
    </section>
  );
};

export default BannerDeliveries;
