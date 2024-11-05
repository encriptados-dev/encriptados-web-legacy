"use client";

import Image from "next/image";
import Link from "next/link"; // Import Link for navigation
import { FC } from "react";

interface CardSimEsimProps {
  title: string;
  description?: string;
  imageSrc: string;
  altText: string;
  background?: string;
  titleColor?: string;
  descriptionColor?: string;
  showMoreInfo?: boolean;
  buyText?: string;
  moreInfoText?: string;
  buyUrl?: string;
  moreInfoUrl?: string;
  onBuyClick?: () => void;
  onMoreInfoClick?: () => void;
}

const CardSimEsim: FC<CardSimEsimProps> = ({
  title,
  description,
  imageSrc,
  altText,
  background = "bg-gradient-to-br from-teal-950 to-black",
  titleColor = "text-white",
  descriptionColor = "text-gray-300",
  showMoreInfo = true,
  buyText = "Comprar",
  moreInfoText = "Más información",
  buyUrl = "#",
  moreInfoUrl = "#",
  onBuyClick,
  onMoreInfoClick,
}) => {
  return (
    <div className={`${background} max-w-[500px] rounded-3xl`}>
      <div className="p-8 flex flex-row gap-4">
        <div className="w-[55%]">
          <h2 className={`text-xl mb-2 font-semibold ${titleColor}`}>{title}</h2>
          {description && (
            <p className={`text-xs mb-6 ${descriptionColor}`}>{description}</p>
          )}
          <div className="flex flex-col gap-4 justify-start">
            <Link href={buyUrl} passHref>
              <button
                onClick={onBuyClick}
                className="bg-[#E3F8FF] hover:bg-[#c7edfa] text-[#001D26] rounded-full px-4 py-2 transition w-1/2"
              >
                {buyText}
              </button>
            </Link>
            {showMoreInfo && (
              <Link href={moreInfoUrl} passHref>
                <button
                  onClick={onMoreInfoClick}
                  className="text-gray-300 text-sm hover:text-white transition w-1/2"
                >
                  {moreInfoText}
                </button>
              </Link>
            )}
          </div>
        </div>

        <div className="w-[45%]">
          <Image
            src={imageSrc}
            alt={altText}
            width={200} // Ancho especificado directamente
            height={160} // Alto especificado directamente
          />
        </div>
      </div>
    </div>
  );
};

export default CardSimEsim;
