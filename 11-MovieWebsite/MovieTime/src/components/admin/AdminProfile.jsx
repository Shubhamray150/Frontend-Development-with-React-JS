import React from "react";

const AdminProfile = () => {
  return (
    <div className="w-full bg-white text-black ">
      <div className="flex flex-col  text-center my-2 border border-gray-400 bg-gray-50 mx-5 rounded-xl py-4">
        <img
          className="w-20 mx-auto"
          src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
          alt=""
        />
        <span>Shubham Ray</span>
        <span>Shubh@gmail.com</span>
        <span>Role : admin</span>
      </div>
    </div>
  );
};

export default AdminProfile;
