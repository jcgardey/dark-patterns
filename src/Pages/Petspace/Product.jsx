import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "./Home";
import Navbar from "../../components/Petspace/Navbar";
import { Footer } from "../../components/Petspace/Footer";
import Modal from "../../components/Petspace/Modal";
import { useTranslation } from "react-i18next";

export function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [newItem, setNewItem] = useState({ new: false, item: null });
  const [amount, setAmount] = useState(1);
  const darkEnabled = localStorage.getItem("dark") == "true" ?? false;

  if (!product) return <div>{t("PetSpace.Product.NotFound")}</div>;

  const totalPrice = product.priceKg * product.amountKg;

  const handleBuyNow = () => {
    // pasar a carrito
    if (darkEnabled) setShowModal(true);
    else goToCheckout();
  };

  const goToCheckout = () => {
    navigate(`/petspace/buy/${product.id}`);
  };

  const addToCart = () => {
    setNewItem({ new: !newItem.new, item: { product, amount } });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar newItem={newItem} />

      <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-10 mt-3 mb-10 bg-white rounded-2xl shadow-lg">
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Detalles del producto */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex flex-col items-start gap-2">
              <h1 className="text-4xl font-bold text-gray-800">
                {product.name}
              </h1>
              <div className="flex gap-1">
                <i className="fa-solid fa-star text-yellow-400"></i>
                <i className="fa-solid fa-star text-yellow-400"></i>
                <i className="fa-solid fa-star text-yellow-400"></i>
                <i className="fa-solid fa-star text-yellow-400"></i>
                {product.halfStar ? (
                  <i className="fa-solid fa-star-half-stroke text-yellow-400"></i>
                ) : (
                  <i className="fa-solid fa-star text-yellow-400"></i>
                )}
              </div>
            </div>

            <p className="text-gray-600 text-lg">
              {t("PetSpace.Product.PriceKg")}:{" "}
              <span className="font-semibold">${product.priceKg}</span>
            </p>
            <p className="text-gray-600 text-lg">
              {t("PetSpace.Product.Amount")}:{" "}
              <span className="font-semibold">{product.amountKg} kg</span>
            </p>
            <p className="text-xl font-semibold text-blue-600">
              {t("PetSpace.Product.TotalPrice")}: ${totalPrice}
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              {t(`PetSpace.Product.${product.id}.Description`)}
            </p>
          </div>

          <div className="flex gap-3 mb-3">
            {/* Botonera cantidad */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => amount > 1 && setAmount(amount-1)}
                className="w-10 h-10 flex items-center justify-center 
                 rounded-lg border border-gray-300 
                 text-lg font-semibold 
                 hover:bg-gray-100 transition"
              >
                −
              </button>

              <span className="w-10 text-center text-lg font-medium">{amount}</span>

              <button
                onClick={() => amount < 15 && setAmount(amount+1)}
                className="w-10 h-10 flex items-center justify-center 
                 rounded-lg border border-gray-300 
                 text-lg font-semibold 
                 hover:bg-gray-100 transition"
              >
                +
              </button>
            </div>

            <button
              onClick={addToCart}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white 
               px-6 py-3 rounded-xl text-lg font-medium 
               transition-all"
            >
              {t("PetSpace.Product.AddToCart")}
            </button>
          </div>
        </div>
      </div>

      {showModal && <Modal show={setShowModal} goToCheckout={goToCheckout} />}

      <Footer />
    </div>
  );
}
