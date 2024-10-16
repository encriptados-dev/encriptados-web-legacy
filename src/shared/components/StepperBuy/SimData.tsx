import React from "react";
import Region from "./Region";

import { useFormContext, UseFormWatch } from "react-hook-form";
import ListOfRegions from "../ListOfRegions/ListOfRegions";
import ListOfCountries from "../ListOfCountries/ListOfCountries";
import SearchInput from "../SearchInput";

interface RegionOption {
  label: string;
  value: string;
}

interface FormValues {
  selectedregion: "region" | "country";
}

const SimData: React.FC = () => {
  const Regions: RegionOption[] = [
    {
      label: "Región",
      value: "region",
    },
    {
      label: "País",
      value: "country",
    },
  ];

  const { watch }: { watch: UseFormWatch<FormValues> } =
    useFormContext<FormValues>();
  const selectedRegion = watch("selectedregion");

  console.log(selectedRegion);

  const renderRegionComponent: { [key: string]: JSX.Element | null } = {
    country: <ListOfCountries />,
    region: <ListOfRegions />,
  };

  return (
    <>
      <div className="w-full  flex items-center justify-center flex-wrap ">
        <div className="flex flex-col md:flex-row gap-x-4  w-10/12  mt-16  ">
          <Region options={Regions} name="selectedregion" />
          <div className="w-6/12 mt-5 lg:m-0">
            <SearchInput
              inputClassName="border-4 border-[#DCF2F8] focus:outline-none focus:border-[#DCF2F8]"
              iconPosition="right"
              placeholder={
                selectedRegion === "country"
                  ? "Buscar por país"
                  : "Buscar por región"
              }
              name="country"
            />
          </div>
        </div>
        <div className="flex    w-10/12 mt-16  mb-16  ">
          {renderRegionComponent[selectedRegion]}
        </div>
      </div>
    </>
  );
};

export default SimData;
