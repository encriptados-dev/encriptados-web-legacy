"use client";
import BannerProduct from "./components/BannerProduct";
import { ProductByIdProvider } from "./context/ProductByIdContext";

export default function ProductByIdLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const Man = "/images/our-products/silent-circle-banner.png";

  return (
    <ProductByIdProvider>
      <section>
        <BannerProduct backgroundImage={Man} />
        {children}
      </section>
    </ProductByIdProvider>
  );
}
