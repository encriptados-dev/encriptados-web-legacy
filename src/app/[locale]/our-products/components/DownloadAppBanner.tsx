import Image from "next/image";
import AppStore from "/public/images/our-products/svg/app-store.svg";
import GooglePlay from "/public/images/our-products/svg/google-play.svg";
import PhoneQr from "/public/images/our-products/phone-qr.png";

const Component: React.FC = () => {
  return (
    <div className="bg-custom-gradient-qr-black-y-grey max-h-[450px] flex items-center justify-center p-4">
      <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Descarga la App
            <br />
            para iOS & Android
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-block transition-transform hover:scale-105"
              aria-label="Descargar en App Store"
            >
              <Image
                src={AppStore}
                alt="App Store"
                width={170}
                height={50}
                className="h-[50px] w-auto"
                priority
              />
            </a>

            <a
              href="#"
              className="inline-block transition-transform hover:scale-105"
              aria-label="Descargar en Google Play"
            >
              <Image
                src={GooglePlay}
                alt="Google Play"
                width={170}
                height={50}
                className="h-[50px] w-auto"
                priority
              />
            </a>
          </div>

          <p className="text-gray-400 text-lg">
            O Escanea el código QR con tu cámara
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[250px] aspect-[1/2]">
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[400px] h-[400px]  rounded-2xl flex items-center justify-center p-4">
            <Image
              src={PhoneQr}
              alt="QR Code"
              width={260}
              height={260}
              className="w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
