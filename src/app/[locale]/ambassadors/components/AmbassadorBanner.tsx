import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "@/shared/components/Button";

export default function AmbassadorBanner() {
  const t = useTranslations();

  return (
    <section className="py-8 px-4 md:px-6 ">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#051A22]">
          <div className="flex flex-col items-center justify-between gap-8 p-6 md:flex-row md:p-8 lg:p-16">
            <div className="text-center md:text-left md:w-1/2 lg:w-7/12">
              <h2 className="mb-8 text-base font-bold leading-tight text-white sm:text-xl w-[400px] md:text-xl lg:text-5xl ">
                <span className="text-[#FFFFF]">
                  {t("AmbassadorsPage.banner.joinUsTitle")}
                </span>{" "}
                <span className="text-[#45D4FF]">
                  {t("AmbassadorsPage.banner.programTitle")}
                </span>{" "}
                <span className="text-[#FFFFFF]">
                  {t("AmbassadorsPage.banner.ofTitle")}
                </span>{" "}
                <span className="text-[#00FFC2]">
                  {t("AmbassadorsPage.banner.ambassadorsTitle")}
                </span>
              </h2>
              <div className="flex justify-center md:justify-start">
                <Button intent="elegant">
                  {" "}
                  {t("AmbassadorsPage.banner.showBenefits")}
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-5/12">
              <Image
                src="/images/ambassadors/ambassadors-banner.png"
                alt={"alt"}
                width={400}
                height={400}
                className="mx-auto w-full max-w-md object-contain md:max-w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
