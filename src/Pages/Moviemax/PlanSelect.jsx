import React, { useEffect, useState } from "react";
import Plan from "../../components/Moviemax/Plan";
import { useNavigate } from "react-router-dom";
import { plans } from "./plans";
import { Footer } from "../../components/Moviemax/Footer";
import { useTranslation } from "react-i18next";


function PlanSelect() {
  const [seeAll, setSeeAllPlans] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(4);
  const navigate = useNavigate();
  const {t} = useTranslation()
  const darkEnabled = localStorage.getItem('dark') == 'true' ?? false;

  useEffect(() => {
    window.scrollTo(0, 0);

    setSeeAllPlans(!darkEnabled)
  }, []);

  return (
    <div>
      <div className="relative z-10 flex w-full justify-between items-center px-8 py-6">
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

      <div className="flex flex-col items-center gap-3 p-8">
        <h2 className="font-medium text-2xl">
          {t("Moviemax.PlanSelect.Title")}
        </h2>

        <div className="flex gap-3 overflow-x-auto max-w-[320px] sm:max-w-[700px] lg:max-w-[1050px]">
          {plans
            .filter((plan) => seeAll || plan.id !== 1)
            .map((plan) => (
              <Plan
                key={plan.id}
                plan={plan}
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
              />
            ))}
        </div>

        <div className="text-gray-600 text-sm flex flex-col items-end gap-2">
          {!seeAll && (
            <span
              onClick={() => setSeeAllPlans(true)}
              className="font-medium text-[17px] text-blue-500 cursor-pointer hover:text-blue-600"
            >
              {t("Moviemax.PlanSelect.GetFreePlan")}
            </span>
          )}
          <p>
            {t("Moviemax.PlanSelect.Disclaimer")}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PlanSelect;
