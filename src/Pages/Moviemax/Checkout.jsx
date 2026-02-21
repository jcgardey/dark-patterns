import { useState, forwardRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../../components/Moviemax/Footer";
import { plans } from "./plans";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
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
  )
);

const FieldError = ({ message }) => (
  <p className="text-red-600 my-1">{message}</p>
);

function Checkout() {
  const { id } = useParams();
  const plan = plans.find((p) => p.title == id);
  const navigate= useNavigate()

  const [showAutocompleteCard, setShowAutocompleteCard] = useState(false);
  const [confirmed, setConfirmed]= useState(false)

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
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="w-full">
        <div className="relative z-10 flex w-full justify-between items-center px-8 py-6">
          <h1
            onClick={() => navigate("/moviemax")}
            className="text-4xl font-bold text-purple-600 cursor-pointer"
          >
            MovieMax
          </h1>

          <button className="hover:bg-gray-300 px-3 py-1 rounded font-medium cursor-not-allowed">
            {t(`Moviemax.Login`)}
          </button>
        </div>
        <hr />
      </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col flex-1 px-10 sm:px-20 lg:px-40 gap-5 sm:items-center"
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
              <div className="w-1/3 mr-8 relative">
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
              <div className="w-1/3">
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
              <div className="w-1/6 mr-8">
                <p
                  dangerouslySetInnerHTML={{
                    __html: `${t("Rental.Review.Payment.Card.Month")}/${t(
                      "Rental.Review.Payment.Card.Year"
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

          <div className="bg-gray-200 p-3 rounded w-full text-lg">
            <p className="font-medium">${plan.price}</p>
            <p className="font-medium text-gray-500">{t(`Moviemax.Plan.${plan.id}.Title`)}</p>
          </div>

          <button
            type="submit"
            className="bg-purple-800 hover:bg-purple-900 text-white p-1.5 px-4 rounded font-semibold text-lg"
          >
            {t(`Moviemax.Finish`)}
          </button>
        </form>

      <Footer />
      <FinishedTask show={confirmed} data={{plan: plan.title, price: plan.price}}/>
    </div>
  );
}

export default Checkout;
