"use client";
import React from "react";
import TestBasic from "./components/TestBasic";
import { useParams } from "next/navigation";
import PasswordTest from "./components/PasswordTest";

interface Option {
  answer: string;
  isCorrect: boolean;
}

interface Question {
  question: string;
  options: Option[];
}

const page = () => {
  const { typeOfTest } = useParams();
  const testType = Array.isArray(typeOfTest) ? typeOfTest[0] : typeOfTest;

  const questionsPhone = [
    {
      question: "¿Qué tipo de contraseña o desbloqueo usas?",
      options: [
        { answer: "Alfanumérica de 6 carácteres o más.", isCorrect: true },
        { answer: "Pin o patrón de 6 caracteres", isCorrect: false },
        { answer: "Pin o patrón de 8 o más caracteres", isCorrect: false },
      ],
    },
    {
      question:
        "¿Tienes actualizado tu smartphone con el sistema operativo más reciente?",
      options: [
        { answer: "Si", isCorrect: true },
        { answer: "No", isCorrect: false },
      ],
    },
    {
      question: "¿Tienes instalado un antivirus?",
      options: [
        { answer: "Si", isCorrect: true },
        { answer: "No", isCorrect: false },
      ],
    },
    {
      question: "¿Usas VPN para conectarte a Internet?",
      options: [
        { answer: "Si", isCorrect: true },
        { answer: "No", isCorrect: false },
      ],
    },
    {
      question: "¿Realizas copias de seguridad periódicamente?",
      options: [
        { answer: "Si", isCorrect: true },
        { answer: "No", isCorrect: false },
      ],
    },
    {
      question:
        "¿Tienes claves de acceso para las aplicaciones sensibles (Banco, Wallets)?",
      options: [
        { answer: "Si", isCorrect: true },
        { answer: "No", isCorrect: false },
      ],
    },
    {
      question: "¿Eliminas las aplicaciones que ya no usas?",
      options: [
        { answer: "Si", isCorrect: true },
        { answer: "No", isCorrect: false },
      ],
    },
    {
      question:
        "¿Revisas los permisos de privacidad que otorgas a las aplicaciones?",
      options: [
        { answer: "Si", isCorrect: true },
        { answer: "No", isCorrect: false },
      ],
    },
    {
      question: "¿Te conectas a redes de WiFi público constantemente?",
      options: [
        { answer: "Si", isCorrect: false },
        { answer: "No", isCorrect: true },
      ],
    },
    {
      question: "¿Utilizas un operador móvil convencional o uno alternativo?",
      options: [
        { answer: "Convencional", isCorrect: false },
        { answer: "Otro", isCorrect: true },
      ],
    },
    {
      question: "¿Separas las comunicaciones personales de las laborales?",
      options: [
        { answer: "Si", isCorrect: true },
        { answer: "No", isCorrect: false },
      ],
    },
    {
      question:
        "¿Usas aplicaciones de mensajería convencionales para compartir información sensible?",
      options: [
        { answer: "Si", isCorrect: false },
        { answer: "No", isCorrect: true },
      ],
    },
    {
      question: "¿Tu teléfono y plan de datos está registrado a tu nombre?",
      options: [
        { answer: "Si", isCorrect: true },
        { answer: "No", isCorrect: false },
      ],
    },
  ];

  const questionsPassword: Question[] = [
    {
      question: "¿Qué característica debe tener una contraseña segura?",
      options: [
        { answer: "Debe tener al menos 8 caracteres", isCorrect: true },
        { answer: "Debe ser fácil de recordar", isCorrect: false },
        { answer: "Debe contener solo números", isCorrect: false },
        { answer: "Debe contener la fecha de nacimiento", isCorrect: false },
      ],
    },
    {
      question: "¿Qué es la autenticación en dos pasos?",
      options: [
        {
          answer:
            "Es un método de seguridad que requiere dos formas de verificación",
          isCorrect: true,
        },
        { answer: "Es una contraseña más larga", isCorrect: false },
        { answer: "Es la verificación de la huella digital", isCorrect: false },
        {
          answer: "Es una clave de un solo uso por correo electrónico",
          isCorrect: false,
        },
      ],
    },
  ];

  let selectedQuestions: Question[] = [];
  if (testType === "phone") {
    selectedQuestions = questionsPhone;
  } else if (testType === "password") {
    selectedQuestions = questionsPassword;
  }

  // Condicional para renderizar el componente adecuado según el tipo de prueba
  if (testType === "password") {
    return <PasswordTest />;
  }

  return <TestBasic test={selectedQuestions} />;
};

export default page;
