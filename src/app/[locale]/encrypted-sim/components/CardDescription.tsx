import Image from "next/image";

interface Feature {
  icon: string; // Path to the image
  alt: string;  // Alt text for the icon
  description: string;
}

interface CardDescriptionProps {
  logoSrc: string;
  title: string;
  description: string;
  features: Feature[];
}

const CardDescription: React.FC<CardDescriptionProps> = ({ 
  logoSrc, 
  title, 
  description, 
  features 
}) => {
  return (
    <div className="bg-[#fafafa] bg-gradient-to-r from-[#fafafa] to-[#c1f0ff] from-[80%] to-[100%] shadow-lg p-8 rounded-2xl overflow-hidden flex-col flex justify-center">
      <div className="mb-6 w-full">
        <Image
          src={logoSrc}
          alt="Logo"
          className="w-[14rem] justify-end flex"
        />
      </div>
      <h2 className="text-4xl font-bold text-black mb-4">
        {title}
      </h2>
      <p className="text-black mb-8 text-base">
        {description}
      </p>
      <div className="grid grid-cols-5 gap-2 justify-center  ">
        {features.map((feature, index) => (
          <div key={index}>
            <div className="border-none rounded-2xl bg-[#E6F4F9] h-[100px]  border flex justify-center items-center">
              <Image
                src={feature.icon}
                alt={feature.alt}
                className="w-8 h-8"
              />
            </div>
            <span className="flex items-center text-center text-sm leading-tight justify-center">
              {feature.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDescription;

