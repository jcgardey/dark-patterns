import React, { useEffect, useState } from "react";
import Paso1 from "./Modal/Paso1";
import Paso2 from "./Modal/Paso2";
import Paso3 from "./Modal/Paso3";
import { useTranslation } from "react-i18next";

const CancelPlanModal = ({ onClose }) => {
  const [hasSelection, setHasSelection] = useState(false);
  const [step, setStep] = useState(1);
  const { t } = useTranslation();
  const darkEnabled = localStorage.getItem('dark') == 'true' ?? false;

  const nextStep = () => {
    if (step === 1 && !hasSelection && darkEnabled) return;
    if (!darkEnabled) {
      if (step == 1) setStep(3)
      else setStep(4)
    }
    else setStep(step + 1);
  };

  const previousStep = () => {
    if (!darkEnabled) setStep(1)
    else setStep(step - 1);
  };

  useEffect(() => {
    if (step === 1) setHasSelection(false);
    else if (step === 4) onClose(true);
  }, [step]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-2">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => onClose()}
      ></div>

      <div className="relative bg-white rounded-xl shadow-lg  p-6 z-10 overflow-y-auto h-[80vh] sm:h-auto">
        {step == 1 && <Paso1 setHasSelection={setHasSelection} />}
        {step == 2 && <Paso2 />}
        {step == 3 && <Paso3 />}

        <div className="mt-6 flex flex-col sm:flex-row justify-between items-start gap-1 text-xs">
          <button
            className="px-4 py-2 rounded-full border border-black text-gray-700 hover:bg-gray-100 font-bold"
            onClick={() => onClose()}
          >
            {t("CreativeBox.Modal.KeepPlan")}
          </button>

          <div className="flex gap-2 ">
            {step > 1 && (
              <button
                className="px-4 py-2 rounded border border-black rounded-full hover:bg-gray-200"
                onClick={previousStep}
              >
                {t("CreativeBox.Modal.Previous")}
              </button>
            )}
            <button
              onClick={nextStep}
              className={`px-4 py-2 rounded-full  ${
                step == 3 ? 
                    "bg-red-600 text-white hover:bg-red-700"
                  :
                hasSelection || !darkEnabled
                  ? "border border-black hover:bg-gray-200"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {step == 1 && t("CreativeBox.Modal.Next")}
              {step == 2 && t("CreativeBox.Modal.NoThanks")}
              {step == 3 && t("CreativeBox.Modal.ConfirmCancellation")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelPlanModal;
