import React, { useEffect } from "react";
import BackgroundHome from "../../assets/Moviemax/BackgroundHome.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { updateDarkPatternState } from "../../utils/dark_patterns";

export function Home() {
  const navigate = useNavigate();
  const {t}= useTranslation()

  const goToIndications = () => {
    navigate("/moviemax/indications");
  };

    useEffect(() => {
      updateDarkPatternState();
    }, []);

  return (
    <div
      className="relative w-full h-screen flex flex-col items-center bg-cover bg-center text-white overflow-auto"
      style={{ backgroundImage: `url(${BackgroundHome})` }}
    >
      {/* Capa de oscurecimiento */}
      <div className="fixed inset-0 bg-black/70 "></div>

      {/* Header */}
      <div className="relative z-10 flex w-full justify-between items-center p-10 py-6">
        <h1 className="text-4xl font-bold text-purple-600 cursor-pointer">MovieMax</h1>

        <button className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded font-medium cursor-not-allowed">
          {t("Moviemax.Login")}
        </button>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center max-w-[500px] gap-10">
        <h2 className="text-4xl md:text-5xl font-bold">
          {t("Moviemax.Home.Suscribe")}
        </h2>

        <button
          onClick={goToIndications}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded font-bold text-xl"
        >
          {t("Moviemax.Home.Start")} →
        </button>
      </div>
    </div>
  );
}
