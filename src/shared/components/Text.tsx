import { cva } from "class-variance-authority";

const textStyles = cva("font-sans", {
  variants: {
    size: {
      xs: "text-xs", // 0.75rem / 12px
      sm: "text-sm", // 0.875rem / 14px
      base: "text-base", // 1rem / 16px
      lg: "text-lg", // 1.125rem / 18px
      xl: "text-xl", // 1.25rem / 20px
      "2xl": "text-2xl", // 1.5rem / 24px
      "3xl": "text-3xl", // 1.875rem / 30px
      "4xl": "text-4xl", // 2.25rem / 36px
      "5xl": "text-5xl", // 3rem / 48px
      "6xl": "text-6xl", // 3.75rem / 60px
      "7xl": "text-7xl", // 4.5rem / 72px
      "8xl": "text-8xl", // 6rem / 96px
      "9xl": "text-9xl", // 8rem / 128px
    },
    color: {
      black: "text-black",
      red: "text-red-500",
      blue: "text-blue-500",
      green: "text-green-500",
      // Se eliminará el color aquí para permitir el uso de hexadecimales
    },
  },
  defaultVariants: {
    size: "base",
    color: "black",
  },
});

interface TextProps {
  size?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
  color?: string; // Cambiado para aceptar cualquier string, incluidos hexadecimales
  customClass?: string;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ size, color, customClass, children }) => {
  // Lógica para aplicar color en hexadecimal
  const colorStyle =
    color && /^#[0-9A-F]{6}$/i.test(color) ? { color } : undefined;

  return (
    <h1 className={`${textStyles({ size })} ${customClass}`} style={colorStyle}>
      {children}
    </h1>
  );
};

export default Text;
