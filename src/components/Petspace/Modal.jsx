import React from "react";
import { useTranslation } from "react-i18next";

function Modal({ show, goToCheckout }) {
  const { t } = useTranslation();

  const addProduct = () => {
    localStorage.setItem("addsProducts", "true");
    show(false);
  };

  const goToBuy = () => {
    localStorage.setItem("addsProducts", "false");
    goToCheckout();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full text-center shadow-xl">
        <h2 className="text-lg font-bold mb-4">{t("PetSpace.Modal.Title")}</h2>
        <div className="flex flex-col gap-4 mt-6">
          <button
            onClick={addProduct}
            className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-xl"
          >
            {t("PetSpace.Modal.AddProduct")}
          </button>
          <button
            onClick={goToBuy}
            className="w-full text-gray-800 px-6 py-3 rounded-xl text-lg font-medium border border-gray-300 hover:bg-gray-100 transition-all"
          >
            {t("PetSpace.Modal.No")}😿
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
