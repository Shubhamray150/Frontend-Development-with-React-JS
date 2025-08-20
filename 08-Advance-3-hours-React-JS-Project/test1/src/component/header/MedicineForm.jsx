import React, { useContext, useState } from "react";
import { useRef } from "react";
import medicineContext from "../../store/medicine/medicineContext";

const MedicineForm = () => {
  const medicineCtx = useContext(medicineContext);

  const [input, setInput] = useState({
    name: "",
    desc: "",
    price: "",
    quantity: "",
  });
  const inputChangeHanlder = (event) => {
    const { name, value } = event.target;
    setInput((prevData) => {
      return { ...prevData, [name]: value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    medicineCtx.addMedicineItem(input);
    setInput({
      name: "",
      desc: "",
      price: "",
      quantity: "",
    });
  };
  return (
    <div>
      <form onSubmit={submitHandler} className="flex m-4 gap-4">
        <div>
          <label htmlFor="name">Medicine Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={input.name}
            onChange={inputChangeHanlder}
            className="border border-gray-500 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            id="desc"
            value={input.desc}
            onChange={inputChangeHanlder}
            name="desc"
            className="border border-gray-500 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            value={input.price}
            onChange={inputChangeHanlder}
            id="price"
            className="border border-gray-500 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            value={input.quantity}
            name="quantity"
            onChange={inputChangeHanlder}
            id="quantity"
            className="border border-gray-500 rounded-md"
          />
        </div>
        <div>
          <button className="border border-black">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default MedicineForm;
