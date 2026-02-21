import React, { useEffect, useState } from "react";
import NavBar from "../../components/Teatrum/NavBar";
import EventBox from "../../components/Teatrum/EventBox";
import { events } from "./events";
import Search from "../../components/Teatrum/Search";
import { Footer } from "../../components/Teatrum/Footer";
import { useTranslation } from "react-i18next";
import Banner from "../../assets/Teatrum/Banner.png";
import { updateDarkPatternState } from "../../utils/dark_patterns";

export function Home() {
  const [eventsState, setEventsState] = useState(events);

  const { t } = useTranslation();

    useEffect(() => {
      updateDarkPatternState();
    }, []);

  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center gap-7 ">
        <div
          className="relative flex items-center justify-center w-full bg-cover bg-center px-6 py-36"
          style={{ backgroundImage: `url(${Banner})` }}
        >


          <div className="bg-black/50 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg">
            <p className="text-white text-2xl md:text-3xl font-semibold text-center tracking-wide">
              {t("Teatrum.Home.HeroText1")}{" "}
              <span className="text-red-800">
                {t("Teatrum.Home.HeroText2")}
              </span>
            </p>
          </div>


        </div>

        <Search events={events} setEventsState={setEventsState} />
        {eventsState.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {eventsState.map((event) => (
              <EventBox key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-24">
            <p className="text-lg font-semibold">
              {t("Teatrum.Home.EmptyEvents")}
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
