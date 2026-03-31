import React, { useEffect, useState } from "react";
import NavBar from "../../components/Teatrum/NavBar";
import { Footer } from "../../components/Teatrum/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { events } from "./events";
import { useTranslation } from "react-i18next";

function getPriceForward(price) {
  const val = price * 1.6;
  const rounded = Math.ceil(val / 5) * 5;
  return rounded;
}

function getPriceBack(price) {
  const val = price * 0.7;
  const rounded = Math.ceil(val / 5) * 5;
  return rounded;
}

function SelectPrice() {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);
  const [selectedLocation, setSelectedLocation] = useState("forward");
  const [total, setTotal] = useState(getPriceForward(event.price));
  const [selectedAmount, setSelectedAmount] = useState("1");
  const navigate = useNavigate();
  const darkEnabled = localStorage.getItem("dark") == "true" ?? false;

  const { t } = useTranslation();

  const goToBuy = () => {
    navigate(`/teatrum/buy-ticket/${event.id}`, {
      state: { event, selectedLocation, selectedAmount, total },
    });
  };

  useEffect(() => {
    if (selectedLocation == "forward") {
      setTotal(getPriceForward(event.price) * selectedAmount);
    } else if (selectedLocation == "back") {
      setTotal(getPriceBack(event.price) * selectedAmount);
    } else setTotal(event.price * selectedAmount);
  }, [selectedLocation, selectedAmount]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center sm:flex-row p-5 gap-10 sm:gap-24   sm:h-[350px]">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">
            {t("Teatrum.Buy.SelectTickets")}
          </h1>

          <div className="flex items-center w-full ">
            <div className="w-full border border-gray-300 shadow rounded p-5 flex flex-col items-center gap-5">
              <select
                name="amount"
                value={selectedAmount}
                onChange={(e) => setSelectedAmount(e.target.value)}
                className="cursor-pointer border border-gray-400 rounded w-full p-1"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">
                    Total: $
                    {darkEnabled ? total : total + Math.floor(total * 0.15)}{" "}
                  </h2>
                  <button
                    onClick={goToBuy}
                    className="bg-black hover:bg-black/90 text-white p-1.5 px-4 rounded font-semibold text-lg"
                  >
                    {t("Teatrum.Buy.BuyNow")}
                  </button>
                </div>

                {darkEnabled ? (
                  <p className="text-gray-600">
                    {t("Teatrum.Buy.ServiceCharge")} ${Math.floor(total * 0.15)}
                  </p>
                ) : (
                  <p className="text-gray-800">
                    {t("Teatrum.Buy.WithoutCharges")} ${total}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-3 h-full">
          <h1 className="text-2xl font-semibold">
            {t("Teatrum.Buy.SelectLocation")}
          </h1>
          <div className="flex flex-col gap-4 justify-between h-full">
            {["forward", "middle", "back"].map((loc) => {
              const isSelected = selectedLocation === loc;
              const price =
                loc === "forward"
                  ? getPriceForward(event.price)
                  : loc === "middle"
                  ? event.price
                  : getPriceBack(event.price);

              return (
                <div
                  key={loc}
                  onClick={() => setSelectedLocation(loc)}
                  className={`
          flex justify-between items-center w-full sm:w-[300px] p-4 rounded-xl shadow-md
          cursor-pointer transition-all duration-300
          ${
            isSelected
              ? "bg-gray-100 border-2 border-gray-400 scale-105"
              : "bg-white border border-gray-200 hover:shadow-lg hover:scale-105"
          }
        `}
                >
                  <p className="text-lg sm:text-xl font-semibold text-gray-700">
                    {t(`Teatrum.Buy.${loc}`)}
                  </p>
                  <p className="text-lg sm:text-xl font-bold text-gray-800">
                    ${price}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        
      </div>

      <Footer />
    </div>
  );
}

export default SelectPrice;
