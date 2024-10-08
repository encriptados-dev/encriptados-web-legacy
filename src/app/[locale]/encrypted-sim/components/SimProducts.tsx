import CardDescription from "./CardDescription";
import CardSim from "./CardSim";
import LogoSvg1 from "/public/images/encrypted-sim/icons/encriptados_logo.svg";
import CharacteristicDatasSvg from "/public/images/encrypted-sim/icons/characteristic-data.svg";
import CharacteristicSpeedSvg from "/public/images/encrypted-sim/icons/characteristic-speed.svg";
import CharacteristicAppSvg from "/public/images/encrypted-sim/icons/characteristic-app.svg";
import CharacteristicAnonimitySvg from "/public/images/encrypted-sim/icons/characteristic-anonymity.svg";
import CharacteristicReplaceSvg from "/public/images/encrypted-sim/icons/characteristic-replace.svg";
import CharacteristicVoiceSvg from "/public/images/encrypted-sim/icons/characteristic-voice.svg";
import CharacteristicComunicationsSvg from "/public/images/encrypted-sim/icons/characteristic-communications.svg";
import CharacteristicTopUpSvg from "/public/images/encrypted-sim/icons/characteristic-top-up.svg";
import EncryptedSimData from "/public/images/encrypted-sim/Encrypted_sim_card.png";
import EncryptedSimImsi from "/public/images/encrypted-sim/Encrypted_sim_card_IMSI.png";
import EncryptedSimMinutes from "/public/images/encrypted-sim/Encrypted_sim_card_minutes.png";
import EncriptedEsim from "/public/images/encrypted-sim/Encrypted_sim_card_eSIM.png";
import IcomImsiSvg from "/public/images/encrypted-sim/icons/icon-imsi.svg";
import IcomMinutesSvg from "/public/images/encrypted-sim/icons/icon-minutes.svg";
import IconDataSvg from "/public/images/encrypted-sim/icons/icon-data.svg";
import IcomSimSvg from "/public/images/encrypted-sim/icons/icon-sim.svg";
// #1 data
const commonFeatures = [
  {
    icon: CharacteristicDatasSvg,
    alt: "Icono de datos móviles",
    description: "Datos móviles",
  },
  {
    icon: CharacteristicSpeedSvg,
    alt: "Icono de velocidad",
    description: "Velocidad de 4/5G LTE",
  },
  {
    icon: CharacteristicAppSvg,
    alt: "Icono de app",
    description: "App disponible iOS y Android",
  },
];

