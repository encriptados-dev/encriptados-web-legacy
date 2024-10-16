import React from "react";
import Image from "next/image";
import { InputFormContext } from "@/shared/components/InputFormContext";
import Button from "@/shared/components/Button";

import { useFormContext } from "react-hook-form";
import OnlyKeyLoginIconSvg from "@/shared/svgs/OnlyKeyLoginIconSvg";
import CircleTitle from "@/shared/components/CircleTitle";
import CopyPaste from "@/shared/svgs/CopyPast";
import Download from "@/shared/svgs/Download";

const AccountNumber = () => {
  const Mans = "/images/login/mans.png";

  const { handleSubmit, setValue, getValues } = useFormContext();

  const copyToClipboard = () => {
    const accountNumber = getValues("generatedcurrentnumber");
    if (accountNumber) {
      navigator.clipboard.writeText(accountNumber);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center w-full md:w-5/12 lg:w-4/12 mb-6 md:mb-0 md:mr-6">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
          Obtenga un{" "}
          <span className="text-[#35CDFB]">número de cuenta nuevo</span>
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

      <div className="w-full md:w-[500px] bg-[#0E0E0E] h-auto md:h-[500px] rounded-2xl flex flex-col py-14 px-10 items-center gap-y-4  md:px-10">
        <OnlyKeyLoginIconSvg height={55} width={55} color="white" />
        <h1 className="text-white text-center text-lg md:text-xl">
          Obtén un número de cuenta
        </h1>

        {/* Input y Botón */}
        <div className="w-full space-y-4">
          <InputFormContext
            placeholder="Escribe tu número de cuenta"
            name="generatedcurrentnumber"
          />
          <Button
            type="submit"
            onClick={handleSubmit((data) => {
              if (data.accountNumber == 12345) {
                setValue("generatedcurrentnumber", "4291 - 4118 - 3061 - 5557");
              }
              console.log(data);
            })}
            customStyles="font-light w-full flex justify-center "
            rounded="full"
            intent="primary"
          >
            Generar nuevo numero de cuenta
          </Button>
        </div>

        {getValues("generatedcurrentnumber") ? (
          <div className="w-full">
            <hr className="w-full border-[#7E7E7E] my-4" />

            <div className="flex w-full gap-x-3 ">
              <CircleTitle
                icon={<CopyPaste />}
                iconPosition="right"
                intent="white"
                customStyles="w-6/12 justify-center cursor-pointer"
                onClick={copyToClipboard}
              >
                Copiar
              </CircleTitle>
              <CircleTitle
                icon={<Download color="#2AABEE" />}
                iconPosition="right"
                intent="primary"
                customStyles="w-6/12 justify-center cursor-pointer font-light"
              >
                Descargar
              </CircleTitle>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default AccountNumber;
