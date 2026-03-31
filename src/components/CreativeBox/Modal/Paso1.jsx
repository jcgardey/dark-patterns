import React, { useState } from "react";
import logo from "../../../assets/CreativeBox/CreativeboxStock.png";
import { useTranslation } from "react-i18next";

function Paso1({setHasSelection}) {
  const [selected, setSelected] = useState([false, false, false, false]);
  const { t } = useTranslation();
  
  const toggleCheck = (index) => {
    const updated = [...selected];
    updated[index] = !updated[index];
    setSelected(updated);

    setHasSelection(updated.some((v) => v === true));
  };

  return (
    <div>
      <h2 className="text-lg font-semibold">{t("CreativeBox.Modal.Title1")}</h2>
      <p className="text-sm text-gray-600 mb-4">
        {t("CreativeBox.Modal.SubTitle")}
      </p>

      <div className="space-y-2 text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={selected[0]}
            onChange={() => toggleCheck(0)}
            className="accent-black"
          />
          {t("CreativeBox.Modal.Option1")}
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={selected[1]}
            onChange={() => toggleCheck(1)}
            className="accent-black"
          />
          {t("CreativeBox.Modal.Option2")}
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={selected[2]}
            onChange={() => toggleCheck(2)}
            className="accent-black"
          />
          {t("CreativeBox.Modal.Option3")}
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={selected[3]}
            onChange={() => toggleCheck(3)}
            className="accent-black"
          />
          {t("CreativeBox.Modal.Option4")}
        </label>
      </div>

      <h2 className="font-semibold mt-5">{t("CreativeBox.Modal.PlanDetails")}</h2>
      <div className=" border rounded-lg p-4 flex items-center gap-4">
        <img src={logo} className="w-7 h-7 rounded" alt="" />
        <div>
          <p className="font-medium">Creativebox Stock+AI</p>
          <p className="text-sm text-gray-600">{t("CreativeBox.Modal.MonthlyPlan")} - $25/{t("CreativeBox.Modal.Month")}</p>
        </div>
      </div> 
    </div>
  );
}

export default Paso1;
