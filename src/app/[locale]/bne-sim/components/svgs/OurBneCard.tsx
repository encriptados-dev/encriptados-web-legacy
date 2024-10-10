import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  objectFit?: 'cover' | 'contain';
}

const OurBneCard: React.FC<CardProps> = ({ title, description, imageSrc, imageAlt, objectFit = 'cover' }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      <div className="mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="relative h-48 rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit={objectFit}
        />
      </div>
    </div>
  );
};

export default OurBneCard;
