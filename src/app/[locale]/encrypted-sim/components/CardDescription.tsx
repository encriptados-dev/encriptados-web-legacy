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
    <div className="ls:bg-custom-linear-2 md:bg-custom-linear-2 sm:bg-custom-linear-2 p-8 rounded-2xl overflow-hidden flex-col flex justify-center">
      <div className="mb-6">
        <Image
          src={logoSrc}
          alt="Logo"
          className="w-[14rem] justify-end flex"
        />
      </div>
      <h2 className="lg:text-4xl md:text-2xl font-bold text-black mb-4">
        {title}
      </h2>
      <p className="text-black mb-8 text-base">
        {description}
      </p>
      <div className=" lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid grid-cols-4 gap-2 justify-center  ">
        {features.map((feature, index) => (
          <div key={index}>
            <div className="lg:h-[100px] md:h-[100px] sm:h-[100px] h-[80px] border flex justify-center items-center border-none rounded-2xl bg-[#E6F4F9] ">
              <Image
                src={feature.icon}
                alt={feature.alt}
                className="w-8 h-8"
              />
            </div>
            <span className="lg:text-sm md:text-[0.6rem] sm:text-[0.6rem] text-[0.6rem] flex items-center text-center text-sm leading-tight justify-center">
              {feature.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDescription;

