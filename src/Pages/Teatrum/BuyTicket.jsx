import { useEffect, useState, forwardRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NavBar from "../../components/Teatrum/NavBar";
import { Footer } from "../../components/Teatrum/Footer";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FinishedTask } from "../../components/FinishedTask";

const Input = forwardRef(
  ({ id, type = "text", placeholder, errors, ...props }, ref) => (
    <input
      id={id}
      ref={ref}
      type={type}
      className={`mt-1 border border-gray-400 w-full rounded block p-2${
        !!errors ? " border-2 border-red-500" : ""
      }`}
      placeholder={placeholder}
      {...props}
    />
  ),
);

const FieldError = ({ message }) => (
  <p className="text-red-600 my-1">{message}</p>
);

function BuyTicket() {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [showAutocompleteCard, setShowAutocompleteCard] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const { t } = useTranslation();

  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setConfirmed(true);
  };

  const autocompleteCard = () => {
    setShowAutocompleteCard(false);
    setValue("x-number", "5490 4234 4899 4324");
    setValue("x-name", getValues("fullName") || "Miriam Flores");
    setValue("x-expiry", "12/28");
    setValue("x-code", "322");
  };

  useEffect(() => {
    if (!state) {
      navigate(`/teatrum/event/${id}`);
    }
  }, [state, navigate]);

  if (!state) return null;

  const { event, selectedLocation, selectedAmount, total } = state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar />

      <div className="flex flex-col sm:flex-row p-5 gap-2">
        <div className="sm:hidden flex flex-col bg-white text-gray-800 rounded-xl shadow-lg border border-gray-200 p-6">
          {/* Encabezado */}
          <div className="border-b border-gray-300 pb-3 mb-4">
            <h1 className="text-2xl font-bold">{event.title}</h1>
            <p className="text-sm text-gray-500">{event.date}</p>
            <p className="text-sm font-medium mt-1">Teatrum</p>
          </div>

          {/* Detalle de entradas */}
          <div className="bg-gray-50 rounded-lg p-4 text-center mb-4">
            <p className="text-lg font-semibold">
              {selectedAmount} {t("Teatrum.Buy.Tickets")}{" "}
              {t(`Teatrum.Buy.${selectedLocation}`)}
            </p>
          </div>

          {/* Resumen de costos */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>{t("Teatrum.Buy.TicketsPrice")}</span>
              <span>${total}</span>
            </div>
            <div className="flex justify-between">
              <span>{t("Teatrum.Buy.ServiceCharge")}</span>
              <span>${Math.floor(total * 0.15)}</span>
            </div>

            <div className="border-t border-gray-300 pt-3 mt-3 flex justify-between items-center">
              <h2 className="text-lg font-bold">Total</h2>
              <h2 className="text-xl font-bold text-red-700">
                ${total + Math.floor(total * 0.15)}
              </h2>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col flex-1 px-5 sm:px-10 lg:px-40 gap-5 sm:items-center"
        >
          <div className="shadow border border-gray-300 p-6 rounded sm:w-full ">
            <div className="">
              <div className="my-4">
                <label htmlFor="fullName">{t("Roomio.Summary.Name")}</label>
                <Input
                  id="fullName"
                  placeholder="Andrea Paz"
                  {...register("fullName", { required: true })}
                  errors={errors.fullName}
                />
              </div>

              <div className="my-4">
                <label htmlFor="email">E-mail</label>
                <Input
                  id="email"
                  placeholder="andrea.paz@mail.com"
                  {...register("email", { required: true })}
                  errors={errors.email}
                />
                {errors.email && (
                  <FieldError message={"Ingrese un email válido"} />
                )}
              </div>
            </div>
          </div>
          <div className="shadow border border-gray-300 p-6 rounded sm:w-full">
            <div className="flex my-4">
              <div className=" mr-8 relative">
                <p
                  dangerouslySetInnerHTML={{
                    __html: t("Rental.Review.Payment.Card.Number"),
                  }}
                ></p>
                <Input
                  type="text"
                  placeholder="XXXX XXXX XXXX XXXX"
                  onFocus={() => setShowAutocompleteCard(true)}
                  onBlur={() => setShowAutocompleteCard(false)}
                  {...register("x-number", { required: true })}
                  errors={errors["x-number"]}
                />
                {showAutocompleteCard && (
                  <div id="autocompleteCard" onClick={autocompleteCard}>
                    <h6 className="font-medium text-base">
                      Autocomplete Credit Card
                    </h6>
                    <p>**** **** **** 4324 VISA</p>
                  </div>
                )}
              </div>
              <div className="">
                <p
                  dangerouslySetInnerHTML={{
                    __html: t("Rental.Review.Payment.Card.Holder"),
                  }}
                ></p>
                <Input
                  type="text"
                  placeholder="Andrea Paz"
                  {...register("x-name", { required: true })}
                  errors={errors["x-name"]}
                />
              </div>
            </div>
            <div className="flex my-4">
              <div className="mr-8">
                <p
                  dangerouslySetInnerHTML={{
                    __html: `${t("Rental.Review.Payment.Card.Month")}/${t(
                      "Rental.Review.Payment.Card.Year",
                    )}`,
                  }}
                ></p>
                <Input
                  placeholder="MM/AA"
                  {...register("x-expiry", { required: true })}
                  errors={errors["x-expiry"]}
                />
              </div>
              <div className="">
                <p
                  dangerouslySetInnerHTML={{
                    __html: t("Rental.Review.Payment.Card.CVV"),
                  }}
                ></p>
                <Input
                  type="password"
                  placeholder="***"
                  {...register("x-code", { required: true })}
                  errors={errors["x-code"]}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-black hover:bg-black/90 text-white p-1.5 px-4 rounded font-semibold text-lg"
          >
            {t("Teatrum.Buy.Checkout")}
          </button>
        </form>

        <div className="hidden sm:flex flex-col bg-white text-gray-800 rounded-xl shadow-lg border border-gray-200 p-6 w-96 mb-10">
          {/* Encabezado */}
          <div className="border-b border-gray-300 pb-3 mb-4">
            <h1 className="text-2xl font-bold">{event.title}</h1>
            <p className="text-sm text-gray-500">{event.date}</p>
            <p className="text-sm font-medium mt-1">Teatrum</p>
          </div>

          {/* Detalle de entradas */}
          <div className="bg-gray-50 rounded-lg p-4 text-center mb-4">
            <p className="text-lg font-semibold">
              {selectedAmount} {t("Teatrum.Buy.Tickets")}{" "}
              {t(`Teatrum.Buy.${selectedLocation}`)}
            </p>
          </div>

          {/* Resumen de costos */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>{t("Teatrum.Buy.TicketsPrice")}</span>
              <span>${total}</span>
            </div>
            <div className="flex justify-between">
              <span>{t("Teatrum.Buy.ServiceCharge")}</span>
              <span>${Math.floor(total * 0.15)}</span>
            </div>

            <div className="border-t border-gray-300 pt-3 mt-3 flex justify-between items-center text-2xl">
              <h2 className="font-bold">Total</h2>
              <h2 className="font-bold">${total + Math.floor(total * 0.15)}</h2>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FinishedTask
        show={confirmed}
        data={{
          event: event.title,
          tickets: selectedAmount,
          price: total,
          taxes: Math.floor(total * 0.15),
          total: total + Math.floor(total * 0.15),
        }}
      />
    </div>
  );
}

export default BuyTicket;
