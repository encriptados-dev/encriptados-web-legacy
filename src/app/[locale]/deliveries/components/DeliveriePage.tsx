"use client";
import React from "react";
import BannerDeliveries from "./BannerDeliveries";
import DeliveriesMap from "./DeliveriesMap";
import HowItWorksDeliveries from "./HowItWorksDeliveries";
import FeaturedProductsDeliveries from "./FeaturedProductsDeliveries";
import JoinUsDeliveries from "./JoinUsDeliveries";
import ModalJoinUsDeliveries from "./ModalJoinUsDeliveries";
import FAQDeliveries from "./FAQDeliveries";
import { JoinUsModalProvider } from "../context/JoinUsModalContext";
import { BasicFormProvider } from "@/shared/components/BasicFormProvider";

const DeliveriesPage = () => {
  return (
    <>
      <BasicFormProvider>
        <JoinUsModalProvider>
          <ModalJoinUsDeliveries />
          <BannerDeliveries />
          <DeliveriesMap />
          <HowItWorksDeliveries />
          <FeaturedProductsDeliveries />
          <JoinUsDeliveries />
          <FAQDeliveries />
        </JoinUsModalProvider>
      </BasicFormProvider>
    </>
  );
};

export default DeliveriesPage;
