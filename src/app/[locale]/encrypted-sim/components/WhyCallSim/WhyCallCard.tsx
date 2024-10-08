import React from "react";

interface WhyCallCardProps {
  title: string;
  icon: JSX.Element;
  bgColor: string;
  textColor: string;
}

const WhyCallCard: React.FC<WhyCallCardProps> = ({
  title,
  icon,
  bgColor,
  textColor,
}) => {
  return (
    <div className={`${bgColor} p-8 rounded-lg shadow-md`}>
      <div>{icon}</div>
      <div className="flex items-center space-x-4">
        <div className={`text-lg font-semibold mt-4 ${textColor}`}>{title}</div>
      </div>
    </div>
  );
};

export default WhyCallCard;
