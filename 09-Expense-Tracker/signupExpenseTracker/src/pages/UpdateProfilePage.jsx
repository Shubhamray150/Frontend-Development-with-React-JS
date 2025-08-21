import React from "react";
import { FaGithub } from "react-icons/fa";

const UpdateProfilePage = () => {
  return (
    <>
      <div className="flex w-full justify-between items-center mt-4 mb-4 p-2 border-b border-gray-400">
        <h1 className="text-base font-normal italic">
          Winners never quite,Quitter never win.
        </h1>

        <div className="italic rounded-xl px-3 bg-red-100 w-[24%] py-1 text-sm">
          Your profile is 64% complete.A complete Profile has higher chances of
          landing a job.
        </div>
      </div>
      <section>
        <h1 className="text-xl font-bold">Contact Details</h1>
        <div className="flex gap-5">
          <label htmlFor="fullname" className="flex gap-3">
            <FaGithub className="text-2xl text-black hover:text-gray-600" />
            Full Name:
          </label>
          <input type="text" id="fullname" className="border" />
        </div>
      </section>
    </>
  );
};

export default UpdateProfilePage;
