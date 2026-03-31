import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Search({ events, setEventsState }) {
  const [query, setQuery] = useState("");

  const { t } = useTranslation();

  const search = () => {
    const value = query.toLowerCase();
    const result = events.filter((e) =>
      e.title.toLowerCase().includes(value)
    );
    setEventsState(result);
  };


  return (
    <div className="flex items-center bg-gray-200/70 rounded p-1.5 gap-2 w-full max-w-[700px] min-w-0 shadow border border-gray-300">
      <i className="fa-solid fa-magnifying-glass text-gray-600 px-2 py-2"></i>

      <input
        type="text"
        placeholder={`${t("Teatrum.Home.Search")}...`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key == "Enter" && search()}
        className="flex-1 bg-transparent outline-none text-gray-700 text-sm min-w-0"
      />

      <button onClick={search} className="bg-red-800 hover:bg-red-900 text-white font-semibold p-1 px-3 rounded text-sm">
        {t("Teatrum.Home.Search")}
      </button>
    </div>
  );
}

export default Search;
