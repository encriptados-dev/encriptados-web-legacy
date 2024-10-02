import Button from "@/shared/components/Button";
import { useTranslations } from "next-intl";
import Banner from "./Banner";
import FindOurPoints from "./FindOurPoints";

const FastDeliveryPage = () => {
  const t = useTranslations("DeliveryPage");
  return (
    <>
      <Banner />

      <FindOurPoints />
    </>
  );
};

export default FastDeliveryPage;
