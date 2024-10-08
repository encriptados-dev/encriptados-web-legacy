import React, { ReactNode } from "react";

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) => {
  return (
    <div className="border rounded-2xl p-5 h-[300px] bg-white ">
      <div className="bg-gradient-to-b px-3 from-[rgba(8,186,240,1)] to-[rgba(28,210,165,1)] inline-block p-2 rounded-lg">
        {icon}
      </div>
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="text-gray-600 text-sm  mt-1">{description}</p>
    </div>
  );
};

export default FeatureCard;
