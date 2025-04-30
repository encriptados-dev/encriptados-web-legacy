import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import YoutubeMail from "../../../../../public/images/new/youtube1.png";

const ChatmailVideo = () => {
  const FloatSimCard = "/images/encrypted-sim/Encrypted_float_image.png";

  const t = useTranslations("EncryptedSimPage");
  return (
    <div className="w-full px-0 sm:px-6 lg:px-0 lg:mb-8">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-6 items-center text-center lg:text-left">
        {/* Texto */}
        <div className="w-full lg:w-5/12 xl:pl-20">
          <h1
            className="text-2xl sm:text-3xl lg:text-[44px] font-bold text-black heading-line
"
          >
            {t("title")}
          </h1>
        </div>

        {/* Imagen */}
        <div className="mt-6">
          <Image
            alt="Youtube"
            // width={400}
            // height={400}
            src={YoutubeMail}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatmailVideo;
