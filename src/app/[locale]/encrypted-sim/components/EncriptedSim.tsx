import { useTranslations } from "next-intl";
import CardDescription from "./CardDescription";
import CardSim from "./CardSim";

const EncriptedSim = () => {
    const t = useTranslations("DeliveryPage");
    return (
      <>
    
        <div className="flex max-w-[1000px] mx-auto gap-4">
            <CardDescription />
            <CardSim />
        </div>
        </>
  );
};
export default EncriptedSim;

