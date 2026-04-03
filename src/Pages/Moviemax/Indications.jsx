import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Moviemax/Footer";
import { useTranslation } from "react-i18next";

function Indications() {
  const navigate = useNavigate();
  const {t} = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="w-full">
        <div className="relative z-10 flex w-full justify-between items-center p-2 sm:p-8 py-6">
          <h1
            onClick={() => navigate("/moviemax")}
            className="text-4xl font-bold text-purple-600 cursor-pointer"
          >
            MovieMax
          </h1>

          <button className="hover:bg-gray-300 px-3 py-1 rounded font-medium cursor-not-allowed">
            {t("Moviemax.Login")}
          </button>
        </div>
        <hr />
      </div>

      <div className="flex flex-col gap-6 p-8 rounded-2xl shadow-lg bg-white max-w-md mx-3 sm:mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          {t("Moviemax.Indications.ChoosePlan")}
        </h2>

        <ul className="flex flex-col gap-3 font-medium text-lg text-gray-600">
          <li className="flex items-center gap-3">
            <span className="text-green-500 text-xl">✔</span>
            {t("Moviemax.Indications.Indication1")}
          </li>
          <li className="flex items-center gap-3">
            <span className="text-green-500 text-xl">✔</span>
            {t("Moviemax.Indications.Indication2")}
          </li>
          <li className="flex items-center gap-3">
            <span className="text-green-500 text-xl">✔</span>
            {t("Moviemax.Indications.Indication3")}
          </li>
        </ul>

        <button
          onClick={() => navigate("/moviemax/plan-select")}
          className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 
               text-white font-semibold text-2xl px-10 py-4 rounded-lg shadow-md transition-transform hover:scale-105"
        >
          {t("Moviemax.Indications.Next")}
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Indications;