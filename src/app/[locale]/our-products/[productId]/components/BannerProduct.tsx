import Image from "next/image";

interface BannerProductProps {
  backgroundImage: string;
  alt?: string;
}

export default function BannerProduct({
  backgroundImage,
  alt = "Banner background",
}: BannerProductProps) {
  return (
    <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden  bg-gray-200">
      <Image
        src={backgroundImage}
        alt={alt}
        quality={100}
        fill
        style={{ objectFit: "cover" }}
        priority
      />
    </div>
  );
}
