import React from "react";
import { useTranslation } from "react-i18next";

export default function Buscador() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center bg-gray-200/70 rounded-full p-1.5 gap-2 w-full ">
      <div>
        <button className="flex justify-center items-center gap-1 px-3 py-1 rounded-full text-gray-700 text-sm">
          {t("CreativeBox.Home.Image")} <i className="fa-solid fa-chevron-down fa-xs mt-1"></i>
        </button>
      </div>

      <input
        type="text"
        placeholder="Describe la imagen que quieras generar"
        className="flex-1 bg-transparent outline-none text-gray-700 text-sm min-w-0"
      />

      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-1 rounded-full text-sm">
        {t("CreativeBox.Home.Generate")}
      </button>
    </div>
  );
}
