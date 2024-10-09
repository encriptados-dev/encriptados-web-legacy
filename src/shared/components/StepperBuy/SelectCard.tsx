import React, { ReactNode, useState } from "react";
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
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const { control } = useFormContext<FieldValues>();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, value } }) => (
        <div
          className={`grid gap-4 p-4 
            grid-cols-1 md:grid-cols-3`} // Una columna en móviles y 3 en pantallas medianas y grandes
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedCard(option.value);
                onChange(option.value);
              }}
              className={`flex flex-col items-center justify-center p-5 cursor-pointer rounded-lg text-center font-bold border-4 shadow-md transition duration-200 ease-in-out ${
                selectedCard === option.value
                  ? "border-[#35CDFB] bg-white"
                  : "border-gray-400 bg-gray-100"
              }`}
            >
              <div className="mb-2">{option.icon}</div>
              {option.label}
            </div>
          ))}
        </div>
      )}
    />
  );
};

export default SelectCard;
