import OurSimCard from "./svgs/OurSimCard";
import AdsClickSvg from "/public/images/bne-sim/svg/ads_click.svg";
import CellTowerSvg from "/public/images/bne-sim/svg/cell_tower.svg";
import Rotate_rightSvg from "/public/images/bne-sim/svg/rotate_right.svg";
import SimCardSvg from "/public/images/bne-sim/svg/sim_card.svg";

const OurSim: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:flex-row gap-10 max-w-[1100px] mx-auto">
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-5xl font-bold">¿Por qué elegir nuestra SIM?</h2>
        <p className="font-semibold text-2xl">
          Sin registro de datos ¡Anonimato Garantizado!
        </p>
        <p className="text-2xl">
          Los datos que no se almacenan no se pueden filtrar ni revelar. Es
          parte de nuestra filosofía no recopilar información personal ni
          registros de nuestros clientes.
        </p>
      </div>
      <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <OurSimCard
          bgColor="bg-custom-gradient-our-sim-black"
          textColor="text-white"
          icon={CellTowerSvg}
          title="Sin cargos de roaming"
          description="Nuestra SIM te permite conectarte a un operador local y evitar altas tarifas de roaming"
          classCard="sm:-translate-y-4 "
        />

        <OurSimCard
          bgColor="bg-custom-gradient-our-sim-blue"
          textColor="text-black"
          icon={AdsClickSvg}
          title="Conéctate con algunos clics"
          description="Activa tu SIM de forma fácil, tus datos estarán listos para usar en más de 200 países"
          classCard="sm:translate-y-4"
        />

        <OurSimCard
          bgColor="bg-custom-gradient-our-sim-blue"
          textColor="text-black"
          icon={Rotate_rightSvg}
          title="Planes flexibles"
          description="Elige entre varios planes de datos según tus necesidades y tarda el tiempo que desees en consumir tus recursos"
          classCard="sm:-translate-y-4 "
        />

        <OurSimCard
          bgColor="bg-custom-gradient-our-sim-black"
          textColor="text-white"
          icon={SimCardSvg}
          title="Activación instantánea"
          description="Adquiere tu SIM desde cualquier lugar del mundo y actívala al instante de forma fácil y con total anonimato"
          classCard="sm:translate-y-4"
        />
      </div>
    </div>
  );
};

export default OurSim;
