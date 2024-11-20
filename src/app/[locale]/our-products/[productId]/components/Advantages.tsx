import Image from "next/image";

export default function Advantages() {
  const shieldImage = "/images/our-products/shield.png";
  const advantages = [
    {
      title: "Construido sobre un protocolo diferente",
      icon: (
        <Image src={shieldImage} alt="Shield Icon" width={30} height={30} />
      ),
    },
    {
      title: "Sin política de puerta trasera",
      icon: (
        <Image src={shieldImage} alt="Shield Icon" width={30} height={30} />
      ),
    },
    {
      title: "Diseño Privado",
      icon: (
        <Image src={shieldImage} alt="Shield Icon" width={30} height={30} />
      ),
    },
    {
      title: "Administración de usuarios",
      icon: (
        <Image src={shieldImage} alt="Shield Icon" width={30} height={30} />
      ),
    },
    {
      title: "Todos tus datos protegidos",
      icon: (
        <Image src={shieldImage} alt="Shield Icon" width={30} height={30} />
      ),
    },
    {
      title: "Tecnología patentada de grado militar",
      icon: (
        <Image src={shieldImage} alt="Shield Icon" width={30} height={30} />
      ),
    },
  ];

  return (
    <div className="bg-black p-6 w-full  ">
      <div className="bg-black p-6 w-full lg:w-7/12 mx-auto mt-24 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="flex  cursor-pointer items-center gap-3 bg-zinc-900/50 rounded-lg p-6 mx-auto w-full hover:bg-zinc-900/70 transition-colors"
            >
              <div className="text-white">{advantage.icon}</div>
              <p className="text-white text-base font-medium">
                {advantage.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
