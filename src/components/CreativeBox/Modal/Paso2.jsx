import React from "react";
import ProductoBox from "../ProductoBox";
import fondo1 from "../../../assets/CreativeBox/fondoPixelForge.jpeg";
import fondo2 from "../../../assets/CreativeBox/fondoFrameFlow.jpeg";
import fondo3 from "../../../assets/CreativeBox/fondo1.jpeg";
import { useTranslation } from "react-i18next";

function Paso2() {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-md font-semibold">
        {t("CreativeBox.Modal.Title2")}
      </h1>

      <div className="flex flex-col md:flex-row gap-2 ">
        <ProductoBox
          nombre={t("CreativeBox.Modal.Product1.Title")}
          descripcion={t("CreativeBox.Modal.Product1.Description")}
          esPlan={true}
          esCambiarPlan={true}
          imagen={fondo1}
        />
        <ProductoBox
          nombre={t("CreativeBox.Modal.Product2.Title")}
          descripcion={t("CreativeBox.Modal.Product2.Description")}
          esPlan={true}
          esCambiarPlan={true}
          imagen={fondo2}
        />
        <ProductoBox
          nombre={t("CreativeBox.Modal.Product3.Title")}
          descripcion={t("CreativeBox.Modal.Product3.Description")}
          esPlan={true}
          esCambiarPlan={true}
          imagen={fondo3}
        />
      </div>
    </div>
  );
}

export default Paso2;
