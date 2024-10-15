"use client";
import React from "react";
import { cva } from "class-variance-authority";

const textStyles = cva("px-4 py-2 font-bold flex items-center inline-flex", {
  variants: {
    intent: {
      primary: "bg-transparent border border-[#2AABEE] text-[#2AABEE]",
      secondary: "bg-[#35CDFB] text-[#00516B]",
      solid: "text-white",
      ghost: "bg-transparent border border-black text-black",
      gray: "bg-transparent border border-[#7E7E7E] text-white", // Nueva variante gray
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

type CircleTitleProps = {
  intent?: "primary" | "secondary" | "solid" | "ghost" | "gray"; // Añadir gray aquí
  size?: "small" | "medium" | "large";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  customStyles?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
};

const CircleTitle: React.FC<CircleTitleProps> = ({
  intent = "primary",
  size = "medium",
  rounded = "md",
  customStyles = "",
  children,
  icon,
  iconPosition = "left",
}) => {
  return (
    <span
      className={`${textStyles({ intent, size, rounded })} ${customStyles}`}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </span>
  );
};

export default CircleTitle;
