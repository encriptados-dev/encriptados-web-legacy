import React from "react";
import Login from "./components/Login";
import { BasicFormProvider } from "@/shared/components/BasicFormProvider";

const Page = () => {
  return (
    <>
      <BasicFormProvider>
        <Login />
      </BasicFormProvider>
    </>
  );
};

export default Page;
