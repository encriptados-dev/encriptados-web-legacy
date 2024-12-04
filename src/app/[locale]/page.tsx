import BannerOurProducts from "./our-products/components/BannerOurProducts";
import BannerOurProductsMobile from "./our-products/components/BannerOurProductsMobile";

import OurProductsPage from "./our-products/OurProductsPage";

export default function HomePage() {
  return (
    <>
      {/* Banner para dispositivos móviles */}
      <div className="block md:hidden">
        <BannerOurProductsMobile />
      </div>

      {/* Banner para dispositivos mayores que móvil */}
      <div className="hidden md:block">
        <BannerOurProducts />
      </div>

      <OurProductsPage />
    </>
  );
}
