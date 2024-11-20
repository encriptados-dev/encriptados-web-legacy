import React from "react";
import BannerBlog from "./BannerBlog";
import DownloadAppBanner from "../../our-products/components/DownloadAppBanner";
import SubscribeBanner from "./SubscribeBanner";
import { BasicFormProvider } from "@/shared/components/BasicFormProvider";
import ListOfPosts from "./ListOfPosts";

const BlogPage = () => {
  const listOfPosts = [
    {
      image: "/images/blog/girlandman.png",
      title:
        "Optimiza la experiencia del cliente en tu tienda online con tecnología avanzada",
      description:
        "Lorem ipsum dolor sit amet consectetur. Cursus est nulla ipsum commodo sem dolor vitae massa. Mi mi adipiscing pulvinar iaculis...",
      author: "Ronald Hernandez",
    },
    {
      image: "/images/blog/girlandman.png",
      title:
        "Optimiza la experiencia del cliente en tu tienda online con tecnología avanzada",
      description:
        "Lorem ipsum dolor sit amet consectetur. Cursus est nulla ipsum commodo sem dolor vitae massa. Mi mi adipiscing pulvinar iaculis...",
      author: "Ronald Hernandez",
    },
    {
      image: "/images/blog/girlandman.png",
      title:
        "Optimiza la experiencia del cliente en tu tienda online con tecnología avanzada",
      description:
        "Lorem ipsum dolor sit amet consectetur. Cursus est nulla ipsum commodo sem dolor vitae massa. Mi mi adipiscing pulvinar iaculis...",
      author: "Ronald Hernandez",
    },
    {
      image: "/images/blog/girlandman.png",
      title:
        "Optimiza la experiencia del cliente en tu tienda online con tecnología avanzada",
      description:
        "Lorem ipsum dolor sit amet consectetur. Cursus est nulla ipsum commodo sem dolor vitae massa. Mi mi adipiscing pulvinar iaculis...",
      author: "Ronald Hernandez",
    },
    {
      image: "/images/blog/girlandman.png",
      title:
        "Optimiza la experiencia del cliente en tu tienda online con tecnología avanzada",
      description:
        "Lorem ipsum dolor sit amet consectetur. Cursus est nulla ipsum commodo sem dolor vitae massa. Mi mi adipiscing pulvinar iaculis...",
      author: "Ronald Hernandez",
    },
    {
      image: "/images/blog/girlandman.png",
      title:
        "Optimiza la experiencia del cliente en tu tienda online con tecnología avanzada",
      description:
        "Lorem ipsum dolor sit amet consectetur. Cursus est nulla ipsum commodo sem dolor vitae massa. Mi mi adipiscing pulvinar iaculis...",
      author: "Ronald Hernandez",
    },
  ];
  return (
    <>
      <BasicFormProvider>
        <BannerBlog />

        <ListOfPosts posts={listOfPosts} />

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
