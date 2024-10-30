import Link from "next/link";
import EncryptedLogoSvg from "../svgs/EncryptedLogoSvg";
import AppleSvg from "../svgs/AppleSvg";
import PlayStoreSvg from "../svgs/PlayStoreSvg";
import QRFooter from "./icon/QRFooter";
import LinkedinFooter from "./icon/LinkedinFooter";
import YoutubeFooter from "./icon/YoutubeFooter";
import InstagramFooter from "./icon/InstagramFooter";
import FacebookFooter from "./icon/FacebookFooter";
import ColombiaFooterFlag from "./icon/ColombiaFooterFlag";
import ChileFooterFlag from "./icon/ChileFooterFlag";
import MexicoFooterFlag from "./icon/MexicoFooterFlag";
import PeruFooterFlag from "./icon/PeruFooterFlag";
import CostaRicaFooterFlag from "./icon/CostaRicaFooterFlag";
import ElSalvadorFooterFlag from "./icon/ElSalvadorFooterFlag";
import UnitedStatesFooterFlag from "./icon/UnitedStatesFooterFlag";
import BrasilFooterFlag from "./icon/BrasilFooterFlag";
import BancolombiaFooter from "./payicon/BancolombiaFooter";
import VisaFooter from "./payicon/VisaFooter";
import MasterCardRedYellowFooter from "./payicon/MasterCardRedYellowFooter";
import MasterCardRedBlueFooter from "./payicon/MasterCardRedBlueFooter";
import AmericanExpressFooter from "./payicon/AmericanExpressFooter";
import PSEFooter from "./payicon/PSEFooter";
import BitCoinFooter from "./payicon/BitCoinFooter";
import TFooter from "./payicon/TFooter";
import EthFooter from "./payicon/EthFooter";
import DollarBlueFooter from "./payicon/DollarBlueFooter";
import DFooter from "./payicon/DFooter";
import LFooter from "./payicon/LFooter";
import { useTranslations } from "next-intl";

export default function FooterEncrypted() {
  const t = useTranslations("FooterMenu");

  const sections = [
    {
      title: "SIM - eSIMs",
      items: [
        t("simEsims.encryptedSim"),
        t("simEsims.physicSim"),
        t("simEsims.globalSim"),
        "BNE SIM",
        "MAYA SIM",
      ],
    },
    {
      title: t("encryptedSims.title"),
      items: [
        "Silent Circle",
        "Vnclagoon",
        "Threema",
        "Threema Work",
        "NordVPN",
        "Salt",
        "VaultChat",
        "Armadillo",
      ],
    },
    {
      title: t("phoneEncrypted.title"),
      items: [
        "Secure Crypt",
        "Armadillo",
        "UltraX",
        "Tribu",
        "Intact",
        "DEC Securet",
        "TotalSec",
      ],
    },
  ];

  const socialMedia = [
    { name: "LinkedIn", icon: <LinkedinFooter />, link: "#" },
    { name: "YouTube", icon: <YoutubeFooter />, link: "#" },
    { name: "Instagram", icon: <InstagramFooter />, link: "#" },
    { name: "Facebook", icon: <FacebookFooter />, link: "#" },
  ];

  const countries = [
    { name: "Colombia", flag: <ColombiaFooterFlag /> },
    { name: "Chile", flag: <ChileFooterFlag /> },
    { name: "México", flag: <MexicoFooterFlag /> },
    { name: "Perú", flag: <PeruFooterFlag /> },
    { name: "Costa Rica", flag: <CostaRicaFooterFlag /> },
    { name: "El Salvador", flag: <ElSalvadorFooterFlag /> },
    { name: "EE.UU.", flag: <UnitedStatesFooterFlag /> },
    { name: "Brasil", flag: <BrasilFooterFlag /> },
  ];

  const paymentMethods = [
    <BancolombiaFooter />,
    <VisaFooter />,
    <MasterCardRedYellowFooter />,
    <PSEFooter />,
    <AmericanExpressFooter />,
    <MasterCardRedBlueFooter />,
    <BitCoinFooter />,
    <TFooter />,
    <EthFooter />,
    <DollarBlueFooter />,
    <DFooter />,
    <LFooter />,
  ];

  return (
    <footer className="bg-black text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto gap-x-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Columna izquierda */}
          <div className="col-span-1 lg:col-span-1 mb-8 flex flex-col items-center md:items-start">
            <EncryptedLogoSvg width={150} height={50} />
            <p className="text-lg mb-4 text-center md:text-left">
              {t("downloadApp")}
            </p>
            <div className="flex flex-col space-y-2 items-center md:items-start">
              <AppleSvg />
              <PlayStoreSvg />
            </div>

            <div className="mt-4 flex justify-center md:justify-start">
              <QRFooter />
            </div>
          </div>

          {/* Columnas del medio */}
          {sections.map((section, index) => (
            <div key={index} className="col-span-1 mb-8">
              <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
                {section.title}
              </h3>
              <ul className="space-y-2 text-center md:text-left">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <Link href="#" className="hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Columna derecha (Métodos de pago) */}
          <div className="col-span-1 lg:col-span-1 mb-8">
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
              {t("securePay.title")}
            </h3>
            <div className="grid grid-cols-3 gap-2 bg-[#131313] rounded-xl p-4">
              {paymentMethods.map((icon, i) => (
                <div
                  key={i}
                  className="rounded p-2 flex items-center justify-center"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Iconos de redes sociales */}
        <div className="flex justify-center items-center space-x-6 mt-8 flex-wrap">
          {socialMedia.map((social) => (
            <Link
              key={social.name}
              href={social.link}
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">{social.name}</span>
              {social.icon}
            </Link>
          ))}
        </div>

        {/* Derechos de autor */}
        <div className="text-center mt-8">
          <p className="text-sm">{t("copyRight")}</p>
        </div>
        <hr className="w-full border-t border-[#464646] mt-4" />

        {/* Términos y condiciones */}
        <div className="text-center py-2">
          <Link href="#" className="text-sm hover:text-white">
            {t("termsAndConditions")}
          </Link>

          <span className="mx-2">|</span>
          <Link href="#" className="text-sm hover:text-white">
            {t("dataProcesing")}
          </Link>
        </div>
        <hr className="w-full border-t border-[#464646]" />

        {/* Países con banderas */}
        <div className="flex flex-wrap justify-center mt-4 space-x-4">
          {countries.map((country) => (
            <div
              key={country.name}
              className="flex items-center space-x-2 mb-2"
            >
              {country.flag}
              <span className="text-sm">{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
