"use client";

import React, { ReactNode } from "react";

import Welcome from "./Welcome";
import AccountNumber from "./AccountNumber";
import { useFormContext } from "react-hook-form";

const LoginPage = () => {
  type LoginSteps = {
    welcome: ReactNode;
    accountnumber: ReactNode;
  };

  const { getValues } = useFormContext();

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
