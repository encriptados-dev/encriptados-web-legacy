import React, { ReactNode } from "react";
import { Controller, useFormContext, FieldValues } from "react-hook-form";

export interface Option {
  label: string;
  value: string;
  icon: ReactNode;
}

interface SelectCardProps {
  name: string;
  options: Option[];
}

const SelectCard: React.FC<SelectCardProps> = ({ name, options }) => {
  const { control, watch, setValue } = useFormContext<FieldValues>();

  const selectedValue = watch(name);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange } }) => (
        <div className="flex flex-wrap justify-center items-center gap-4 p-4 ">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setValue(name, option.value);
                onChange(option.value);
              }}
              className={`flex flex-col items-center justify-center w-48 h-48 cursor-pointer rounded-lg text-center font-bold border-4 shadow-md transition duration-200 ease-in-out ${
                selectedValue === option.value
                  ? "border-[#35CDFB] bg-white"
                  : "border-gray-400 bg-gray-100"
              }`}
            >
              <div className="mb-2">{option.icon}</div>
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    />
  );
};

export default SelectCard;
