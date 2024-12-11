import Image from 'next/image';
import BannerBne from '/public/images/bne-sim/image-banner-bne.png';
import { useTranslations } from 'next-intl';

const BannerConnectBne: React.FC = () => {
  const t = useTranslations('BneSimPage'); // Nombre de la sección de traducción

  return (
    <div style={{ background: 'linear-gradient(30deg, rgba(25,25,25,1) 70%, rgba(16,180,231,1) 100%)' }} className="relative w-full sm:min-h-[90vh] md:min-h-[90vh] lg:min-h-[70vh] min-h-[100vh] overflow-hidden">
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between max-w-[1100px]">
        <div className="text-white max-w-xl mb-8 lg:mb-0 z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('headline')} <br />
            {t('headline1')} <br />
            <span className="text-[#10b4e7]">{t('headline2')}</span>
          </h2>
          <p className="text-2xl mb-6">
            {t('subheadline')} <br />
            {t('subheadline2')}
          </p>
        </div>
        <div className="relative z-10 flex items-center justify-center">
          <div className="">
            <Image
              src={BannerBne}
              alt="Banner BNE"
              className="w-full max-w-[450px] object-contain"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[15vh] bg-[#f4f8fa]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-24"
        >
          <path
            d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
            fill="rgba(25,25,25,1)" /* Ajusta el color según lo necesites */
          />
        </svg>
      </div>
    </div>
  );
};

export default BannerConnectBne;
