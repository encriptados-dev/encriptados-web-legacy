import { IconSvgProps } from "@/shared/types/IconSvgProps";
import React from "react";

interface PhySimSvgProps extends IconSvgProps {
  color?: string;
}

const SimIconSvg: React.FC<PhySimSvgProps> = ({
  width = 21,
  height = 21,
  color = "#1C1B1F",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 17H5V15H3V17ZM3 13H5V9H3V13ZM7 17H9V13H7V17ZM7 11H9V9H7V11ZM11 17H13V15H11V17ZM11 13H13V9H11V13ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V6L6 0H14C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2V18C16 18.55 15.8042 19.0208 15.4125 19.4125C15.0208 19.8042 14.55 20 14 20H2ZM2 18H14V2H6.85L2 6.85V18Z"
        fill={color}
      />
    </svg>
  );
};

export default SimIconSvg;
