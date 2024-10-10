import BannerConnectBne from "./BannerConnectBne";
import OurSim from "./OurSim";
import PromoBanner from "./PromoBanner";
import BannerAnonymous from "./BannerAnonymous";
import CustomShapeDivider from "./CustomShapeDivider";
import OurBneCard from "./svgs/OurBneCard";

const BneSimPage = () => {
  return (
    <>
      <div className="w-full bg-[#f4f8fa]">
        <div>
          <BannerConnectBne />
        </div>
        <div className="mb-20">
          <OurSim />
        </div>
        <div className="bg-custom-gradient-plans py-20">
          <PromoBanner />
        </div>
        <div className="relative py-20 z-10">
          <BannerAnonymous />
        </div>
        <div className="relative -translate-y-[400px] z-0">
          <CustomShapeDivider />
        </div>
        <OurBneCard />
      </div>
    </>
  );
};

export default BneSimPage;
