import LogoSvg from "../../../../../public/images/encrypted-sim/icons/encriptados_logo.svg";
import CharacteristicDatasSvg from "../../../../../public/images/encrypted-sim/icons/characteristic_datas.svg";
import CharacteristicSpeedSvg from "../../../../../public/images/encrypted-sim/icons/characteristic_speed.svg";
import CharacteristicAppSvg from "../../../../../public/images/encrypted-sim/icons/characteristic_app.svg";
import Image from "next/image";

const CardDescription: React.FC = () => {
  return (
    <div className="bg-[#fafafa] bg-gradient-to-r from-[#fafafa] to-[#c1f0ff] from-[80%] to-[100%] shadow-lg p-8 rounded-2xl overflow-hidden flex-col flex">
      <div className="mb-6 w-full ">
        <Image
          src={LogoSvg}
          alt="Logo"
          className="w-[14rem] justify-end flex"
        />
      </div>
      <h2 className="text-4xl font-bold text-black mb-4">
        Compra tu plan de datos móviles y comunicate con total privacidad
      </h2>
      <p className="text-black mb-8 text-base">
        Disponible en más de 200 países
      </p>
      <div className="grid grid-cols-5 gap-4">
        <div className = 'bg-[#E6F4F9] w-15 h-15 border'>
          <Image src={CharacteristicDatasSvg} alt="Icon" className="w-6 h-6" />
        </div>
        <div className = 'bg-[#E6F4F9] w-15 h-15 border'>
          <Image src={CharacteristicSpeedSvg} alt="Icon" className="w-6 h-6" />
        </div>
        <div className = 'bg-[#E6F4F9] w-15 h-15 border'>
          <Image src={CharacteristicAppSvg} alt="Icon" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default CardDescription;
