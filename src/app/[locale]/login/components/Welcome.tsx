import React from "react";
import Image from "next/image";

import { InputFormContext } from "@/shared/components/InputFormContext";
import Button from "@/shared/components/Button";
import CircleTitle from "@/shared/components/CircleTitle";
import { useFormContext } from "react-hook-form";
import OnlyKeyLoginIconSvg from "@/shared/svgs/OnlyKeyLoginIconSvg";

const Welcome = () => {
  const Mans = "/images/login/mans.png";

  const { handleSubmit, setValue, watch } = useFormContext();

  console.log(watch());

  return (
    <>
      <div className="flex flex-col justify-center w-full md:w-5/12 lg:w-4/12 mb-6 md:mb-0 md:mr-6">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
          Genera una cuenta aleatoria{" "}
          <span className="text-[#35CDFB]">con un código único de acceso</span>
        </h1>
        <h2 className="text-white mt-2 text-base md:text-xl lg:text-xl font-light ">
          Gestiona todo sin involucrar tus datos personales.
        </h2>
        <div className="w-8/12 mt-6 md:mt-8">
          <Image
            className="object-contain w-full"
            width={500}
            quality={100}
            height={500}
            src={Mans}
            alt="Login illustration"
          />
        </div>
      </div>

      <div className="w-full md:w-[500px] bg-[#0E0E0E] h-auto md:h-[500px] rounded-2xl flex flex-col justify-center items-center gap-y-4 p-6 md:px-10">
        <OnlyKeyLoginIconSvg height={40} width={40} color="white" />
        <h1 className="text-white text-center text-lg md:text-xl">
          Bienvenido
        </h1>

        <div className="w-full space-y-4">
          <InputFormContext
            placeholder="Escribe tu número de cuenta"
            type="password"
            name="accountNumber"
          />
          <Button
            type="submit"
            onClick={handleSubmit((data) => {
              if (data.accountNumber == 12345) {
                setValue("currentStep", "accountnumber");

                console.log(data);
              }
              console.log(data);
            })}
            customStyles="font-light w-full flex justify-center"
            rounded="full"
            intent="primary"
          >
            Iniciar sesión
          </Button>
        </div>

        {/* Olvidé mi número de cuenta */}
        <div className="w-full flex justify-center cursor-pointer">
          <h1 className="text-[#7E7E7E] text-sm md:text-base">
            Olvidé mi número de cuenta
          </h1>
        </div>

        <hr className="w-full border-[#7E7E7E] my-4" />

        {/* Crear nueva cuenta */}
        <div className="w-full cursor-pointer">
          <CircleTitle
            onClick={() => {
              setValue("currentStep", "accountnumber");
            }}
            customStyles="font-light w-full flex justify-center"
            rounded="full"
            intent="gray"
          >
            Generar numero de cuenta
          </CircleTitle>
        </div>
      </div>
    </>
  );
};

export default Welcome;
