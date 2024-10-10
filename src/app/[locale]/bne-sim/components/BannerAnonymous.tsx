import Image from 'next/image';
import BneSimSvg from "/public/images/bne-sim/anonymous_purchase.png";;

const AnonymousBanner: React.FC = () => {
  return (
    <div className="p-4 md:p-0 flex flex-col items-center justify-center max-w-[1000px] mx-auto">
      <div className='text-center'>
        <h2 className="text-4xl  font-bold py-4">
        Tu compra es anónima
        </h2>
        <p className="text-black text-2xl py-4 w-[700px]">
        Ten completo anonimato en la compra de tu SIM o eSIM, no guardamos ningún rastro o información personal
        </p>
      </div>
      <div>
        <Image
          src={BneSimSvg}
          alt="Hombre usando smartphone"                   
          className="w-[100%] "
        />
      </div>
    </div>
  );
};

export default AnonymousBanner;