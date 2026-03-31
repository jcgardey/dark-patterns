import React from "react";
import { useTranslation } from "react-i18next";

function Paso3() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 sm:w-[500px]">
      <h1 className="text-lg font-semibold">
        {t("CreativeBox.Modal.Title3")}
      </h1>
      <div className="flex flex-col gap-2 ">
        <div>
            <h2 className="text-md font-semibold">{t("CreativeBox.Modal.Detail1.Title")}</h2>
            <p>{t("CreativeBox.Modal.Detail1.Description")}</p>
        </div>

        <div>
            <h2 className="text-md font-semibold">{t("CreativeBox.Modal.Detail2.Title")}</h2>
            <p>{t("CreativeBox.Modal.Detail2.Description")}</p>
        </div>
        <div>
            <h2 className="text-md font-semibold">{t("CreativeBox.Modal.Detail3.Title")}</h2>
            <p>{t("CreativeBox.Modal.Detail3.Description")}</p>
        </div>
      </div>
    </div>
  );
}

export default Paso3;
