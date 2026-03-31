import React from "react";
import { useTranslation } from "react-i18next";

function Sidebar({ actual, setActual }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white shadow p-2 sm:p-4 w-64 h-screenflex flex-col min-w-[100px]">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">{t("CreativeBox.Sidebar.Menu")}</h2>
      <ul className="flex flex-col gap-3">
        <li onClick={() => setActual("cuenta")} 
          className={`px-4 py-2 rounded cursor-pointer font-medium ${
            actual === "cuenta"
              ? "bg-gray-200 text-gray-900"
              : "hover:bg-gray-100 text-gray-700"
          }`}
        >
          {t("CreativeBox.Sidebar.Account")}
        </li>
        <li onClick={() => setActual("planes")} className={`px-4 py-2 rounded cursor-pointer font-medium ${
            actual === "planes"
              ? "bg-gray-200 text-gray-900"
              : "hover:bg-gray-100 text-gray-700"
          }`}>
          {t("CreativeBox.Sidebar.Plans")}
        </li>
        <li className="px-4 py-2 rounded hover:bg-gray-100 cursor-pointer text-gray-700 font-medium">
          {t("CreativeBox.Sidebar.ContactPreferences")}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
