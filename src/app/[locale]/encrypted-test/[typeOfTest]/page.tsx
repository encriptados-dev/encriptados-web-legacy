"use client";
import React from "react";
import TestBasic from "./components/TestBasic";
import { useParams } from "next/navigation";

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

  const questionsPhone: Question[] = [
    {
      question: "¿Qué es un celular?",
      options: [
        { answer: "Un dispositivo móvil", isCorrect: true },
        { answer: "Una computadora de escritorio", isCorrect: false },
        { answer: "Una televisión", isCorrect: false },
        { answer: "Una cámara", isCorrect: false },
      ],
    },
    {
      question: "¿Qué es un teléfono encriptado?",
      options: [
        {
          answer:
            "Un teléfono que usa un sistema de codificación para proteger datos",
          isCorrect: true,
        },
        { answer: "Un teléfono antiguo", isCorrect: false },
        { answer: "Un teléfono con cámara avanzada", isCorrect: false },
        { answer: "Un teléfono con alta gama de sonidos", isCorrect: false },
      ],
    },
  ];

  const questionsSoftware: Question[] = [
    {
      question: "¿Qué es el software?",
      options: [
        {
          answer:
            "Un conjunto de instrucciones que le dicen a una computadora cómo funcionar",
          isCorrect: true,
        },
        { answer: "Un hardware que guarda información", isCorrect: false },
        { answer: "Una red de computadoras", isCorrect: false },
        { answer: "Un componente físico", isCorrect: false },
      ],
    },
    {
      question: "¿Qué es la encriptación de software?",
      options: [
        {
          answer:
            "El proceso de codificar información para que solo pueda ser leída por quien tenga la clave",
          isCorrect: true,
        },
        {
          answer: "El proceso de eliminar datos de la computadora",
          isCorrect: false,
        },
        {
          answer: "El proceso de aumentar el rendimiento de un software",
          isCorrect: false,
        },
        {
          answer: "El proceso de desarrollar un nuevo sistema operativo",
          isCorrect: false,
        },
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
  } else if (testType === "software") {
    selectedQuestions = questionsSoftware;
  } else if (testType === "password") {
    selectedQuestions = questionsPassword;
  }

  return <TestBasic test={selectedQuestions} />;
};

export default page;
