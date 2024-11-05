import Image from "next/image";
import ManMinutos from "/public/images/our-products/man-activate.png";
import FondoActivate from "/public/images/our-products/Fondo-activate.jpg";
import IconWhatsappSVG from "/public/images/our-products/svg/icon-whatsapp.svg";
import IconTelegramSVG from "../../../../../public/images/our-products/svg/icon-telegram.svg";
import IconSignalSVG from "/public/images/our-products/svg/icon-signal.svg";
import IconWechatSVG from "/public/images/our-products/svg/icon-wechat.svg";
import IconLineSVG from "/public/images/our-products/svg/icon-line.svg";
import IconColombiaSVG from "/public/images/our-products/svg/icon-colombia.svg";

const appData = [
  { name: "whatsapp", icon: IconWhatsappSVG, bgColor: "bg-green-500" },
  { name: "telegram", icon: IconTelegramSVG, bgColor: "bg-blue-500" },
  { name: "signal", icon: IconSignalSVG, bgColor: "bg-blue-700" },
  { name: "wechat", icon: IconWechatSVG, bgColor: "bg-white" },
  { name: "line", icon: IconLineSVG, bgColor: "bg-green-600" },
];

const Component: React.FC = () => {
  return (
    <div className="relative min-h-[400px] w-full bg-black">
      {/* Background image with diagonal overlay */}
      <div className="absolute left-0 top-0 h-full w-4/4 overflow-hidden md:w-2/3">
        <div className="relative h-full w-full">
          <Image
            src={FondoActivate}
            alt="Office building background"
            className="h-full w-full object-cover"
            width={800}
            height={600}
            priority
            title="Office building background" // Image description for screen readers
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(105deg, transparent 50%, black 50.5%)",
            }}
          />
        </div>
      </div>

      {/* Person image */}
      <div className="absolute bottom-0 left-0 top-0 w-1/2 md:w-1/3">
        <Image
          src={ManMinutos}
          alt="Person using phone"
          className="h-full w-full object-contain object-bottom scale-110 -translate-y-[19px]"
          width={400}
          height={600}
          priority
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="ml-auto w-full md:w-1/2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-2xl font-light text-white md:text-2xl lg:text-2xl">
                Activa APPs por SMS con <strong className="text-primary font-bold">Encriptados</strong>
              </h1>
              <p className="text-lg text-gray-400">
                Regístrate en cualquier aplicación con un número de teléfono virtual
              </p>
            </div>

            {/* App icons */}
            <div className="flex flex-wrap gap-4">
              {appData.map(({ name, icon, bgColor }) => (
                <div
                  key={name}
                  className={`flex h-20 w-20 items-center justify-center rounded-xl p-2 ${bgColor}`}
                >
                  <Image
                    src={icon}
                    alt={`${name} icon`}
                    width={40}
                    height={40}
                    className="h-12 w-12"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src={IconColombiaSVG}
                  alt="Colombian flag icon"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <span className="text-sm text-gray-400">
                  Se genera un número colombiano
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
