import { useState, forwardRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/Petspace/Navbar";
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

export function BuyProduct() {
  const [products, setProducts] = useState(() => {
    try {
      const raw = localStorage.getItem("cartItems");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [showAutocompleteCard, setShowAutocompleteCard] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  
  const addsProducts = () => {
    try {
      const raw = localStorage.getItem("addsProducts");
      return raw ?? null;
    } catch {
      return null;
    }
  };

  const { t } = useTranslation();

  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (products.length == 0) {
      alert("Compra al menos 1 producto");
      return;
    }
    localStorage.removeItem("cartItems");
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
       
        <div className="w-full lg:w-1/3 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            {t("PetSpace.BuyProduct.OrderSummary")}
          </h2>

          <div className="flex flex-col gap-5">
            {products.map((p) => {
              const subtotal =
                p.product.priceKg * p.product.amountKg * p.amount;

              return (
                <div
                  key={p.product.id}
                  className="flex justify-between items-center bg-gray-200/50 p-4 rounded-xl"
                >
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-700">
                      {p.product.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {p.product.amountKg}kg × {p.amount}
                    </span>
                  </div>

                  <span className="font-semibold text-gray-800">
                    ${subtotal.toLocaleString()}
                  </span>
                </div>
              );
            })}

            <div className="border-t pt-6 mt-2">
              <div className="flex justify-between items-center text-2xl font-bold text-gray-900">
                <span>Total</span>
                <span>
                  $
                  {products
                    .reduce(
                      (acc, item) =>
                        acc +
                        item.product.priceKg *
                          item.product.amountKg *
                          item.amount,
                      0,
                    )
                    .toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
        
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
                      "Rental.Review.Payment.Card.Year",
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

      </div>
      <FinishedTask
        show={confirmed}
        data={{
          addsProducts: addsProducts(),
          total: products
            .reduce(
              (acc, item) =>
                acc +
                item.product.priceKg * item.product.amountKg * item.amount,
              0,
            )
            .toLocaleString(),
        }}
      />
    </div>
  );
}
