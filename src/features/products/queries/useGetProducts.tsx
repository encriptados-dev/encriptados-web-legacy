import { useQuery } from "@tanstack/react-query";
import { PRODUCTS_QUERY_KEY } from "../constants/queryProductsKeys";
import { getAllProducts } from "../services";

export const useGetProducts = () => {
  const query = useQuery({
    queryKey: PRODUCTS_QUERY_KEY,
    queryFn: getAllProducts,
  });

  return query;
};
