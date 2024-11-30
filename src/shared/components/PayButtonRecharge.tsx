import React from "react";
import Button from "./Button";
import { useFormContext } from "react-hook-form";
import { useRechargeNumber } from "@/features/recharge/mutations/useRechargeNumber";

const PayButtonRecharge = () => {
  const { handleSubmit } = useFormContext();

  const { recharge } = useRechargeNumber();
  return (
    <Button
      onClick={handleSubmit((data) => {
        recharge({ number: data?.rechargenumbersim });
      })}
      intent="black"
      rounded="full"
      size="medium"
    >
      Pagar ahora
    </Button>
  );
};

export default PayButtonRecharge;
