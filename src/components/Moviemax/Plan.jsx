import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FinishedTask } from "../FinishedTask";


function Plan({ selectedPlan, setSelectedPlan, plan }) {
  const navigate= useNavigate()
  const [showFinished, setShowFinished]= useState(false)
  const {t} = useTranslation()
  const select = () => {
    setSelectedPlan(plan.id);
  };

  const goToCheckout= () =>{
    if (plan.title == "Gratis") setShowFinished(true)
    else navigate(`/moviemax/checkout/${plan.title}`)
  }

  return (
    <div
      onClick={select}
      className={`${
        selectedPlan == plan.id && "border-purple-400 bg-gray-200"
      } flex flex-col w-[330px] shrink-0 p-2 border border-gray-300 rounded-lg shadow hover:shadow-md cursor-pointer gap-2`}
    >
      <div
        className={`bg-gradient-to-r ${
          plan.title == "Premium"
            ? "from-blue-800 via-puprle-600 to-red-600"
            : "from-blue-800 to-purple-600"
        }  p-3 rounded-lg text-white font-medium `}
      >
        <h3 className="text-lg">{t(`Moviemax.Plan.${plan.id}.Title`)}</h3>
        <div className="flex items-center justify-between">
          <p className="text-sm">{plan.subtitle}</p>
          {selectedPlan == plan.id && <i className="fa-solid fa-check-circle"></i>}
        </div>
      </div>

      <ul className="flex flex-col px-6 gap-2">
        <li>
          <p className="font-medium text-gray-600 text-sm">{t("Moviemax.Plan.MonthlyPrice")}</p>
          <p className="font-medium text-gray-800 text-md">${plan.price}</p>
        </li>
        <hr />
        <li>
          <p className="font-medium text-gray-600 text-sm">
            {t("Moviemax.Plan.Quality")}
          </p>
          <p className="font-medium text-gray-800 text-md">{t(`Moviemax.Plan.${plan.id}.Quality`)}</p>
        </li>
        <hr />
        <li>
          <p className="font-medium text-gray-600 text-sm">{t("Moviemax.Plan.Resolution")}</p>
          <p className="font-medium text-gray-800 text-md">{plan.resolution}</p>
        </li>
        <hr />
        <li>
          <p className="font-medium text-gray-600 text-sm">
            {t("Moviemax.Plan.CompatibleDevices")}
          </p>
          <p className="font-medium text-gray-800 text-md">
            {t("Moviemax.Plan.DevicesList")}
          </p>
        </li>
        <hr />
        <li>
          <p className="font-medium text-gray-600 text-sm">
            {t("Moviemax.Plan.HomeDevices")}
          </p>
          <p className="font-medium text-gray-800 text-md">
            {plan.home_devices}
          </p>
        </li>
        <hr />
        <li>
          <p className="font-medium text-gray-600 text-sm">
            {t("Moviemax.Plan.DownloadDevices")}
          </p>
          <p className="font-medium text-gray-800 text-md">
            {plan.download_devices}
          </p>
        </li>
        {selectedPlan == plan.id && (
          <>
            <hr />
            <li className="flex justify-center items-center">
              <button onClick={goToCheckout}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 
                         text-white font-semibold text-lg px-8 py-2 rounded-lg shadow-md"
              >
                {t("Moviemax.Plan.Select")}
              </button>
            </li>
          </>
        )}
      </ul>

      <FinishedTask show={showFinished} data={{plan: plan.title, price: plan.price}} />
    </div>
  );
}

export default Plan;
