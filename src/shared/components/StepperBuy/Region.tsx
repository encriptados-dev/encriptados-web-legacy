import React, { useState } from "react";
import { Controller, useFormContext, FieldValues } from "react-hook-form";

interface Option {
  label: string;
  value: string;
}

interface SelectCardProps {
  name: string;
  options: Option[];
}

const Region: React.FC<SelectCardProps> = ({ name, options }) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const { control } = useFormContext<FieldValues>();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, value } }) => (
        <div
          className={"flex gap-x-4"} // Una columna en móviles y 3 en pantallas medianas y grandes
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedCard(option.value);
                onChange(option.value);
              }}
              className={`flex  w-[100px] items-center justify-center py-4 cursor-pointer shadow-md rounded-full text-center  transition duration-200 ease-in-out ${
                selectedCard === option.value
                  ? "bg-white font-bold"
                  : "bg-gray-300"
              }`} // Cambia el fondo según la selección
            >
              <span
                className={`${
                  selectedCard === option.value ? "text-black" : "text-gray-600"
                }`}
              >
                {option.label}
              </span>
            </div>
          ))}
        </div>
      )}
    />
  );
};

export default Region;
