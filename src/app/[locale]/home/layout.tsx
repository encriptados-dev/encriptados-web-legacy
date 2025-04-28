import "../../globals.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Banner from "./Banner/Banner";
import DownloadAppHome from "./DownloadAppHome/DownloadAppHome";
import Faq from "./Faq/Faq";

export default async function HomeLay({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Banner />
      {children}
      <Faq />
      <DownloadAppHome />
      <Footer />
    </>
  );
}
