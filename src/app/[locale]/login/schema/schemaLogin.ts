import * as yup from "yup";

const schemaLogin = yup.object().shape({
  accountNumber: yup
    .string()
    .length(16, "El número de cuenta debe tener exactamente 16 caracteres")
    .required("El número de cuenta es obligatorio"),
});

type SchemaLoginType = yup.InferType<typeof schemaLogin>;

export { schemaLogin };
export type { SchemaLoginType };
