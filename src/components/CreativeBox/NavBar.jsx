import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/CreativeBox/Logo.png";
import { useTranslation } from "react-i18next";

function NavBar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="flex justify-between items-center h-20 w-full bg-gray-100 shadow">
      <img
        onClick={() => navigate("/creativebox")}
        src={logo}
        alt="Logo de Creativebox"
        className="h-full cursor-pointer min-w-0"
      />

      <ul className="flex gap-10">
        <li className="cursor-not-allowed">
          <span className="hidden sm:inline">{t("CreativeBox.NavBar.Design")}</span>{" "}
          <i className="fa-solid fa-chevron-down fa-xs"></i>
        </li>
        <li className="cursor-not-allowed">
          <span className="hidden sm:inline">{t("CreativeBox.NavBar.Marketing")}</span>{" "}
          <i className="fa-solid fa-chevron-down fa-xs"></i>
        </li>
        <li className="cursor-not-allowed">
          <span className="hidden sm:inline">{t("CreativeBox.NavBar.Learning")}</span>{" "}
          <i className="fa-solid fa-chevron-down fa-xs"></i>
        </li>
      </ul>

      <div className="relative flex flex-col p-2">
        <div
          className="cursor-pointer w-10 h-10 mx-1 flex justify-center items-center rounded-full bg-gray-300 hover:bg-gray-400"
          onClick={() => setOpen(!open)}
        >
          <i className="fa-solid fa-sharp fa-user"></i>
        </div>

        {open && (
          <div className="absolute top-12 right-0 w-40 bg-white border rounded shadow-md z-10">
            <ul>
              <li className="px-2 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate("/creativebox/account")}>
                <i className="fa-solid fa-user mr-2"></i> {t("CreativeBox.NavBar.Account")}
              </li>
              <li className="px-2 py-2 hover:bg-gray-100 cursor-pointer">
                <i className="fa-solid fa-gear mr-2"></i> {t("CreativeBox.NavBar.Settings")}
              </li>
              <hr />
              <li className="px-2 py-2 hover:bg-gray-100 cursor-pointer">
                <i className="fa-solid fa-right-from-bracket mr-2"></i> {t("CreativeBox.NavBar.Logout")}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
