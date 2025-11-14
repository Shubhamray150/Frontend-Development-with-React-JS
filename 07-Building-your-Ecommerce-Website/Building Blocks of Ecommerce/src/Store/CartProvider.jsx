import React, { useEffect, useState } from "react";
import cartContext from "./cartContext";

const API_URL = "https://crudcrud.com/api/b01ad9272a6843d588b68ea9829316ab";

const CartProvider = (props) => {
  const [item, setItem] = useState([]);
  const [tempUserId, setTempUserId] = useState(null);

  useEffect(() => {
    let storageEmail = JSON.parse(localStorage.getItem("email"));
    if (!storageEmail) return;
    storageEmail = storageEmail.replace(/[@.]/g, "");

    fetch(`${API_URL}/cart${storageEmail}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setTempUserId(data[0]._id);
          setItem(data[0].items);
          console.log(data[0]._id);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addItemHandler = (data) => {
    console.log(data);

    let storageEmail = JSON.parse(localStorage.getItem("email"));
    if (!storageEmail) return;

    storageEmail = storageEmail.replace(/[@.]/g, "");

    setItem((prevState) => {
      const existingItem = prevState.find((i) => i.title === data.title);
      let updatedData;

      if (existingItem) {
        updatedData = prevState.map((i) =>
          i.title === data.title ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        updatedData = [...prevState, data];
      }
      console.log(tempUserId);

      if (tempUserId) {
        fetch(`${API_URL}/cart${storageEmail}/${tempUserId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: updatedData }),
        })
          .then((res) => res.json?.() ?? null)
          .then((data) => console.log("Updated:", data))
          .catch((error) => console.log(error));
      } else {
        fetch(`${API_URL}/cart${storageEmail}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: updatedData }),
        })
          .then((res) => res.json())
          .then((data) => {
            setTempUserId(data[0]._id);

            console.log("Created:", data);
          })
          .catch((error) => console.log(error));
      }

      return updatedData;
    });
  };

  const cartCtx = {
    id: tempUserId,
    cartItem: item,
    addItem: addItemHandler,
  };

  return (
    <cartContext.Provider value={cartCtx}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
