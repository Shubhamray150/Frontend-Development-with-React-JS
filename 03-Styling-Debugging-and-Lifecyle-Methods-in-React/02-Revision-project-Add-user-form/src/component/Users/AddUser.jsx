import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";

const AddUser = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const usernameChangeHandler = (event) => {
    setUsernameInput(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAgeInput(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (usernameInput.trim().length == 0 || ageInput.trim().length == 0) {
      return;
    }
    if (ageInput <= 0) {
      return;
    }
    console.log(usernameInput, ageInput);
    setUsernameInput("");
    setAgeInput("");
  };
  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={usernameInput}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          value={ageInput}
          type="number"
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
