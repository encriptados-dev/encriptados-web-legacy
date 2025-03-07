import React from "react";

const products = [
  {
    id: 1,
    name: "Smartphone Pro",
    image: "/images/product1.jpg",
    price: "$499.99",
  },
  {
    id: 2,
    name: "Audífonos Inalámbricos",
    image: "/images/product2.jpg",
    price: "$99.99",
  },
  {
    id: 3,
    name: "Cargador Rápido",
    image: "/images/product3.jpg",
    price: "$29.99",
  },
];

const FeaturedProductsDeliveries = () => {
  return (
    <section className="py-10 text-center">
      <h2 className="text-3xl font-bold mb-6">Productos Destacados</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="w-64 p-4 bg-white shadow-lg rounded-lg text-center">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
              Comprar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProductsDeliveries;
