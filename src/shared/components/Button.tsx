"use client";
import React from "react";
import { cva } from "class-variance-authority";

const buttonStyles = cva("px-4 py-2 font-bold flex items-center", {
  variants: {
    intent: {
      primary: "bg-[#2AABEE] text-white",
      secondary: "bg-[#35CDFB] text-[#00516B]",
      solid: "text-white",
      ghost: "bg-transparent border border-black text-black",
      black:
        "bg-black text-white text-sm py-3 w-full flex items-center justify-center ",
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
    rounded: "md",
  },
});

type ButtonProps = {
  intent?: "primary" | "secondary" | "solid" | "ghost" | "black";
  size?: "small" | "medium" | "large";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  customStyles?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; // Agregar el tipo de botón
};

const Button: React.FC<ButtonProps> = ({
  intent = "solid",
  size = "medium",
  rounded = "md",
  customStyles = "",
  children,
  icon,
  iconPosition = "left",
  onClick,
  type = "button", // Valor por defecto
}) => {
  return (
    <button
      type={type} // Usar el tipo dinámico pasado como prop
      className={`${buttonStyles({ intent, size, rounded })} ${customStyles}`}
      onClick={onClick}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
