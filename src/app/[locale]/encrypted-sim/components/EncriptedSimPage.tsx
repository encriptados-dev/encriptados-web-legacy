import { useTranslations } from "next-intl";
import SimProductsPage from "./SimProducts";
import BannerConnect from "./BannerConnect";

const EncriptedSim = () => {
  const t = useTranslations("DeliveryPage");
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
        </div>
      </div>
    </>
  );
};
export default EncriptedSim;
