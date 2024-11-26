"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Key, Copy, Download, ArrowLeft } from "lucide-react";

const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className={`py-3 px-4 rounded-md font-medium transition-colors ${props.className}`}
  >
    {children}
  </button>
);

const Input = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className={`py-3 px-4 w-full rounded-md bg-[#1A1A1A] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${props.className}`}
  />
);

type LoginStep = "login" | "generate" | "display";

export function LoginModal({ onClose = () => {} }: { onClose?: () => void }) {
  const [step, setStep] = useState<LoginStep>("login");
  const [accountNumber, setAccountNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [generatedAccount, setGeneratedAccount] = useState("");

  const handleGenerateAccount = () => {
    const newAccount = "4291 - 4118 - 3061 - 5557";
    setGeneratedAccount(newAccount);
    setStep("display");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedAccount);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedAccount], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "account-number.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const goBack = () => {
    if (step === "generate") {
      setStep("login");
    } else if (step === "display") {
      setStep("generate");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <AnimatePresence mode="wait">
          {(step === "generate" || step === "display") && (
            <button
              onClick={goBack}
              className="absolute top-4 left-4 p-2 text-gray-400 hover:text-white"
              aria-label="Volver"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          )}

          {step === "login" && (
            <motion.div
              key="login"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-[#0A0A0A] rounded-lg p-6 space-y-6"
            >
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Key className="w-6 h-6 text-white" />
                </div>
              </div>
              <h2 className="text-xl font-semibold text-white text-center">Bienvenido</h2>
              <div className="space-y-4">
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Escribe tu número de cuenta"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <Button className="w-full bg-[#00B2FF] text-white hover:bg-[#009FDB]">
                  Iniciar sesión
                </Button>
                <button className="w-full text-gray-400 text-sm hover:text-white">
                  Olvidé mi número de cuenta
                </button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-[#0A0A0A] px-2 text-gray-400">O</span>
                  </div>
                </div>
                <Button
                  className="w-full border border-gray-700 text-white hover:bg-white/10"
                  onClick={() => setStep("generate")}
                >
                  Crear nueva cuenta
                </Button>
              </div>
            </motion.div>
          )}

          {step === "generate" && (
            <motion.div
              key="generate"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-[#0A0A0A] rounded-lg p-6 space-y-6"
            >
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Key className="w-6 h-6 text-white" />
                </div>
              </div>
              <h2 className="text-xl text-white text-center">Obtén un número de cuenta</h2>
              <Button
                className="w-full bg-[#00B2FF] text-white hover:bg-[#009FDB]"
                onClick={handleGenerateAccount}
              >
                Generar nuevo número de cuenta
              </Button>
            </motion.div>
          )}

          {step === "display" && (
            <motion.div
              key="display"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-[#0A0A0A] rounded-lg p-6 space-y-6"
            >
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Key className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl text-white text-center">Este es tu nuevo número de cuenta:</h2>
                <div className="bg-[#1A1A1A] p-4 rounded-lg text-white text-center font-mono">
                  {generatedAccount}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    className="border border-gray-700 text-white hover:bg-white/10"
                    onClick={handleCopy}
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copiar
                  </Button>
                  <Button
                    className="border border-gray-700 text-white hover:bg-white/10"
                    onClick={handleDownload}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Descargar
                  </Button>
                </div>
                <Button
                  className="w-full bg-[#00B2FF] text-white hover:bg-[#009FDB]"
                  onClick={() => setStep("login")}
                >
                  Ingresar con cuenta generada
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
