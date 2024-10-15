"use client";

import Button from "@/shared/components/Button";
import CircleTitle from "@/shared/components/CircleTitle";
import { InputFormContext } from "@/shared/components/InputFormContext";
import Image from "next/image";

import KeyLoginIconSvg from "@/shared/svgs/KeyLoginIconSvg";
import React from "react";
import StarSvg from "../svg/StarSvg";
import SquareOneSvg from "../svg/SquareOneSvg";
import SquareTwoSvg from "../svg/SquareTwoSvg";
import XSvg from "../svg/XSvg";

const Login = () => {
  const ManOne = "/images/login/manone.png";
  const ManTwo = "/images/login/mantwo.png";

  return (
    <div className="bg-cyan-black-gradient   w-screen flex h-screen items-center gap-x-9 justify-center">
      <div className="w-[500px]">
        <h1 className="text-white text-5xl font-bold mb-0">
          Genera una cuenta aleatoria{" "}
          <span className="text-[#35CDFB]">con un código único de acceso</span>{" "}
        </h1>

        <h1 className="text-white mt-4 text-2xl font-light">
          Gestiona toda sin involucrar tus datos personales.
        </h1>

        <div className="flex gap-x-4 mt-7 relative">
          {/* Contenedor para la primera imagen y su icono */}
          <div className="relative flex flex-col ">
            <div className="min-w-[200px] h-[200px] relative rounded-3xl overflow-hidden z-10 ">
              <Image
                quality={100}
                title="Image"
                src={ManOne}
                alt="Image"
                loading="eager"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="z-0 -translate-y-5 -translate-x-5">
              <XSvg />
            </div>
          </div>

          {/* Contenedor para la segunda imagen y sus iconos */}

          <div className="absolute translate-x-44 -translate-y-11">
            <StarSvg />
          </div>

          <div className="min-w-[200px] h-[200px] relative rounded-3xl overflow-hidden mt-20 z-1">
            <Image
              quality={100}
              title="Image"
              src={ManTwo}
              alt="Image"
              loading="eager"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="-translate-x-9">
            <SquareOneSvg />
          </div>
        </div>

        <div className="translate-x-32 -translate-y-14">
          <SquareTwoSvg />
        </div>
      </div>

      <div className="w-[500px] bg-[#0E0E0E] h-[500px] rounded-2xl flex justify-center items-center flex-col gap-y-4 px-10">
        <KeyLoginIconSvg height={40} width={40} color="white" />
        <h1 className="text-white">Bienvenido</h1>
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
