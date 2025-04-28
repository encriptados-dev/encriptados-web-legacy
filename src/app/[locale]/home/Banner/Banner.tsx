import Image from "next/image";
import ChatMail from "../../../../../public/images/new/chatmail.png";
import ChatMailMob from "../../../../../public/images/new/chatmail-mob.png";

export default function Banner() {
  return (
    <div className="lg:h-[284px] w-full overflow-hidden">
      <Image
        src={ChatMail}
        alt="Banner"
        // layout="fill"
        className="hidden md:block"
        // objectFit="cover"
        // quality={100}
        // priority
      />

      <Image
        src={ChatMailMob}
        alt="Banner"
        // layout="fill"
        className="block md:hidden"
        // objectFit="cover"
        // quality={100}
        // priority
      />
    </div>
  );
}
