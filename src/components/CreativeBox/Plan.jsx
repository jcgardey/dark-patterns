import React, { useState } from "react";
import logo1 from "../../assets/CreativeBox/logo3.jpeg";
import logo2 from "../../assets/CreativeBox/logo1.jpeg";
import fondo from "../../assets/CreativeBox/FondoPlan.jpeg";
import logo3 from "../../assets/CreativeBox/logoAI.jpeg";
import ProductoBox from "./ProductoBox";
import CancelPlanModal from "./CancelPlanModal";
import { useTranslation } from "react-i18next";
import { FinishedTask } from "../FinishedTask";


function Plan() {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation();
    const [showFinished, setShowFinished]= useState(false)

  const onClose= (finishT = false) =>{
    setOpenModal(false)
    console.log("asd", finishT)
    if (finishT) setShowFinished(true)
  }

  return (
    <div className="p-4 flex flex-col gap-2.5">
      <h1 className="text-3xl font-bold">{t("CreativeBox.Sidebar.Plans")}</h1>
      <hr />

      <div className="flex flex-col sm:flex-row bg-white p-3 gap-10 ">
        <ProductoBox
          nombre="Creativebox Stock+AI"
          descripcion={t("CreativeBox.Plan.Description")}
          imagen={fondo}
          esPlan={true}
          setOpenModal={setOpenModal}
        />

        <div className="flex flex-col gap-5">
          <h2 className="text-lg font-semibold">{t("CreativeBox.Plan.Included")}</h2>

          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-1">
              <img className="w-6 h-6 rounded-sm" src={logo1} alt="" />{" "}
              <p>Creativebox Blazewing</p>
            </li>
            <li className="flex items-center gap-1">
              <img className="w-6 h-6 rounded-sm" src={logo2} alt="" /> {t("CreativeBox.Plan.CreativeboxImages")}
            </li>
            <li className="flex items-center gap-1">
              <img className="w-6 h-6 rounded-sm" src={logo3} alt="" /> {t("CreativeBox.Plan.GenerativeAI")}
            </li>
          </ul>
        </div>
      </div>

      {openModal && <CancelPlanModal onClose={onClose} />}
      <FinishedTask show={showFinished} />
    </div>
  );
}

export default Plan;
