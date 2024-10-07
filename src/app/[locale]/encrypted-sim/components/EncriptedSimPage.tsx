import { useTranslations } from "next-intl";
import CardDescription from "./CardDescription";
import CardSim from "./CardSim";
import BannerConnect from "./BannerConnect";

const EncriptedSim = () => {
    const t = useTranslations("DeliveryPage");
    return (
      <>
        <BannerConnect />
        <div className="flex max-w-[1000px] mx-auto gap-4">
            <CardDescription />
            <CardSim />
        </div>
        </>
  );
};
export default EncriptedSim;

