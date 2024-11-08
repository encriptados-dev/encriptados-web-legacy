"use client";
import React from "react";
import KeyIconTest from "../icons/KeySecureEncrypted";
import MobileIconTest from "../icons/PhoneSecureEncrypted";
import SpiralLock from "../icons/SpiralLock";
import InfoEncrypted from "../icons/PhoneSecureEncrypted";
import PhoneSecureEncrypted from "../icons/PhoneSecureEncrypted";
import KeySecureEncrypted from "../icons/KeySecureEncrypted";

const InitTestEncrypted = () => {
  return (
    <>
      <div className="bg-black pt-14  pb-14">
        <div className="lg:flex justify-between">
          <PhoneSecureEncrypted />

          <SpiralLock
            onTestInit={() => {
              alert("Init test...");
            }}
          />
        </div>

        <div className="lg:flex  justify-between">
          <KeySecureEncrypted />

          <SpiralLock
            onTestInit={() => {
              alert("Init test...");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default InitTestEncrypted;
