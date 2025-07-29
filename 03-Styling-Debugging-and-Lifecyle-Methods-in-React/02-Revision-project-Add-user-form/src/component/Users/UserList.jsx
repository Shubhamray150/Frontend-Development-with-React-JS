// Write your code at relevant places in the code below:

import React from "react";
import Card from "../UI/Card";
import "./UserList.css";

const UsersList = (props) => {
  return (
    <Card className="users">
      <ul>
        {props.users.map((user) => {
          return (
            <li key={props.id}>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
