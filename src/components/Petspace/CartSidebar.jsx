import React, { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

function CartSidebar({ open, onClose, items, deleteItem, editItem }) {
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const darkEnabled = localStorage.getItem("dark") == "true" ?? false;

  const handleBuyNow = () => {
    if (darkEnabled && totalPrice < 30) setShowModal(true);
    else goToCheckout();
  };

  const goToCheckout = () => {
    navigate(`/petspace/buy`);
  };

  useEffect(() => {
    setTotalPrice(
      items.reduce(
        (acc, item) =>
          acc + item.product.priceKg * item.product.amountKg * item.amount,
        0,
      ),
    );
  }, [items]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <>
      <div
        className={[
          "fixed inset-0 z-40 bg-black/40 transition-opacity",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={onClose}
      />

      <aside
        className={[
          "fixed top-0 right-0 z-50 h-full w-[340px] sm:w-[420px] bg-white shadow-2xl px-2",
          "transition-transform duration-200 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Carrito"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
          <h3 className="text-base font-semibold text-gray-900">Carrito</h3>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        {items?.length == 0 ? (
          <div className="p-4 text-sm text-gray-500">
            El carrito de compras está vacío.
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <div>
              {items.map((i) => (
                <SidebarItem
                  key={i.product.id}
                  item={i}
                  deleteItem={deleteItem}
                  editItem={editItem}
                />
              ))}
            </div>
            <hr />
            <div className="p-2 flex items-center justify-between text-2xl font-bold text-blue-600">
              <p>Total:</p>
              <p>${totalPrice}</p>
            </div>

            <button
              onClick={handleBuyNow}
              className="bg-blue-600 hover:bg-blue-700 text-white 
               mx-2 py-3 rounded-2xl text-lg font-medium "
            >
              Comprar
            </button>
          </div>
        )}
      </aside>

      {showModal && <Modal show={setShowModal} goToCheckout={goToCheckout} />}
    </>
  );
}

export default CartSidebar;
