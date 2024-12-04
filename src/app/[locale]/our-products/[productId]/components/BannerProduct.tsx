import Image from "next/image";
import { useProductById } from "../context/ProductByIdContext";

export default function BannerProduct() {
  const { currentProduct } = useProductById();
  return (
    <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden  bg-gray-200 ">
      <Image
        src={currentProduct?.banner || ""}
        alt={"image"}
        quality={100}
        fill
        style={{ objectFit: "cover" }}
        priority
      />
    </div>
  );
}
