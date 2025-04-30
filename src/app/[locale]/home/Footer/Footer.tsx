"use client";
import Link from "next/link";
import EncryptedLogoSvg from "../../../../shared/svgs/EncryptedLogoSvg";
import AppleSvg from "../../../../shared/svgs/AppleSvg";
import PlayStoreSvg from "../../../../shared/svgs/PlayStoreSvg";
import QRFooterBlack from "../../../../shared/FooterEncrypted/icon/QRFooterBlack";
import YoutubeFooter from "../../../../shared/FooterEncrypted/icon/YoutubeFooter";
import ColombiaFooterFlag from "../../../../shared/FooterEncrypted/icon/ColombiaFooterFlag";
import ChileFooterFlag from "../../../../shared/FooterEncrypted/icon/ChileFooterFlag";
import MexicoFooterFlag from "../../../../shared/FooterEncrypted/icon/MexicoFooterFlag";
import PeruFooterFlag from "../../../../shared/FooterEncrypted/icon/PeruFooterFlag";
import CostaRicaFooterFlag from "../../../../shared/FooterEncrypted/icon/CostaRicaFooterFlag";
import ElSalvadorFooterFlag from "../../../../shared/FooterEncrypted/icon/ElSalvadorFooterFlag";
import BrasilFooterFlag from "../../../../shared/FooterEncrypted/icon/BrasilFooterFlag";
import BancolombiaBlueFooter from "../../../../shared/FooterEncrypted/payicon/BancolombiaBlueFooter";
import VisaFooterBlue from "../../../../shared/FooterEncrypted/payicon/VisaFooterBlue";
import MasterCardRedYellowFooter from "../../../../shared/FooterEncrypted/payicon/MasterCardRedYellowFooter";
import MasterCardRedBlueFooter from "../../../../shared/FooterEncrypted/payicon/MasterCardRedBlueFooter";
import AmericanExpressFooter from "../../../../shared/FooterEncrypted/payicon/AmericanExpressFooter";
import PSEFooter from "../../../../shared/FooterEncrypted/payicon/PSEFooter";
import BitCoinFooter from "../../../../shared/FooterEncrypted/payicon/BitCoinFooter";
import TFooter from "../../../../shared/FooterEncrypted/payicon/TFooter";
import EthFooter from "../../../../shared/FooterEncrypted/payicon/EthFooter";
import DollarBlueFooter from "../../../../shared/FooterEncrypted/payicon/DollarBlueFooter";
import DFooter from "../../../../shared/FooterEncrypted/payicon/DFooter";
import LFooter from "../../../../shared/FooterEncrypted/payicon/LFooter";
import { useTranslations } from "next-intl";
import Marquee from "react-fast-marquee";
import DownloadAPKNew from "@/app/[locale]/our-products/components/svgs/DownloadAPKNew";
import EncriptadosLogoBlackOnly from "@/shared/svgs/EncriptadosLogoBlackOnly";
import { Send, X, Youtube } from "lucide-react";
import { Ellipsis } from "lucide-react";
import LinkedinFooter from "@/shared/FooterEncrypted/icon/LinkedinFooter";

