import React, { ReactElement } from "react";
import Card from "./Card";

interface CardType {
  title: string;
  description: string;
  icon: ReactElement;
}

interface ListOfFeatureCardsProps {
  items: CardType[];
  centered?: boolean;
  bgIconCard?: string;
  columns?: number; // Nueva prop para el número de columnas
}

const ListOfCards: React.FC<ListOfFeatureCardsProps> = ({
  items,
  centered,
  bgIconCard,
  columns = 4, // Valor por defecto de 4 columnas
}) => {
  const gridClasses = `grid grid-cols-1 sm:grid-cols-${Math.min(
    columns,
    2
  )} md:grid-cols-${Math.min(columns, 3)} lg:grid-cols-${columns} gap-4`;

  return (
    <div className={gridClasses}>
      {items.map((item, index) => (
        <Card
          bgIconCard={bgIconCard}
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
          centered={centered}
        />
      ))}
    </div>
  );
};

export default ListOfCards;
