import React from "react";
import Image from "next/image";

const AboutUsBanner = () => {
  const Banner = "/images/about-us/phone-hand.png";

  return (
    <div className="bg-[#051A22] flex items-center w-7/12 rounded-3xl justify-center h-[400px]">
      <Image
        src={Banner}
        alt="Phone in Hand"
        width={400}
        height={400}
        className="object-contain"
        priority
      />
    </div>
  );
};

export default AboutUsBanner;
