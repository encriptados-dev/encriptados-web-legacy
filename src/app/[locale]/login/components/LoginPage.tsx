"use client";

import Button from "@/shared/components/Button";
import CircleTitle from "@/shared/components/CircleTitle";
import { InputFormContext } from "@/shared/components/InputFormContext";
import KeyLoginIconSvg from "@/shared/svgs/KeyLoginIconSvg";
import React, { ReactNode, useState } from "react";
import Image from "next/image";
import Welcome from "./Welcome";
import AccountNumber from "./AccountNumber";
import { useFormContext } from "react-hook-form";

const LoginPage = () => {
  type LoginSteps = {
    welcome: ReactNode;
    accountnumber: ReactNode;
  };

  const { getValues, setValue } = useFormContext();

  const allSteps: LoginSteps = {
    welcome: <Welcome />,
    accountnumber: <AccountNumber />,
  };

  return (
    <div className="bg-cyan-black-gradient flex flex-col md:flex-row items-center justify-center w-screen h-full md:h-screen p-4">
      {allSteps[getValues("currentStep") as keyof LoginSteps]}
    </div>
  );
};

export default LoginPage;
