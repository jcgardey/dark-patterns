import { useEffect, useState } from "react";
import CartDropdown from "./CartDropdown";

function ShoppingCart({ newItem }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem("cartItems");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    if (!newItem?.item) return;
    setOpenDropdown(true);
    setItems((prev) => [...prev, newItem.item]);
    console.log("Hola nuevo item", newItem);
  }, [newItem]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items]);


  return (
    <div className="flex gap-4 items-center">
      <div className="relative cursor-pointer">
        <i className="fa fa-shopping-cart text-gray-600 text-xl"></i>
        <span
          className="absolute -top-2 -right-2 
                     bg-red-500 text-white text-xs 
                     w-5 h-5 flex items-center justify-center 
                     rounded-full"
        >
          {items.reduce((acc, item) => acc + item.amount, 0)}
        </span>
      </div>

      <span className="inline sm:hidden">
        <i className="fa-solid fa-bars"></i>
      </span>

      <CartDropdown
        open={openDropdown}
        item={newItem?.item?.product}
        amount={newItem?.item?.amount}
        onClose={() => setOpenDropdown(false)}
        totalItems={items}
      />
    </div>
  );
}

export default ShoppingCart;
