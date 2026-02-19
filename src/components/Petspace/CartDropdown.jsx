function CartDropdown({ open, item, amount, onClose }) {
  if (!open) return null;

  return (
    <div
      className="absolute right-0 top-12 w-72 
                    bg-white border border-gray-200 
                    rounded-xl shadow-lg p-4 z-50 
                    animate-[fadeIn_150ms_ease-out]"
    >
      <div className="flex justify-between items-start gap-3">
        <div className="flex gap-3">
          {item.image && (
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 object-cover rounded-lg"
            />
          )}

          <div>
            <p className="text-sm font-semibold text-gray-900">
              Agregado al carrito
            </p>
            <p className="text-sm text-gray-600 truncate">{item.name}</p>
            <p className="text-sm font-medium text-gray-900">${item.priceKg * item.amountKg}</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-700 transition"
        >
          ✕
        </button>
      </div>

      <button
        className="mt-4 w-full bg-black text-white 
                   py-2 rounded-lg text-sm 
                   hover:bg-gray-800 transition"
      >
        Ver carrito
      </button>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default CartDropdown;
