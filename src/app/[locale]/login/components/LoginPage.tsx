"use client";

import React, { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

import Welcome from "./Welcome";
import AccountNumber from "./AccountNumber";
import MobileWelcome from "./mobile/MobileWelcome";
import MobileAccountNumber from "./mobile/MobileAccountNumber";

const LoginPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { watch } = useFormContext();
  const currentStep = watch("currentStep") as "welcome" | "accountnumber";

  const getComponent = () => {
    if (isMobile) {
      return currentStep === "welcome" ? <MobileWelcome /> : <MobileAccountNumber />;
    }
    return currentStep === "welcome" ? <Welcome /> : <AccountNumber />;
  };

  return (
    <div className="bg-cyan-black-gradient flex flex-col md:flex-row items-center justify-center w-screen h-full md:h-screen">
      {getComponent()}
    </div>
  );
};

export default LoginPage;
