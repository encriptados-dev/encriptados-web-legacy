import Image from "next/image";
import EncryptedSimData from "../../../../../public/images/encrypted-sim/Encrypted_sim_card.png";
import TravelSvg from "../../../../../public/images/encrypted-sim/icons/travel_explore.svg";
import WifiSvg from "../../../../../public/images/encrypted-sim/icons/wifi_tethering.svg";
import CheckSvg from "../../../../../public/images/encrypted-sim/icons/check.svg";
import StarSvg from "../../../../../public/images/encrypted-sim/icons/star_half2.svg";
import Bigtop from "../../../../../public/images/encrypted-sim/icons/bigtop.svg";
import Button from "@/shared/components/Button";
import LocalMallSvg from "../../../../../public/images/encrypted-sim/icons/local_mall.svg";
const CardSim: React.FC = () => {
  const features = [
    "Datos añadidos al instante",
    "Irrastreable y anónimo",
    "Protegido contra IMSI CATCHER'S",
    "Sin fechas de corte",
  ];

  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
      <div className="p-2 bg-[#5D5D5D]">
        <Image
          src={EncryptedSimData}
          alt="Sim Card"
          width={300}
          height={200}
          className="w-64 mx-auto"
        />
        <div className="p-2">
          <div className="flex justify-end gap-2  mb-1 text-sm text-gray-600">
            <div className="bg-[#FFFFFF] text-black px-2 py-1 rounded-full text-xs font-semibold flex gap-1">
              <Image src={TravelSvg} alt="Icon" className="w-4 h-4" />
              <span>+200 países disponibles</span>
            </div>

            <div className="bg-[#81E2FF] text-black px-2 py-1 rounded-full text-xs font-semibold flex gap-1">
              <span>5G LTE</span>
              <Image src={WifiSvg} alt="Icon" className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="text-black rounded-full text-xs font-semibold flex gap-1">
          <Image src={Bigtop} alt="Icon" className="w-6 h-6" />
          <h2 className="text-lg font-bold mb-2">Recarga de Datos</h2>
        </div>

        <ul className="space-y-0">
          {features.map((item, index) => (
            <li key={index} className="flex items-center text-sm gap-1">
              <Image src={CheckSvg} alt="Icon" className="w-4 h-4" />
              {item}
            </li>
          ))}
        </ul>
        <hr className="my-4" />
        <div className="p-0 ">
          <div className="w-full">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-bold">25 - 500 USD</span>
              <div className="flex items-center bg-[#EDF4F6] px-2 rounded-full">
                <Image
                  src={StarSvg}
                  alt="Icon"
                  className="w-6 h-6 fill-current text-yellow-400 font-bold"
                />
                <span className="ml-1 text-sm text-gray-600 font-semibold ">
                  5/5
                </span>
              </div>
            </div>
            <Button
              size="medium"
              rounded="full"
              intent="black"
              icon={
                <Image
                  src={LocalMallSvg}
                  alt="Icon"
                  className="w-6 h-6 fill-current text-yellow-400 font-bold"
                />
              }
              iconPosition="right"
            >
              Comprar Ahora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSim;
