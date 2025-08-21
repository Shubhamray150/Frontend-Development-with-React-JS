import React, { useEffect, useState } from "react";
import ShoeContext from "./shoeContext";

const Api_Url = "https://crudcrud.com/api/797f81aec7f741fcb2a984710030597c";

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

    if (existingItem) {
      const response = await fetch(`${Api_Url}/products/${existingItem._id}`, {
        method: "PUT",
        
      });
    }

    const response = await fetch(`${Api_Url}/products`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    });
    const savedData = await response.json();

    setShoeItem((prevData) => [...prevData, savedData]);
    console.log(shoeItem);
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
