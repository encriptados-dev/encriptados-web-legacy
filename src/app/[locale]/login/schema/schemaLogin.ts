import * as yup from "yup";

const schemaLogin = (t: any) =>
  yup.object().shape({
    accountNumber: yup
      .string()
      .length(16, t("LoginPage.inputErrors.moreThanSixteenNumbers"))
      .required(),
  });

type SchemaLoginType = yup.InferType<any>;

export { schemaLogin };
export type { SchemaLoginType };
