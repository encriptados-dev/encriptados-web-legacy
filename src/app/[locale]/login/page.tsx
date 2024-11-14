"use client";
import React from "react";

import { BasicFormProvider } from "@/shared/components/BasicFormProvider";
import LoginPage from "./components/LoginPage";

const Page = () => {
  return (
    <>
      <BasicFormProvider
        values={{
          currentStep: "welcome",
          currentGeneratedNumber: "",
          generatedCurrentNumberSeparated: "",
        }}
      >
        <LoginPage />
      </BasicFormProvider>
    </>
  );
};

export default Page;
