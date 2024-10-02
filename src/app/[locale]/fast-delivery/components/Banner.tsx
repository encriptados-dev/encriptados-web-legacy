import Button from "@/shared/components/Button";
import { useTranslations } from "next-intl";
import Text from "@/shared/components/Text";
import CircleTitle from "@/shared/components/CircleTitle";
import Image from "next/image";
import Man from "../../../../../public/images/fastdeliverypage/man.png";
import Women from "../../../../../public/images/fastdeliverypage/women.png";

const Banner = () => {
  const t = useTranslations("DeliveryPage");
  return (
    <div className=" w-full h-[450px] bg-cyan-gradient flex justify-around px-7  items-end">
      <div className="flex flex-col items-center justify-end h-full">
        <Image quality={100} width={365} height={365} alt="woman" src={Women} />
      </div>
      <div className="flex flex-col justify-center gap-y-4 w-6/12 text-center items-center mb-24">
        <CircleTitle size="large" rounded="full" intent="ghost">
          {t("unnecessaryWaits")}
        </CircleTitle>
        <Text customClass="font-bold" color="#333333" size="4xl">
          {t("fastDeliveryBannerTitle")}
        </Text>
        <Text color="black" size="2xl">
          {t("fastDeliveryBannerSubtitle")}
        </Text>

        <Button rounded="full" intent="secondary" size="large">
          {t("fastDeliveryLocation")}
        </Button>
      </div>
      <div className="flex flex-col items-center justify-end h-full">
        {" "}
        {/* Alineación hacia abajo */}
        <Image quality={100} width={365} height={365} alt="man" src={Man} />
      </div>
    </div>
  );
};

export default Banner;
