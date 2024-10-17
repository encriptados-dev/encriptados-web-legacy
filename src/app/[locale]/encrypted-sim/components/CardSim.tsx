import Image, { StaticImageData } from "next/image";
import Button from "@/shared/components/Button";
import TravelSvg from "/public/images/encrypted-sim/icons/travel_explore.svg";
import WifiSvg from "/public/images/encrypted-sim/icons/wifi_tethering.svg";
import CheckSvg from "/public/images/encrypted-sim/icons/check.svg";
import StarSvg from "/public/images/encrypted-sim/icons/star_half2.svg";
import LocalMallSvg from "/public/images/encrypted-sim/icons/local_mall.svg";
import { useTranslations } from "next-intl";

interface CardSimProps {
  productImage: StaticImageData;
  features: string[];
  priceRange: string;
  headerIcon: string;
  headerTitle: string;
  size?: "small" | "medium" | "large"; // Prop opcional para el tamaño
  fullWidth?: boolean; // Prop opcional para el ancho completo
}

const CardSim: React.FC<CardSimProps> = ({
  productImage,
  features,
  priceRange,
  headerIcon,
  headerTitle,
  size = "medium", // Valor por defecto
  fullWidth = false, // Valor por defecto
}) => {
  const t = useTranslations("EncryptedSimPage");

  // Clases de tamaño para la tarjeta
  const sizeClasses = {
    small: "max-w-xs",
    medium: "max-w-sm",
    large: "max-w-lg",
  };

  return (
    <div
      className={`bg-white shadow-lg rounded-2xl overflow-hidden ${
        fullWidth ? "w-full" : sizeClasses[size]
      }`}
    >
      <div className="p-2 bg-[#5D5D5D]">
        <Image
          src={productImage}
          alt={t("CardSim.simCard")}
          className="w-full h-48 object-contain"
        />
        <div className="p-2">
          <div className="flex justify-end gap-2 mb-1 text-sm text-gray-600">
            <div className="bg-[#FFFFFF] text-black px-2 py-1 rounded-full text-xs font-semibold flex gap-1">
              <Image src={TravelSvg} alt="Icon" className="w-4 h-4" />
              <span>{t("CardSim.availableCountries")}</span>
            </div>

            <div className="bg-[#81E2FF] text-black px-2 py-1 rounded-full text-xs font-semibold flex gap-1">
              <span>{t("CardSim.lteSpeed")}</span>
              <Image src={WifiSvg} alt="Icon" className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="text-black rounded-full text-xs font-semibold flex gap-2">
          <Image
            src={headerIcon}
            alt="Icon"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <h2 className="text-lg font-bold mb-2">{headerTitle}</h2>
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
        <div className="p-0">
          <div className="w-full">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-bold">{priceRange}</span>
              <div className="flex items-center bg-[#EDF4F6] px-2 rounded-full">
                <Image
                  src={StarSvg}
                  alt="Icon"
                  className="w-6 h-6 fill-current text-yellow-400 font-bold"
                />
                <span className="ml-1 text-sm text-gray-600 font-semibold">
                  {t("CardSim.rating")}
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
              {t("CardSim.buyNow")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSim;
