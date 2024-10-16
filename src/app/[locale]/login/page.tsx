"use client";
import React from "react";
import Login from "./components/LoginPage";
import { BasicFormProvider } from "@/shared/components/BasicFormProvider";
import LoginPage from "./components/LoginPage";

const Page = () => {
  return (
    <>
      <BasicFormProvider values={{ currentStep: "welcome" }}>
        <LoginPage />
      </BasicFormProvider>
    </>
  );
};

export default Page;
