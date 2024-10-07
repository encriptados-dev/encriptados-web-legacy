import React, { ReactElement } from "react";
import FeatureCard from "./FeatureCard";

interface Feature {
  title: string;
  description: string;
  icon: ReactElement;
}

interface ListOfFeatureCardsProps {
  features: Feature[];
}

const ListOfFeatureCards: React.FC<ListOfFeatureCardsProps> = ({
  features,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </div>
  );
};

export default ListOfFeatureCards;
