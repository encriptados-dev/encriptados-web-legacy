export type SignUp = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  type: "customer";
  country: "co" | "mx";
  documentType: "co_cc" | "co_ce" | "co_nit";
  documentNumber: string;
  phone: string;
  customerDetails: Record<string, unknown>;
};

export type SignUpResponse = {
  accessToken: string;
  refreshToken: string;
};
