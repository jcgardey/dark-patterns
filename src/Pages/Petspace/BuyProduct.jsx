import { useState, forwardRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "./Home";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/Petspace/Navbar";
import { FinishedTask } from "../../components/FinishedTask";

//ToDo: Limpiar localStorage cartItems al finalizar compra
//ToDo: Cambiar logica de recibir solo un producto, ahora recibo varios, usar LOCALSTORAGE

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

export function BuyProduct() {
  const product = products.find((p) => p.id === 1);
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
    localStorage.removeItem("cartItems")
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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 flex flex-col lg:flex-row gap-10 mt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col flex-1 px-6 sm:px-10 lg:px-20 gap-6 sm:items-center bg-white p-8 rounded-3xl shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            {t("PetSpace.BuyProduct.Title")}
          </h2>

          <div className="shadow border border-gray-300 p-6 rounded-2xl w-full">
            <div className="my-4">
              <label
                htmlFor="fullName"
                className="block text-gray-700 font-medium mb-1"
              >
                {t("Roomio.Summary.Name")}
              </label>
              <Input
                id="fullName"
                placeholder="Andrea Paz"
                {...register("fullName", { required: true })}
                errors={errors.fullName}
              />
              {errors.fullName && <FieldError message={"Ingrese su nombre"} />}
            </div>

            <div className="my-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                E-mail
              </label>
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

          <div className="shadow border border-gray-300 p-6 rounded-2xl w-full">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2 relative">
                <p
                  className="text-gray-700 font-medium mb-1"
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
                  <div
                    id="autocompleteCard"
                    onClick={autocompleteCard}
                    className="absolute bg-white p-3 rounded-xl shadow-lg mt-1 cursor-pointer w-full z-50 hover:bg-gray-50 transition-colors"
                  >
                    <h6 className="font-medium text-base">
                      Autocomplete Credit Card
                    </h6>
                    <p>**** **** **** 4324 VISA</p>
                  </div>
                )}
                {errors["x-number"] && (
                  <FieldError message={"Ingrese el número de tarjeta"} />
                )}
              </div>

              <div className="w-full md:w-1/2">
                <p
                  className="text-gray-700 font-medium mb-1"
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
                {errors["x-name"] && (
                  <FieldError message={"Ingrese el titular"} />
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mt-4">
              <div className="w-1/2 md:w-1/3">
                <p
                  className="text-gray-700 font-medium mb-1"
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
                {errors["x-expiry"] && (
                  <FieldError message={"Ingrese la fecha de expiración"} />
                )}
              </div>

              <div className="w-1/2 md:w-1/3">
                <p
                  className="text-gray-700 font-medium mb-1"
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
                {errors["x-code"] && <FieldError message={"Ingrese el CVV"} />}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all mt-4"
          >
            {t("PetSpace.BuyProduct.ConfirmPurchase")}
          </button>
        </form>

        <div className="w-full lg:w-1/3 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{t("PetSpace.BuyProduct.OrderSummary")}</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <span>{product.name}</span>
              <span>${(product.priceKg * product.amountKg).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>{t("PetSpace.BuyProduct.Amount")}</span>
              <span>{product.amountKg} kg</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${(product.priceKg * product.amountKg).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      <FinishedTask show={confirmed} />
    </div>
  );
}
