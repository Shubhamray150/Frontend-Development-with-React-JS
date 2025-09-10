import React, { Children, useEffect, useState } from "react";
import CartContext from "./CartContext";

const Api_Url = "https://crudcrud.com/api/e566e3974b4c4bbfabf96470c217e445";

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${Api_Url}/cart`);
      const data = await response.json();
      setCartItem(data);
    };
    fetchData();
  }, []);

  const addCartItemHandler = async (item) => {
    const response = await fetch(`${Api_Url}/cart`);
    const cartData = await response.json();
    const existingItem = cartItem.find((shoe) => shoe.name === item.name);

    if (existingItem) {
      const updateItem = {
        name: existingItem.name,
        price: existingItem.price,
        desc: existingItem.desc,
        large: existingItem.large + item.large,
        medium: existingItem.medium + item.medium,
        small: existingItem.small + item.small,
      };

      const response = await fetch(`${Api_Url}/cart/${existingItem._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateItem),
      });

      if (!response.ok) throw new Error("PUT request failed");

      setCartItem((prev) => {
        return prev.map((item) => {
          if (item._id === existingItem._id) {
            return { ...updateItem, _id: item._id };
          } else {
            return item;
          }
        });
      });
    } else {
      const response = await fetch(`${Api_Url}/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
      const savedData = await response.json();
      setCartItem((prev) => [...prev, savedData]);
    }
  };

  const cartCtx = {
    cartItem: cartItem,
    addCartItem: addCartItemHandler,
  };
  return (
    <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
