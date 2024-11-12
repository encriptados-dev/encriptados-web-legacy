import React from "react";
import BannerBlog from "./BannerBlog";
import DownloadAppBanner from "../../our-products/components/DownloadAppBanner";
import SubscribeBanner from "./SubscribeBanner";
import { BasicFormProvider } from "@/shared/components/BasicFormProvider";

const BlogPage = () => {
  return (
    <>
      <BasicFormProvider>
        <BannerBlog />
        <div>
          <DownloadAppBanner />
        </div>
        <div className="bg-[#151515] py-3 relative z-20"></div>

        <SubscribeBanner />
      </BasicFormProvider>
    </>
  );
};

export default BlogPage;
