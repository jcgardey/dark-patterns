import React, { useEffect } from "react";
import { events } from "./events";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../components/Teatrum/NavBar";
import { Footer } from "../../components/Teatrum/Footer";
import { useTranslation } from "react-i18next";
import CommentCard from "../../components/Teatrum/CommentCard";

export const getStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <i key={`full-${i}`} className="fa-solid fa-star text-yellow-400"></i>
    );
  }
  if (hasHalf) {
    stars.push(
      <i
        key="half"
        className="fa-solid fa-star-half-stroke text-yellow-400"
      ></i>
    );
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <i key={`empty-${i}`} className="fa-regular fa-star text-yellow-400"></i>
    );
  }
  return stars;
};

function Event() {
  const { id } = useParams();
  const event = events.find((ev) => ev.id === id);
  const navigate = useNavigate();

  const { t } = useTranslation();

  useEffect(() =>{
    window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <NavBar />
      <div className="flex flex-col lg:flex-row p-3 gap-5 border border-red-800 m-5 rounded shadow">
        <div className="aspect-square flex items-center justify-center overflow-hidden rounded w-full lg:w-[500px] lg:min-w-[500px] ">
          <img
            src={event.img}
            alt={`Imagen de : ${event.title}`}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-10 justify-between items-start w-full">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold text-2xl">{event.title}</h1>
                <p className=" text-1xl">
                  {t(`Teatrum.Event.${event.id}.Description`)}
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">
                  {t("Teatrum.Event.Date")}
                </h2>
                <p className="text-lg px-0">{event.date}</p>
              </div>
            </div>

            <button
              onClick={() => navigate(`/teatrum/select-price/${event.id}`)}
              className="bg-black hover:bg-black/80 text-white p-3 px-5 rounded-lg font-semibold text-2xl"
            >
              {t("Teatrum.Event.Buy")}
            </button>
          </div>

          <div className="flex flex-col w-3/4 gap-1">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <h2 className="text-lg">{t("Teatrum.Event.Rating")}</h2>
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <p className="text-lg "><span className="text-yellow-400 font-medium text-base mr-2">{event.stars} </span>{getStars(event.stars)}</p>
                <p className="text-sm font-thin">{event.opinions} {t("Teatrum.Event.Opinions")}</p>
              </div>
            </div>
            <hr />
            <CommentCard comment={event.comments[0]} translation={t(`Teatrum.Event.${event.id}.Comment1`)}/>
            <CommentCard comment={event.comments[1]} translation={t(`Teatrum.Event.${event.id}.Comment2`)}/>
            <CommentCard comment={event.comments[2]} translation={t(`Teatrum.Event.${event.id}.Comment3`)}/>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Event;
