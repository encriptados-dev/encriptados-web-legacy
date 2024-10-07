import { useTranslations } from "next-intl";
import SimProductsPage from "./SimProducts";
import BannerConnect from "./BannerConnect";

const EncriptedSim = () => {
    const t = useTranslations("DeliveryPage");
    return (
      <>
        <BannerConnect />
        <div className="max-w-[1000px] mx-auto ">
            <SimProductsPage />            
        </div>
        </>
  );
};
export default EncriptedSim;

