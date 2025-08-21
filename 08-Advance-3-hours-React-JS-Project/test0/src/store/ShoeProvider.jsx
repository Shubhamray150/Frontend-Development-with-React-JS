import React, { useEffect, useState } from "react";
import ShoeContext from "./shoeContext";

const Api_Url = "https://crudcrud.com/api/ba457706dcb04642bc872cc293caddc0";

const ShoeProvider = ({ children }) => {
  const [shoeItem, setShoeItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${Api_Url}/products`);
      const fetchedData = await response.json();
      setShoeItem(fetchedData);
    };
    fetchData();
  }, []);

  const addShoeItemHandler = async (item) => {
    const existingItem = shoeItem.find((shoe) => shoe.name == item.name);
    console.log(existingItem);

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        large: existingItem.large + item.large,
        medium: existingItem.medium + item.medium,
        small: existingItem.small + item.small,
      };

      const response = await fetch(`${Api_Url}/products/${existingItem._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedItem),
      });

      if (!response.ok) throw new Error("PUT request failed");

      const data = await response.json();
      console.log(" exist", data);
    } else {
      const response = await fetch(`${Api_Url}/products`, {
        method: "POST",
        body: JSON.stringify(item),
        headers: { "Content-Type": "application/json" },
      });
      const savedData = await response.json();

      setShoeItem((prevData) => [...prevData, savedData]);
      console.log(shoeItem);
    }
  };

  const removeShoeItemHandler = (item) => {
    return setShoeItem((prevData) => {
      return [...prevData];
    });
  };

  const shoeCtx = {
    shoeItem: shoeItem,
    addShoeItem: addShoeItemHandler,
    removeShoeItem: removeShoeItemHandler,
  };
  return (
    <ShoeContext.Provider value={shoeCtx}>{children}</ShoeContext.Provider>
  );
};

export default ShoeProvider;
