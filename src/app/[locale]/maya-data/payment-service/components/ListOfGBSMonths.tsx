import React from "react";
import { Controller, useFormContext, FieldValues } from "react-hook-form";
import { motion } from "framer-motion";

export interface Option {
  label: string;
  value: string;
}

interface SelectCardProps {
  name: string;
  options: Option[];
}

const ListOfGBSMonths: React.FC<SelectCardProps> = ({ name, options }) => {
  const { control, watch, setValue } = useFormContext<FieldValues>();
  const selectedValue = watch(name);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange } }) => (
        <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 w-full">
          {options.map((option, index) => (
            <motion.div
              key={index}
              onClick={() => {
                setValue(name, option.value);
                onChange(option.value);
              }}
              className={`flex px-5 py-4 border  w-full justify-center items-center rounded-xl cursor-pointer ${
                selectedValue === option.value
                  ? "border-[#085D77] bg-[#F2FCFF] font-bold text-[#085D77] shadow-xl"
                  : "bg-gray-100 border-gray font-bold text-gray-500"
              }`}
              initial={{ scale: 1 }} // Estado inicial
              whileTap={{ scale: 0.95 }} // Escalar al hacer clic
              transition={{ type: "spring", stiffness: 300 }} // Configuración de la animación
            >
              <span>{option.label}</span>
            </motion.div>
          ))}
        </div>
      )}
    />
  );
};

export default ListOfGBSMonths;
