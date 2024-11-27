"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import PassKeyLoginIconSvg from "@/shared/svgs/PassKeyLoginIconSvg";
import { useAuthLogin } from "@/features/auth/mutations/useAuthLogin";
import { useToast } from "@/shared/context/ToastContext";
import Loader from "@/shared/components/Loader";

export default function MobileWelcome() {
  const t = useTranslations("LoginPage");
  const router = useRouter();
  const { handleSubmit, setValue, register } = useFormContext();
  const { success, error: errorToast } = useToast();

  const { login, isPending } = useAuthLogin({
    onError: () => {
      errorToast(t("welcomeSection.errorLogin"));
    },
    onSuccess: async (data) => {
      try {
        success(t("welcomeSection.succesfullyLogin"));
        Cookies.set("authToken", data?.data?.token, {
          expires: 7,
          path: "/",
          secure: true,
          sameSite: "None",
        });
        router.push("/dashboard/data-usage");
      } catch (error) {
        errorToast(t("welcomeSection.errorWhileLogin"));
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#0E0E0E] p-10">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <PassKeyLoginIconSvg height={40} width={40} color="white" />
          <h1 className="text-white font-light text-xl text-center mt-4">
            {t("welcomeSection.welcome")}
          </h1>
        </div>

        <div className="mb-6">
          <input
            {...register("accountNumber")}
            type="password"
            placeholder={t("welcomeSection.writeYourAccountPlaceholder")}
            className="w-full px-4 py-3 text-white bg-[#191919] rounded-full focus:outline-none focus:ring-1 focus:ring-[#00B6E6] placeholder-[#6A6A6A]"
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit((data) => {
            login({ token: data.accountNumber });
          })}
          className="w-full px-4 py-3 mb-4 text-white bg-[#0AAEE1] rounded-xl hover:bg-[#00a3cc] transition-colors"
        >
          {t("welcomeSection.login")}
        </button>

        <button className="w-full text-[#7E7E7E] text-center mb-6 mt-10 hover:text-gray-400">
          {t("welcomeSection.forgotPassword")}
        </button>

        <div className="w-full h-px bg-[#373737] mb-6" />

        <button
          onClick={() => setValue("currentStep", "accountnumber")}
          className="w-full px-4 py-3 text-white bg-transparent border border-[#FFFFFF] rounded-xl hover:bg-[#1A1A1A] transition-colors"
        >
          {t("welcomeSection.generateAccountNumber")}
        </button>
      </div>

      {isPending && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <Loader />
        </div>
      )}
    </div>
  );
}
