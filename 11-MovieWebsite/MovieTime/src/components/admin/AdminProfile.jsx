import React from "react";

const AdminProfile = () => {
  return (
    <div>
      <div className="flex flex-col text-center my-2 border border-gray-400 bg-gray-50 mx-5 rounded-xl py-4">
        <img
          className="w-20 mx-auto"
          src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
          alt=""
        />
        <span>name : shubham</span>
        <span>email : shubh@gmail.com</span>
        <span>date : jan,04 , 2014</span>
        <span>role admin</span>
      </div>
    </div>
  );
};

export default AdminProfile;
