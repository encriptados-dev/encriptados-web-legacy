import SearchSvg from "@/shared/svgs/SearchSvg";
import React from "react";

const SearchPrices = () => {
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Buscar por país"
        className="pl-3 pr-10 py-4 border rounded-full border-gray-400 flex-grow "
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <SearchSvg />
      </div>
    </div>
  );
};

export default SearchPrices;
