"use client";
import React from "react";
import { cva } from "class-variance-authority";

const buttonStyles = cva("px-4 py-2 font-bold flex items-center", {
  variants: {
    intent: {
      primary: "bg-[#2AABEE] text-white",
      secondary: "bg-[#35CDFB] text-[#00516B]",
      solid: "text-white",
      ghost: "bg-transparent border border-black text-black", // Estilo ghost
      black: "bg-black text-white text-sm py-3 w-full flex items-center justify-center ", // Agregado 'black' a las variantes
    },
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
    rounded: "md", // Valor por defecto para rounded
  },
});

type ButtonProps = {
  intent?: "primary" | "secondary" | "solid" | "ghost"; // Agregado 'ghost' a las variantes
  size?: "small" | "medium" | "large";
  rounded?: "none" | "sm" | "md" | "lg" | "full"; // Propiedad para los bordes redondeados
  customStyles?: string; // Clases personalizadas
  children: React.ReactNode;
  icon?: React.ReactNode; // Para el ícono
  iconPosition?: "left" | "right"; // Posición del ícono
};

const Button: React.FC<ButtonProps> = ({
  intent = "solid",
  size = "medium",
  rounded = "md",
  customStyles = "",
  children,
  icon,
  iconPosition = "left",
}) => {
  return (
    <button
      className={`${buttonStyles({ intent, size, rounded })} ${customStyles}`}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
