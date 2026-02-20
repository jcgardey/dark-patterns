function SidebarItem({ item, deleteItem, editItem }) {

  return (
    <div className="flex items-start gap-4 p-4 px-2">
      <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
        <img
          src={item.product.image}
          alt="Producto"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col gap-3">
        <div className="flex justify-between items-start gap-2">
          <p className="text-sm font-medium text-gray-800 leading-snug">
            {item.product.name}
          </p>

          <button
            onClick={() => deleteItem(item)}
            className="text-gray-400 hover:text-gray-700 transition"
          >
            <i className="fa-regular fa-trash-can text-sm"></i>
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-1 gap-4">
            <button
              onClick={() => item.amount > 1 && editItem(item, false)}
              className="text-blue-500 text-lg font-semibold hover:opacity-70 transition"
            >
              −
            </button>

            <span className="w-6 text-center font-medium text-gray-800">
              {item.amount}
            </span>

            <button
              onClick={() => item.amount < 15 && editItem(item, true)}
              className="text-blue-500 text-lg font-semibold hover:opacity-70 transition"
            >
              +
            </button>
          </div>
          <span className="text-lg font-semibold text-gray-700">
            ${item.product.priceKg * item.product.amountKg * item.amount}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SidebarItem;
