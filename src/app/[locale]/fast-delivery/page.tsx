import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations();

  return <h1>{t("DeliveryPage.title")}</h1>;
};

export default Page;
