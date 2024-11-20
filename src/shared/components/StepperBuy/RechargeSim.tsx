import React from "react";
import Button from "../Button";
import SimIconSvg from "@/shared/svgs/SimIconSvg";

const RechargeSim = () => {
  const points = [
    "Tu recarga se hará inmediatamente",
    "Pago seguro garantizado",
    "No recopilamos la información de compra",
    "Conexión segura y anónima.",
  ];

  return (
    <div className="w-full flex justify-center items-center mt-10 px-4">
      <div className="shadow-md bg-white w-full md:w-5/12 rounded-2xl p-6">
        <h1 className="font-bold text-center text-lg md:text-xl mb-4">
          Ingresa tu número de SIM para recargar
        </h1>

        <div className="w-full flex justify-center flex-col items-center">
          <div className="mb-4  w-9/12 flex items-center border border-black rounded-full overflow-hidden">
            <div className="flex items-center pl-3">
              <SimIconSvg color="black" height={25} width={25} />
            </div>
            <input
              type="text"
              placeholder="Número de SIM"
              className="flex-1 p-2 border-none focus:outline-none"
            />
          </div>

          <div className="w-9/12">
            <Button intent="black" rounded="full" size="medium">
              Pagar ahora
            </Button>
          </div>

          <ul className="mt-4 list-disc w-9/12 pl-5">
            {points.map((point, index) => (
              <li key={index} className="mb-2">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RechargeSim;
