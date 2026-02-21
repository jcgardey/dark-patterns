import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NavBar() {
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <div className="flex justify-between items-center h-20 w-full bg-black text-white shadow">
      <p
        onClick={() => navigate("/teatrum")}
        className="flex italic text-sm sm:text-2xl font-semibold  p-3 cursor-pointer"
      >
        <i className="hidden sm:inline fa-solid fa-theater-masks text-red-900"></i>
        Teatrum
      </p>

      <ul className="flex">
        <li className="border-r-2 border-r-red-700 p-2 px-2 sm:px-5 text-xs sm:text-lg select-none">
          <span className="">{t("Teatrum.Home.Calendar")}</span>
        </li>
        <li className="border-r-2 border-r-red-700 p-2 px-2 sm:px-5 text-xs sm:text-lg select-none">
          <span className="">{t("Teatrum.Home.History")}</span>
        </li>
        <li className="p-2 px-2 sm:px-5 text-xs sm:text-lg select-none">
          <span className="">{t("Teatrum.Home.Layout")}</span>
        </li>
      </ul>

      <div className="flex gap-1 sm:gap-3 p-2 truncate sm:ml-20">
        <i className="fa-brands fa-facebook-f cursor-pointer"></i>
        <i className="fa-brands fa-instagram cursor-pointer"></i>
        <i className="fab fa-x-twitter cursor-pointer"></i>
      </div>
    </div>
  );
}

export default NavBar;