const cardData = [
  {
    logoSrc: LogoSvg1,
    title: "Compra tu plan de DATOS móviles y comunícate con total privacidad",
    description: "Disponible en más de 200 países",
    features: commonFeatures,
    productImage: EncryptedSimData,
    featuresCardSim: [
      "Datos añadidos al instante",
      "Irrastreable y anónimo",
      "Protegido contra IMSI CATCHER'S",
      "Sin fechas de corte",
    ],
    priceRange: "25 - 500 USD",
    headerIcon: IconDataSvg,
    headerTitle: "Recarga de Datos",
  },
  // #2 Minutes
  {
    logoSrc: LogoSvg1,
    title:
      "Compra MINUTOS para hacer llamadas anónimas e imposibles de rastrear",
    description: "Disponible en más de 200 países",
    features: [
      {
        icon: CharacteristicAnonimitySvg,
        alt: "Icono de anonimato",
        description: "Privacidad y anonimato",
      },
      {
        icon: CharacteristicReplaceSvg,
        alt: "Icono de numero sustituto",
        description: "Número sustituto",
      },
      {
        icon: CharacteristicVoiceSvg,
        alt: "Icono de voz",
        description: "Callback",
      },
      {
        icon: CharacteristicVoiceSvg,
        alt: "Icono de voz",
        description: "Filtros de voz",
      },
      {
        icon: CharacteristicAppSvg,
        alt: "Icono de app",
        description: "App disponible iOS y Android",
      },
    ],
    productImage: EncryptedSimMinutes,
    featuresCardSim: [
      "Saldo de llamadas añadido al instante",
      "Llamadas anónimas e irrastreables",
      "Filtros para alterar tono de voz",
      "Número sustituto",
      "Callback",
    ],
    priceRange: "110 - 360 USD",
    headerIcon: IcomMinutesSvg,
    headerTitle: "Recarga de minutos",
  },
  // #3 IMSI
  {
    logoSrc: LogoSvg1,
    title:
      "Compra cambios de IMSI el equivalente a reemplazar tu SIM por una nueva",
    description: "Disponible en más de 200 países",
    features: [
      {
        icon: CharacteristicAnonimitySvg,
        alt: "Icono de anonimato",
        description: "Anonimato",
      },
      {
        icon: CharacteristicComunicationsSvg,
        alt: "Icono de comunicaciones encriptadas",
        description: "Comunicaciones encriptadas",
      },
      {
        icon: CharacteristicReplaceSvg,
        alt: "Icono de imsi",
        description: "Reemplaza tu IMSI",
      },
      {
        icon: CharacteristicAppSvg,
        alt: "Icono de app",
        description: "App disponible iOS y Android",
      },
    ],
    productImage: EncryptedSimImsi,
    featuresCardSim: [
      "*Solo aplica en SIM CARD FÍSICA",
      "Privacidad y Anonimato",
      "Evita rastreos o intentos de localización",
      "Elimina todo rastro",
    ],
    priceRange: "5 - 50 USD",
    headerIcon: IcomImsiSvg,
    headerTitle: "Recarga de cambio de IMSI",
  },
  // #4 eSIM
  {
    logoSrc: LogoSvg1,
    title: "Conexión Global de Alta Velocidad",
    description: "Accede a internet con velocidades LTE en todo el mundo.",
    features: [
      {
        icon: CharacteristicAnonimitySvg,
        alt: "Icono de datos",
        description: "Anonimato",
      },
      {
        icon: CharacteristicTopUpSvg,
        alt: "Icono de velocidad",
        description: "Recarga datos",
      },
      {
        icon: CharacteristicComunicationsSvg,
        alt: "Icono de aplicación",
        description: "Recarga minutos",
      },
      {
        icon: CharacteristicAppSvg,
        alt: "Icono de aplicación",
        description: "App disponible iOS y Android",
      },
    ],
    productImage: EncriptedEsim,
    featuresCardSim: [
      "Recibela al instante",
      "Privacidad y Anonimato",
      "Comunicaciones encriptadas",
      "eSIM irrastreable",
    ],
    priceRange: "10 USD",
    headerIcon: IcomSimSvg,
    headerTitle: "eSIM Virtual",
  },
  // #5 SIM CARD
  {
    logoSrc: LogoSvg1,
    title: "Conexión Global de Alta Velocidad",
    description: "Accede a internet con velocidades LTE en todo el mundo.",
    features: [
      {
        icon: CharacteristicAnonimitySvg,
        alt: "Icono de datos",
        description: "Planes de datos ilimitados",
      },
      {
        icon: CharacteristicTopUpSvg,
        alt: "Icono de velocidad",
        description: "Conexión 5G ultra rápida",
      },
      {
        icon: CharacteristicComunicationsSvg,
        alt: "Icono de aplicación",
        description: "Aplicación fácil de usar",
      },
      {
        icon: CharacteristicReplaceSvg,
        alt: "Icono de aplicación",
        description: "Aplicación fácil de usar",
      },
      {
        icon: CharacteristicAppSvg,
        alt: "Icono de aplicación",
        description: "Aplicación fácil de usar",
      },
    ],
    productImage: EncryptedSimImsi,
    featuresCardSim: [
      "Recibela en cualquier lugar del mundo",
      "Privacidad y Anonimato",
      "Comunicaciones encriptadas",
      "SIM irrastreable con cambios de IMSI",
    ],
    priceRange: "10 USD",
    headerIcon: IcomImsiSvg,
    headerTitle: "SIM Física",
  },
];

const SimProductsPage: React.FC = () => {
    return (
      <div className="flex flex-col gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="
              bg-custom-linear 
              sm:!bg-transparent 
              shadow-lg 
              sm:shadow-none 
              gap-6 
              flex flex-col 
              sm:flex-row 
              m-2 
              my-0 
              rounded-3xl 
              p-4 
              py-10
            "
          >
            <CardDescription
              logoSrc={card.logoSrc}
              title={card.title}
              description={card.description}
              features={card.features}
            />
            <CardSim
              productImage={card.productImage}
              features={card.featuresCardSim}
              priceRange={card.priceRange}
              headerIcon={card.headerIcon}
              headerTitle={card.headerTitle}
            />
          </div>
        ))}
      </div>
    );
  };
  
  
export default SimProductsPage;
