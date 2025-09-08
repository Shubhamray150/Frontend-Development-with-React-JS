import React, { useEffect, useState } from "react";
import ShoeContext from "./shoeContext";

const Api_Url = "https://crudcrud.com/api/82473c1b14dc45588b8c4105c7895efe";

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
        name: existingItem.name,
        price: existingItem.price,
        desc: existingItem.desc,
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

      setShoeItem((prev) => {
        return prev.map((item) => {
          if (item._id === existingItem._id) {
            return { ...item, ...updatedItem, _id: existingItem._id };
          } else {
            return item;
          }
        });
      });
    } else {
      const response = await fetch(`${Api_Url}/products`, {
        method: "POST",
        body: JSON.stringify(item),
        headers: { "Content-Type": "application/json" },
      });
      const savedData = await response.json();

      setShoeItem((prevData) => [...prevData, savedData]);
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
