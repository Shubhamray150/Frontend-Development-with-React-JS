// Write your code at relevant places in the code below:

import React from "react";
import AddUser from "./component/Users/AddUser";
import UsersList from "./component/Users/UserList";

const users = [];

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={users} />
    </div>
  );
}

export default App;