export default function FooterEncrypted() {
  const t = useTranslations("FooterMenu");

  const sections = [
    // {
    //   title: "SIM - eSIMs",
    //   items: [t("simEsims.encryptedSim"), "SIM IRA", "SIM TIM"],
    // },
    {
      title: "Celulares Encriptados",
      items: [
        "Cryptcom",
        "Chatmail",
        "GhostChat",
        "VaultChat",
        "Renati",
        "Secure MDM iPhone",
        "Secure MDM Android",
        "T2 Communicator",
      ],
    },
    {
      title: t("phoneEncrypted.title"),
      items: [
        "SecureCrypt",
        "Armadillo",
        "UltraX",
        "Tribu",
        "Intact",
        "DEC Secure",
        "TotalSec",
      ],
    },
    {
      title: t("encryptedSims.title"),
      items: [
        "Silent phone",
        "VncLagon",
        "Threema",
        "Threema Works",
        "NordVPN",
        "Salt",
        "VaultChat",
        "Armadillo",
      ],
    },
  ];

  const socialMedia = [
    {
      name: "YouTube",
      icon: <YoutubeFooter />,
      link: "https://www.youtube.com/@encriptados_io",
    },
  ];

  const countries = [
    { name: "Colombia", flag: <ColombiaFooterFlag /> },
    { name: "Chile", flag: <ChileFooterFlag /> },
    { name: "México", flag: <MexicoFooterFlag /> },
    { name: "Perú", flag: <PeruFooterFlag /> },
    { name: "Costa Rica", flag: <CostaRicaFooterFlag /> },
    { name: "El Salvador", flag: <ElSalvadorFooterFlag /> },
    { name: "Brasil", flag: <BrasilFooterFlag /> },
  ];

  const paymentMethods = [
    { key: "bancolombia", icon: <BancolombiaBlueFooter /> },
    { key: "visa", icon: <VisaFooterBlue /> },
    { key: "mastercardRedYellow", icon: <MasterCardRedYellowFooter /> },
    { key: "pse", icon: <PSEFooter /> },
    { key: "americanExpress", icon: <AmericanExpressFooter /> },
    { key: "mastercardRedBlue", icon: <MasterCardRedBlueFooter /> },
    { key: "bitcoin", icon: <BitCoinFooter /> },
    { key: "tether", icon: <TFooter /> },
    { key: "ethereum", icon: <EthFooter /> },
    { key: "dollarBlue", icon: <DollarBlueFooter /> },
    { key: "dFooter", icon: <DFooter /> },
    { key: "lFooter", icon: <LFooter /> },
  ];

  return (
    <footer className="bg-white text-[#3E3E3E] py-8 px-4 sm:px-6 lg:px-8 relative hidden lg:block">
      <div className="max-w-7xl mx-auto gap-x-6">
        <div className="absolute bottom-0 left-7 bg-[#006ad5] text-white italic pt-4 py-2 px-8 rounded-t-md">
          <p>Telegram</p>
          <span className="absolute -top-3 -left-3 rounded-full bg-[#006ad5] p-1">
            <X height={20} />
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-3">
          <div className="col-span-1 lg:col-span-1 mb-8">
            <h3 className="text-base font-semibold mb-4 text-center">
              {t("securePay.title")}
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {paymentMethods.map(({ key, icon }) => (
                <div
                  key={key}
                  className="rounded p-2 flex items-center justify-center"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {sections.map((section, index) => (
            <div key={index} className="col-span-1 mb-8">
              <h3 className="text-base font-semibold mb-4 text-center">
                {section.title}
              </h3>
              <ul className="space-y-2 text-center">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <Link href="#" className="hover:text-[#000]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-1 lg:col-span-1 mb-8 flex flex-col items-center">
            <h3 className="text-base font-semibold mb-4 text-center md:text-left">
              Contactanos por Telegram
            </h3>
            <EncriptadosLogoBlackOnly />
            {/* <p className="text-lg mb-4 text-center md:text-left">
              {t("downloadApp")}
            </p> */}
            {/* <div className="flex flex-col space-y-2 items-center md:items-start">
              <AppleSvg />
              <PlayStoreSvg />
              <DownloadAPKNew width="187" height="55" />
            </div> */}

            <div className="mt-4 flex justify-center md:justify-start">
              <QRFooterBlack />
            </div>
          </div>

          <div className="col-span-1 lg:col-span-1 mb-8 flex flex-col items-center">
            <div className="flex gap-3 items-center">
              <Send />
              <LinkedinFooter /> <YoutubeFooter /> <Ellipsis />
            </div>
          </div>
        </div>

        {/* <div className="flex justify-center items-center space-x-6 mt-8 flex-wrap">
          {socialMedia.map((social) => (
            <a
              key={social.name}
              href={social.link}
              className="flex items-center space-x-3 text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
              <div>
                <h1 className="text-sm font-semibold">
                  Sigue nuestro canal de Youtube
                </h1>
                <span className="sr-only">{social.name}</span>
              </div>
            </a>
          ))}
        </div> */}

        {/* <hr className="w-full border-t border-[#464646] mt-8 mb-4" />
        <div className="flex justify-between items-center text-sm">
          <div>
            <Link href="#" className="hover:text-white">
              Términos y condiciones
            </Link>
            {" | "}
            <Link href="" className="hover:text-white">
              Política y tratamiento de datos.
            </Link>
          </div>
          <p>{t("copyRight")}</p>
        </div> */}
        {/* <hr className="w-full border-t border-[#464646] mt-4 mb-4" />
        <div>
          <Marquee direction="left" speed={50} gradient={false} delay={0}>
            <div className="flex">
              {countries.map((country, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center mb-2 cursor-grab"
                  style={{ width: "120px" }}
                >
                  <div className="flex justify-center items-center">
                    <div className="w-20 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      {country.flag}
                    </div>
                    <p className="text-xs">{country.name}</p>
                  </div>
                </div>
              ))}
              {countries.map((country, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex items-center justify-center mb-2 cursor-grab"
                  style={{ width: "120px" }}
                >
                  <div className="flex justify-center items-center">
                    <div className="w-20 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      {country.flag}
                    </div>
                    <p className="text-xs">{country.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div> */}
      </div>
    </footer>
  );
}
