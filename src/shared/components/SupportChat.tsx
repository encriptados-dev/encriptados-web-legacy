"use client";

import React, { useState } from "react";
import Button from "./Button";
import ChatSupport from "../svgs/ChatSupport";
import Accordion from "./Accordion";

export default function SupportChat() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const SupportGirl = "/images/dashboard/supportgirl.png";

  return (
    <div className="relative">
      <Button
        iconPosition="left"
        icon={
          <div className="hidden lg:block">
            <ChatSupport />
          </div>
        }
        intent="cyan"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Chat soporte
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={toggleDropdown}
          aria-hidden="true"
        />
      )}

      <div
        className={`absolute right-0 mt-2 w-96 bg-white rounded-md shadow-lg overflow-hidden z-50 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="p-4">
          <div className="flex items-center space-x-4">
            <img
              src={SupportGirl}
              alt="Soporte"
              className="w-9 h-9 rounded-full object-cover"
            />
            <h3 className="text-base text-gray-900 mb-2 font-bold">
              Habla con nuestro equipo de soporte y ventas
            </h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Inicia una conversación, selecciona el motivo
          </p>

          <Accordion
            showIcon={false}
            items={[
              {
                title: "Seleccionar un motivo",
                content: (
                  <div className="flex flex-col gap-y-2">
                    <h1 className="bg-white border-gray-400 p-2 rounded-lg cursor-pointer">
                      Problemas con la activación de mi SIM
                    </h1>
                    <h1 className="bg-white border-gray-400 p-2 rounded-lg cursor-pointer">
                      Realicé una compra, no llegó mi código
                    </h1>
                    <h1 className="bg-white border-gray-400 p-2 rounded-lg cursor-pointer">
                      Necesito hablar con soporte
                    </h1>
                  </div>
                ),
              },
            ]}
          />

          <div className="mt-4">
            <Button intent="primary" onClick={() => alert("Iniciando chat...")}>
              Iniciar Chat
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
