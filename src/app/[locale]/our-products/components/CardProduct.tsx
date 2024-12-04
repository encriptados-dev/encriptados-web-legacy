import Image from "next/image";

import CheckSvg from "/public/images/encrypted-sim/icons/check.svg";
import StarSvg from "/public/images/encrypted-sim/icons/star_half2.svg";

import LocalMallSvgNew from "./svgs/LocalMallSvgNew";
import { useRouter } from "next/navigation";

interface CardSimProps {
  productImage: string; // Ahora es una URL de tipo string
  features: string[];
  priceRange: string;
  headerIcon: string;
  headerTitle: string;
  priceDiscount: string;
  id: number;
}

const CardProduct: React.FC<CardSimProps> = ({
  productImage,
  features,
  priceDiscount,
  priceRange,
  id,
  headerTitle,
}) => {
  const router = useRouter();

  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
      <div className="p-2 bg-[#D4F2FC] ">
        <Image
          src={productImage}
          alt="Sim Card"
          width={300}
          height={192}
          className="w-full h-48 object-contain"
        />
        <div className="p-2">
          <div className="flex justify-end gap-2 mb-1 text-sm text-gray-600"></div>
        </div>
      </div>

      <div className="p-6">
        <div className="text-black rounded-full text-xs font-semibold flex gap-1">
          <h2 className="text-base font-bold mb-2 truncate">{headerTitle}</h2>
        </div>

        <ul className="space-y-0">
          {features.map((item, index) => (
            <li
              key={index}
              className="flex items-center text-sm gap-1 truncate"
            >
              <Image src={CheckSvg} alt="Icon" className="w-4 h-4" />
              {item}
            </li>
          ))}
        </ul>
        <hr className="my-4" />
        <div className="p-0">
          <div className="w-full">
            <div className="flex justify-between items-center mb-2">
              <div className="flex gap-x-5 items-center justify-center">
                <span className="text-lg font-bold">{priceRange}</span>
                <span className="text-[11px] text-red-500 ">
                  Ahorra hasta {priceDiscount} USD
                </span>
              </div>

              <div className="flex items-center bg-[#EDF4F6] px-2 rounded-full">
                <Image
                  src={StarSvg}
                  alt="Icon"
                  className="w-6 h-6 fill-current text-yellow-400 font-bold"
                />
                <span className="ml-1 text-sm text-gray-600 font-semibold">
                  5/5
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-x-2 ">
              <button className="bg-black rounded-full text-white px-3 py-2">
                <div className="flex items-center justify-center gap-x-2 px-2">
                  Comprar
                  <LocalMallSvgNew />
                </div>
              </button>

              <h1
                onClick={() => {
                  router.push(`our-products/${id}`);
                }}
                className="cursor-pointer text-[14px]"
              >
                Más información
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
