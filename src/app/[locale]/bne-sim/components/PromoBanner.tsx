import Image from 'next/image';
import BneSimSvg from "/public/images/bne-sim/bne_men.png";;

const PromoBanner: React.FC = () => {
  return (
    <div className="bg-white p-4 md:p-0 flex flex-col md:flex-row items-center justify-center rounded-3xl max-w-[1000px] max-h-[400px] mx-auto">
      <div className="mb-4 md:mb-0 md:mr-8 max-w-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¡Sin fechas de corte ni planes que expiran!
        </h2>
        <p className="text-gray-700">
          Tarda el tiempo que desees en consumir los recursos de tu SIM o eSIM. No tendrás fechas de corte ni vencimiento de datos
        </p>
      </div>
      <div className='-translate-y-6' >
        <Image
          src={BneSimSvg}
          alt="Hombre usando smartphone"                   
          className="w-[300px] "
        />
      </div>
    </div>
  );
};

export default PromoBanner;

