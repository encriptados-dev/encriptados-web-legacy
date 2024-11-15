import React from "react";
import DownloadAppBanner from "../../our-products/components/DownloadAppBanner";
import AboutUsBanner from "./AboutUsBanner";

const AboutUsPage = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#005340] to-[#073A4B]">
      <AboutUsBanner />
      <DownloadAppBanner />
    </div>
  );
};

export default AboutUsPage;
