"use client";

import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import OnlyKeyLoginIconSvg from "@/shared/svgs/OnlyKeyLoginIconSvg";
import { useRegisterToken } from "@/features/auth/mutations/useRegisterToken";
import { useAuthLogin } from "@/features/auth/mutations/useAuthLogin";
import { useToast } from "@/shared/context/ToastContext";
import Loader from "@/shared/components/Loader";

export default function MobileAccountNumber() {
  const t = useTranslations("LoginPage");
  const router = useRouter();
  const { setValue, getValues } = useFormContext();
  const { success, error: errorToast } = useToast();

  const [generatedNumber, setGeneratedNumber] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const { registerToken, isPending } = useRegisterToken({
    onSuccess: (data) => {
      animateToken(data.data.token_separated);
      setValue("currentGeneratedNumber", data.data.token);
      success(t("generatedSection.accountNumber.succesfulyGenerateAccount"));
    },
    onError: () => {
      errorToast(t("generatedSection.accountNumber.errorMessageNumberAccount"));
    },
  });

  const { login, isPending: isPendingLoading } = useAuthLogin({
    onSuccess: async (data) => {
      try {
        success(t("generatedSection.accountNumber.loginSuccesfuly"));
        Cookies.set("authToken", data.data.token, {
          expires: 7,
          path: "/",
          secure: true,
          sameSite: "None",
        });
        router.push("/dashboard/data-usage");
      } catch (error) {
        errorToast(t("generatedSection.accountNumber.errorMessage"));
      }
    },
  });

  const animateToken = (token: string) => {
    setIsGenerating(true);
    setGeneratedNumber("");
    const finalNumber = Array.from(token);
    finalNumber.forEach((digit, index) => {
      setTimeout(() => {
        setGeneratedNumber((prev) => prev + digit);
        if (index === finalNumber.length - 1) {
          setIsGenerating(false);
          setValue("generatedCurrentNumberSeparated", finalNumber.join(""));
        }
      }, index * 100);
    });
  };

  const handleRegisterToken = () => {
    if (!generatedNumber) {
      registerToken();
    } else {
      login({ token: getValues("currentGeneratedNumber") });
    }
  };

  const copyToClipboard = () => {
    const accountNumber = getValues("currentGeneratedNumber");
    if (accountNumber) {
      navigator.clipboard.writeText(accountNumber).then(() => {
        success(t("generatedSection.accountNumber.copyNumberSuccesfully"));
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-[#0E0E0E] p-6">
      <div className="w-full md:w-[500px] bg-[#0E0E0E] rounded-2xl flex flex-col py-14 px-10 items-center gap-y-4 relative">
        <OnlyKeyLoginIconSvg height={55} width={55} color="white" />
        <h1 className="text-white text-center text-lg md:text-xl mb-4">
          {t("generatedSection.accountNumber.generateAccountNumber")}
        </h1>

        <div className="w-full space-y-1 text-center">
          <div className="text-[#838383] text-2xl font-mono mb-4 select-none">
            {generatedNumber || "—— —— —— —— —— —— —— "}
          </div>
          <button
            onClick={handleRegisterToken}
            className={`w-full px-2 py-3 text-white rounded-full transition-colors ${
              isPending || isGenerating
                ? "bg-[#2A2A2A] cursor-not-allowed"
                : "bg-[#00B6E6] hover:bg-[#00a3cc]"
            }`}
            disabled={isPending || isGenerating}
          >
            {isGenerating
              ? t("generatedSection.accountNumber.generating")
              : generatedNumber
              ? t("generatedSection.accountNumber.login")
              : t("generatedSection.accountNumber.generateAccountNumber")}
          </button>
        </div>

        {generatedNumber && (
          <div className="w-full mt-4 space-y-4">
            <button
              onClick={copyToClipboard}
              className="w-full px-4 py-3 text-white bg-transparent border border-[#3A3A3A] rounded-lg hover:bg-[#1A1A1A] transition-colors"
            >
              {t("generatedSection.accountNumber.copy")}
            </button>
            <button
              onClick={() => {}}
              className="w-full px-4 py-3 text-white bg-[#00B6E6] rounded-lg hover:bg-[#00a3cc] transition-colors"
            >
              {t("generatedSection.accountNumber.download")}
            </button>
          </div>
        )}

        <button
          onClick={() => setValue("currentStep", "welcome")}
          className="text-white text-center mt-4 hover:text-gray-300"
        >
          {t("generatedSection.accountNumber.goBack")}
        </button>
      </div>

      {(isPendingLoading || isPending) && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <Loader />
        </div>
      )}
    </div>
  );
}

