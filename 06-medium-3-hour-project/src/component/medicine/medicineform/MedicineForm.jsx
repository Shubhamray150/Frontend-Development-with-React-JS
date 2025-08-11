import React, { use, useContext, useState } from "react";
import "./MedicineForm.css";
import Card from "../../UI/Card";
import medicineContext from "../../../Store/medicinecontext";

const MedicineForm = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
  });
  const medicineCtx = useContext(medicineContext);

  const nameChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, name: event.target.value };
    });
  };
  const descriptionChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, description: event.target.value };
    });
  };
  const priceChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, price: +event.target.value };
    });
  };
  const quantityChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, quantity: +event.target.value };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    if (
      userInput.name.trim() == "" ||
      userInput.description == "" ||
      userInput.price == "" ||
      userInput.quantity == ""
    ) {
      return;
    }

    medicineCtx.addItem({ ...userInput, id: Math.random() });

    setUserInput({
      name: "",
      description: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <Card className="formcard">
      <form onSubmit={formSubmitHandler}>
        <div className="name">
          <label htmlFor="name">Medicine Name</label>
          <input
            type="text"
            id="name"
            value={userInput.name}
            onChange={nameChangeHandler}
          />
        </div>
        <div className="description">
          <label htmlFor="description">Medicine Description</label>
          <input
            type="text"
            id="description"
            value={userInput.description}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className="price">
          <label htmlFor="price">Medicine Price</label>
          <input
            type="number"
            id="price"
            value={userInput.price}
            onChange={priceChangeHandler}
          />
        </div>
        <div className="quantity">
          <label htmlFor="quantity">Medicine Quantity</label>
          <input
            type="number"
            id="quantity"
            value={userInput.quantity}
            onChange={quantityChangeHandler}
          />
        </div>
        <div className="action">
          <button className="addProduct">Add Product</button>
        </div>
      </form>
    </Card>
  );
};

export default MedicineForm;
