import { useTranslations } from "next-intl";
import Image from "next/image";
import IconSvg from "../../../../../public/images/fastdeliverypage/icons/house.svg";
import IframeComponent from "@/shared/components/IframeComponent";

const FindOurProducts = () => {
  const t = useTranslations("DeliveryPage");
  return (
    <div className="flex flex-col justify-center items-center  w-12/12 mt-24 mb-24">
      <div className="flex flex-col justify-center items-center  w-6/12 gap-y-3">
        <Image src={IconSvg} alt="icon" />
        <h1 className="sm:text-xl md:text-base lg:text-lg xl:text-4xl font-bold text-[#333333] text-center">
          {t("deliveryPointsTitle")}
        </h1>
        <p className="text-black sm:text-xl md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-center">
          {t("deliveryPointsDescription")}
        </p>
      </div>
      <div className="w-11/12 md:w-7/12 mt-24">
        <IframeComponent
          width={"100%"}
          height={"600px"}
          url="https://www.google.com/maps/d/embed?mid=1KFwxF55wYgkMZ2p0IwF6DkYvXViCL3c&ehbc=2E312F&noprof=1&hl"
        />
      </div>
    </div>
  );
};

export default FindOurProducts;
