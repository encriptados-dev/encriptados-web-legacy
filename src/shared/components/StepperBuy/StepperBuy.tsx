import React from "react";
import SelectCard from "./SelectCard";
import { useFormContext } from "react-hook-form";
import PhySim from "@/shared/svgs/PhySimSvg";
import RechargeBuy from "@/shared/svgs/RechargeBuySvg";
import DotsSvg from "@/shared/svgs/DotsSvg";
import Region from "./Region";
import SearchInput from "./SearchCountry";

const StepperBuy = () => {
  const { watch } = useFormContext();
  const selectedValue = watch("selectedcardvalue");

  const ICON_SIZE = 50;
  const SELECTED_COLOR = "#35CDFB";
  const DEFAULT_COLOR = "gray";

  const options = [
    {
      label: "SIM Física",
      value: "physical_sim",
      icon: (
        <PhySim
          color={
            selectedValue === "physical_sim" ? SELECTED_COLOR : DEFAULT_COLOR
          }
          height={ICON_SIZE}
          width={ICON_SIZE}
          aria-label="SIM Física"
        />
      ),
    },
    {
      label: "Recargar eSIM",
      value: "recharge_esim",
      icon: (
        <RechargeBuy
          color={
            selectedValue === "recharge_esim" ? SELECTED_COLOR : DEFAULT_COLOR
          }
          height={ICON_SIZE}
          width={ICON_SIZE}
          aria-label="Recargar eSIM"
        />
      ),
    },
    {
      label: "eSIM + recarga",
      value: "esim_recharge",
      icon: (
        <DotsSvg
          color={
            selectedValue === "esim_recharge" ? SELECTED_COLOR : DEFAULT_COLOR
          }
          height={ICON_SIZE}
          width={ICON_SIZE}
          aria-label="eSIM + recarga"
        />
      ),
    },
  ];

  const Regions = [
    {
      label: "Región",
      value: "region",
    },
    {
      label: "País",
      value: "country",
    },
  ];

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <SelectCard options={options} name="selectedcardvalue" />
      </div>

      <div className="flex flex-col md:flex-row gap-x-4 justify-center items-center mt-10">
        <Region options={Regions} name="selectedregion" />
        <div className="w-full xl:w-7/12 mt-4 ">
          <SearchInput name="country" />
        </div>
      </div>
    </>
  );
};

export default StepperBuy;
