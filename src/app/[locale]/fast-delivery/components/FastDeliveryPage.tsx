import Button from "@/shared/components/Button";
import Banner from "./Banner";

import CenterWrapper from "@/shared/components/CenterWrapper";
import { useTranslations } from "next-intl";
import FindOurPoints from "./FindOurPoints";
import HowDoesFastDelivery from "../HowDoesFastDelivery.tsx/HowDoesFastDelivery";

const FastDeliveryPage = () => {
  const t = useTranslations("DeliveryPage");
  return (
    <>
      <Banner />

      <FindOurPoints />
      <CenterWrapper>
        <Button size="medium" rounded="full" intent="primary">
          {t("chatTelegram")}
        </Button>
      </CenterWrapper>

      <HowDoesFastDelivery />
    </>
  );
};

export default FastDeliveryPage;
