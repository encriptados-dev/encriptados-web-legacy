import { useTranslations } from "next-intl";
import SimProductsPage from "./SimProducts";
import BannerConnect from "./BannerConnect";
import EncryptedSimBanner from "./EncryptedSimBanner";
import ListOfFeatureCards from "./Card/ListOfFeatureCards";
import AnonimateSvg from "../svgs/AnonimateSvg";
import ImsiChangeSvg from "../svgs/ImsiChangeSvg";
import SubstituteNumberSvg from "../svgs/SubstituteNumberSvg";
import VoiceFilterSvg from "../svgs/VoiceFilterSvg";
import CallbackSvg from "../svgs/CallbackSvg";
import PlansSvg from "../svgs/PlansSvg";
import NoGeolocalizationSvg from "../svgs/NoGeolocalizationSvg";
import GlobalCoverage from "../svgs/GlobalCoverage";
import MSIMask from "../svgs/MSIMack";
import RedProviderSvg from "../svgs/RedProviderSvg";
import WithOutNumberSvg from "../svgs/WithOutNumberSvg";

const EncryptedSim = () => {  
  const t = useTranslations("EncryptedSimPage");

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="max-w-[1000px] mx-auto">
          <BannerConnect />
        </div>
        <div className="bg-custom-gradient sticky h-screen">
          <div className="max-w-[1000px] mx-auto">
            <SimProductsPage />
          </div>

          <div className="mt-8">
            <EncryptedSimBanner />
          </div>

          <div className="max-w-[1000px] justify-center mt-16 items-center">
            <ListOfFeatureCards
              features={[
                {
                  title: t("improveYourSecurity.untraceable.title"),
                  description: t("improveYourSecurity.untraceable.description"),
                  icon: <AnonimateSvg />,
                },
                {
                  title: t("improveYourSecurity.anonymity.title"),
                  description: t("improveYourSecurity.anonymity.description"),
                  icon: <AnonimateSvg />,
                },
                {
                  title: t("improveYourSecurity.changeMSI.title"),
                  description: t("improveYourSecurity.changeMSI.description"),
                  icon: <ImsiChangeSvg />,
                },
                {
                  title: t("improveYourSecurity.subtituteNumber.title"),
                  description: t("improveYourSecurity.subtituteNumber.description"),
                  icon: <SubstituteNumberSvg />,
                },
                {
                  title: t("improveYourSecurity.voiceFilter.title"),
                  description: t("improveYourSecurity.voiceFilter.description"),
                  icon: <VoiceFilterSvg />,
                },
                {
                  title: t("improveYourSecurity.callback.title"),
                  description: t("improveYourSecurity.callback.description"),
                  icon: <CallbackSvg />,
                },
                {
                  title: t("improveYourSecurity.plans.title"),
                  description: t("improveYourSecurity.plans.description"),
                  icon: <PlansSvg />,
                },
                {
                  title: t("improveYourSecurity.geolocalization.title"),
                  description: t("improveYourSecurity.geolocalization.description"),
                  icon: <NoGeolocalizationSvg />,
                },
                {
                  title: t("improveYourSecurity.globalCoverage.title"),
                  description: t("improveYourSecurity.globalCoverage.description"),
                  icon: <GlobalCoverage />,
                },
                {
                  title: t("improveYourSecurity.maskMSI.title"),
                  description: t("improveYourSecurity.maskMSI.description"),
                  icon: <MSIMask />,
                },
                {
                  title: t("improveYourSecurity.providerPrivateRed.title"),
                  description: t("improveYourSecurity.providerPrivateRed.description"),
                  icon: <RedProviderSvg />,
                },
                {
                  title: t("improveYourSecurity.withOutNumber.title"),
                  description: t("improveYourSecurity.withOutNumber.description"),
                  icon: <WithOutNumberSvg />,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EncryptedSim;

