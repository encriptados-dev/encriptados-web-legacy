import BannerProduct from "./components/BannerProduct";

export default function ProductByIdLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const Man = "/images/our-products/silent-circle-banner.png";

  return (
    <section>
      <BannerProduct backgroundImage={Man} />
      {children}
    </section>
  );
}
