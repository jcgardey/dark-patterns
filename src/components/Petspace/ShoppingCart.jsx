import { useEffect, useState } from "react";
import CartDropdown from "./CartDropdown";
import CartSidebar from "./CartSidebar";

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
  const [openSidebar, setOpenSidebar] = useState(false);

  const deleteItem = (item) => {
    setItems(items.filter((i) => i.product.id !== item.product.id));
  };

  const editItem = (item, add) => {
    setItems(
      items.map((i) =>
        i.product.id == item.product.id
          ? add
            ? {...i, amount: i.amount + 1}
            : {...i, amount: i.amount - 1}
          : i,
      ),
    );
  };

  useEffect(() => {
    if (!newItem?.item) return;
    setOpenDropdown(true);
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === newItem.item.product.id,
      );

      if (existing) {
        return prev.map((item) =>
          item.product.id === newItem.item.product.id
            ? { ...item, amount: item.amount + newItem.item.amount }
            : item,
        );
      }

      return [...prev, newItem.item];
    });
  }, [newItem]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (openSidebar) setOpenDropdown(false);
  }, [openSidebar]);

  return (
    <div className="flex gap-4 items-center">
      <div
        className="relative cursor-pointer"
        onClick={() => setOpenSidebar(true)}
      >
        <i className="fa fa-shopping-cart text-gray-600 text-xl"></i>
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
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
        openSidebar={() => setOpenSidebar(true)}
        totalItems={items}
      />

      <CartSidebar
        open={openSidebar}
        onClose={() => setOpenSidebar(false)}
        items={items}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    </div>
  );
}

export default ShoppingCart;
