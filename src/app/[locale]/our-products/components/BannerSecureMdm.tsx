import Image from "next/image";
import WomenActivate from "../../../../../public/images/our-products/woman-activate.png";
import LogoSecureSVG from "../../../../../public/images/our-products/svg/icon-secure-mdm.svg";
import PhoneSecure from "../../../../../public/images/our-products/phone-secure.png";

const BannerSecureMdm: React.FC = () => {
  return (
    <div className="relative min-h-[400px] w-full bg-custom-gradient-secure-black-y-grey overflow-hidden">
      <div className="relative min-h-[400px] mx-auto max-w-[1300px] px-4 py-12 sm:px-6 lg:px-8 flex items-center">
        {/* Contenido de texto */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Logo y título */}
          <div className="space-y-2">
            <div className="bg-[#343434] py-2 px-4 rounded-lg inline-block">
              <Image
                src={LogoSecureSVG} // Ruta del logo de Secure MDM
                alt="Secure MDM logo"
                width={100}
                height={40}
                className=" "
              />
            </div>
            <h1 className="text-4xl font-semibold text-white">Secure MDM iPhone</h1>
            <p className="text-xl text-blue-300">Desde $600 USD</p>
            <p className="text-sm text-gray-400">Ahora 50 USD</p>
          </div>
          {/* Botones de acción */}
          <div className="flex flex-col gap-4">
            <button className="bg-blue-300 text-black px-6 py-2 rounded-full w-[200px] font-semibold">Comprar</button>
            <button className="text-white underline w-[200px]">Más información</button>
          </div>
        </div>
      </div>

      {/* Imagen del iPhone centrada */}
      <div className="absolute right-1/2 transform translate-x-1/2 top-1/2 -translate-y-14 z-10">
        <Image 
          src={PhoneSecure} // Imagen del iPhone o la imagen deseada
          alt="Secure MDM iPhone"
          className="object-contain "
          height={400} // Ajusta el tamaño según sea necesario
          width={300}
          priority
        />
      </div>

      {/* Imagen de fondo y gradiente */}
      <div className="absolute right-0 top-0 h-full w-full md:w-1/2 overflow-hidden bg-custom-gradient-our-sim-blue">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(120deg, black 20%, transparent 21%)",
          }}
        />
      </div>

      {/* Imagen de la mujer a la derecha */}
      <div className="absolute bottom-0 right-0">
        <Image
          src={WomenActivate} // Imagen de la mujer
          alt="Mujer con auricular"
          className="h-full w-full object-contain scale-75 translate-y-20 translate-x-20"
          height={600}
          priority
        />
      </div>
    </div>
  );
};

export default BannerSecureMdm;
