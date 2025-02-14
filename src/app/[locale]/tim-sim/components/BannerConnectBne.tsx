import Image from 'next/image';
import BannerBne from '/public/images/bne-sim/image-banner-bne.png';
import { useTranslations } from 'next-intl';

const BannerConnectBne: React.FC = () => {
  const t = useTranslations('BneSimPage'); // Nombre de la sección de traducción

  return (
    <div
    style={{
      background:
        'radial-gradient(circle at -10% 27%, rgba(0, 157, 255,0.8) 0%, rgba(0, 157, 255,0.9) 3%, rgba(25,25,25,1) 20%, rgba(25,25,25,1) 60%)',
    }}
    className="relative w-full h-[80vh] flex items-end"
    >
      {/* Contenedor principal */}
      <div className="container mx-auto px-4 py-12 max-w-[1200px] relative h-full flex justify-between items-start">
        
        {/* 📌 Contenedor de texto */}
        <div className="w-[50%] flex flex-col justify-center items-start text-white h-full">
          {/* Sim TIM Logo */}
          <Image
            src="/images/bne-sim/Frame 480956513.png"
            alt="SIM TIM Logo"
            width={100}
            height={30}
            priority
            className="mb-4"
          />

          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {t('headline')} <br />
            {t('headline1')} <br />
            <span className="text-[#10b4e7]">{t('headline2')}</span>
          </h2>
          <p className="text-2xl">
            {t('subheadline')} <br />
            {t('subheadline2')}
          </p>
        </div>

      </div>

         {/* 📌 Contenedor de imagen (Derecha) */}
      <div className="absolute bottom-0 right-0 w-[50%] h-full flex items-end justify-center">
        {/* Imagen del logo grande (Fondo) */}
        <Image
            src="/images/bne-sim/tim_logo_600px_positivo 1.png"
            alt="TIM Logo"
            width={600}
            height={600}
            priority
            className="absolute bottom-10 right-0 -z-9 opacity-100 scale-100"
          />
          {/* Imagen de la persona */}
          <Image
            src="/images/bne-sim/image-banner-bne.png"
            alt="Person"
            width={400}
            height={600}
            priority
            className="h-auto object-cover z-10 scale-60"
          />

          {/* Etiquetas */}
          {/* <div className="absolute flex flex-wrap justify-center gap-2 bottom-5 left-[10%]">
            <Image
              src="/images/bne-sim/Frame 480955929.png"
              alt="Total anonimato"
              width={180}
              height={44}
            />
            <Image
              src="/images/bne-sim/Frame 480955934.png"
              alt="Sin recargos Roaming"
              width={180}
              height={44}
            />
            <Image
              src="/images/bne-sim/Frame 480955935.png"
              alt="Compatible iOS y Android"
              width={180}
              height={44}
            />
            <Image
              src="/images/bne-sim/Frame 480955936.png"
              alt="Cobertura en 150 países"
              width={180}
              height={44}
            />
            <Image
              src="/images/bne-sim/Frame 480955952.png"
              alt="Internet Ilimitado"
              width={180}
              height={44}
            />
            <Image
              src="/images/bne-sim/Frame 480956514.png"
              alt="Activación Instantánea"
              width={180}
              height={44}
            />
          </div> */}
        </div>
      </div>
  );
};

export default BannerConnectBne;
