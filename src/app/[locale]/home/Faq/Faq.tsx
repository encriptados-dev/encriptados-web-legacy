"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ArrowDown from "../svg/ArrowDown";
import { useTranslations } from "next-intl";

const faqs = [
  {
    question: "¿Cómo encuentro un distribuidor?",
    answer:
      "Puedes usar nuestro mapa interactivo para localizar el distribuidor más cercano.",
  },
  {
    question: "¿Cuánto tarda la entrega?",
    answer:
      "El tiempo de entrega depende de tu ubicación y del distribuidor seleccionado.",
  },
  {
    question: "¿Puedo cambiar mi pedido después de confirmarlo?",
    answer:
      "Depende del distribuidor. Te recomendamos contactarlo directamente.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations("faqData")

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqIds = [1, 2, 3] as const;
  const faqs = faqIds.map((id) => ({
    question: t(`faqs.${id}.question` as const),
    answer: t(`faqs.${id}.answer` as const),
  }));

  return (
    <section className="py-8 bg-white text-center">
      <h2 className="text-2xl lg:text-[34px] font-bold mb-6">
        {t("title")}
      </h2>
      <div className="max-w-6xl mx-auto px-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#F9F9F9] rounded-lg border border-[#F1F1F1] mb-4 p-4 text-left"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full font-semibold text-base lg:text-lg text-left"
            >
              {faq.question}
              {openIndex === index ? <ArrowDown /> : <ArrowDown />}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
