"use client";
import React from "react";

import { BasicFormProvider } from "@/shared/components/BasicFormProvider";
import LoginPage from "./components/LoginPage";
import { schemaLogin } from "./schema/schemaLogin";

const Page = () => {
  return (
    <>
      <BasicFormProvider
        schema={schemaLogin}
        values={{
          currentStep: "welcome",
          currentNumber: "",
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
