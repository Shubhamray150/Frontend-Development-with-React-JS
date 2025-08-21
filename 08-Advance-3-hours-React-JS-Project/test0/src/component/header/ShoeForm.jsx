import React, { useContext, useState } from "react";
import shoeContext from "../../store/shoeContext";

const ShoeForm = () => {
  const shoeCtx = useContext(shoeContext);
  const [userInput, setUserInput] = useState({
    name: "",
    desc: "",
    price: "",
    large: "",
    medium: "",
    small: "",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;

    setUserInput((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      userInput.name.trim() == "" ||
      userInput.desc.trim() == "" ||
      userInput.price.trim() == ""
    ) {
      return;
    }
    shoeCtx.addShoeItem(userInput);
    setUserInput({
      name: "",
      desc: "",
      price: "",
      large: "",
      medium: "",
      small: "",
    });
  };
  return (
    <form
      onSubmit={submitHandler}
      className="mx-auto space-y-4 p-4 border border-gray-600  mt-4 rounded-md w-[80%] max-w-xl"
    >
      <div className="flex flex-col mx-auto">
        <label htmlFor="name">Shoe Name</label>
        <input
          onChange={inputChangeHandler}
          type="text"
          name="name"
          id="name"
          value={userInput.name}
          className="border border-gray-400 rounded px-2 py-1  "
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="desc">Description</label>
        <input
          onChange={inputChangeHandler}
          type="text"
          name="desc"
          value={userInput.desc}
          id="desc"
          className="border border-gray-400 rounded px-2 py-1  "
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="price">Price</label>
        <input
          onChange={inputChangeHandler}
          value={userInput.price}
          type="number"
          name="price"
          id="price"
          className="border border-gray-400 rounded px-2 py-1 "
        />
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col">
          <label htmlFor="large">Large</label>
          <input
            onChange={inputChangeHandler}
            type="number"
            value={userInput.large}
            name="large"
            id="large"
            className="border border-gray-400 rounded px-2 py-1 w-24 "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="medium">Medium</label>
          <input
            onChange={inputChangeHandler}
            type="number"
            value={userInput.medium}
            name="medium"
            id="medium"
            className="border border-gray-400 rounded px-2 py-1 w-24 "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="small">Small</label>
          <input
            onChange={inputChangeHandler}
            type="number"
            value={userInput.small}
            id="small"
            name="small"
            className="border border-gray-400 rounded px-2 py-1 w-24 "
          />
        </div>
      </div>
      <div>
        <button className="bg-red-500 text-white rounded px-4 py-2">
          Add Product
        </button>
      </div>
    </form>
  );
};

export default ShoeForm;
