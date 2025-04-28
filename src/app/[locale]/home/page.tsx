// import OurProductsPage from "./our-products/OurProductsPage";
import CardProducts from "./CardProducts/CardProducts";
import ChatmailVideo from "./ChatmailVideo/ChatmailVideo";
import Characteristics from "./Characteristics/Characteristics";
import Programs from "./Programs/Programs";
import ChatMail from "./ChatMail/ChatMail";

export default function HomePage() {
  return (
    <>
      <ChatMail />
      <div className="lg:p-8 lg:pb-0 lg:bg-[#F4F8FA]">
        <div className="rounded-xl w-full max-w-7xl mx-auto mt-0">
          <Programs />
        </div>
      </div>
      <div className="p-8 bg-[#F4F8FA]">
        <div className="rounded-xl w-full max-w-7xl mx-auto mt-0">
          <Characteristics />
          <ChatmailVideo />
        </div>
      </div>
      <div className="pb-0 pt-0 lg:pb-8 p-8 bg-[#F4F8FA]">
        <div className="rounded-xl w-full max-w-7xl mx-auto mt-0">
          <div className="flex flex-col justify-between my-0">
            <CardProducts />
          </div>
        </div>
      </div>
    </>
  );
}
