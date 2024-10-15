"use client";

import Button from "@/shared/components/Button";
import CircleTitle from "@/shared/components/CircleTitle";
import { InputFormContext } from "@/shared/components/InputFormContext";
import KeyLoginIconSvg from "@/shared/svgs/KeyLoginIconSvg";
import React from "react";
import InfoWithImages from "./InfoWithImages";

const Login = () => {
  return (
    <div className="bg-cyan-black-gradient flex flex-col md:flex-row items-center justify-center w-screen h-screen">
      <InfoWithImages />

      <div className="w-[500px] bg-[#0E0E0E] h-[500px] rounded-2xl flex flex-col justify-center items-center gap-y-4 px-10">
        <KeyLoginIconSvg height={40} width={40} color="white" />
        <h1 className="text-white text-center">Bienvenido</h1>
        <div className="w-full space-y-4">
          <InputFormContext
            placeholder="Escribe tu número de cuenta"
            type="password"
            name="harold"
          />
          <Button
            customStyles="font-light w-full flex justify-center"
            rounded="full"
            intent="primary"
          >
            Iniciar sesión
          </Button>
        </div>
        <div className="w-full flex justify-center">
          <h1 className="text-[#7E7E7E]">Olvidé mi número de cuenta</h1>
        </div>
        <hr className="w-full border-[#7E7E7E] my-4" />
        <div className="w-full">
          <CircleTitle
            customStyles="font-light w-full items-center justify-center"
            rounded="full"
            intent="gray"
          >
            Crear una nueva cuenta
          </CircleTitle>
        </div>
      </div>
    </div>
  );
};

export default Login;
