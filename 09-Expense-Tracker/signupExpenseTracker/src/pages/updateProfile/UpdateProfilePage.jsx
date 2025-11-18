import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UpdateProfileForm from "./UpdateProfileForm";

const UpdateProfilePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="px-2 w-full bg-[var(--bg)] text-[var(--text)] h-full">
        <div className="flex items-center justify-between w-full p-4 mb-6 bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-900 dark:to-purple-800 border-b border-[var(--border)] rounded-md shadow-sm dark:shadow-md">
          <h1 className="text-lg font-medium italic text-[var(--text)]">
            Winners never quit, Quitters never win.
          </h1>

          <div className="italic bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-4 py-2 rounded-lg text-sm shadow-sm">
            Your profile is 64% complete. Complete it to improve visibility.
            <Link
              to="/update"
              className="text-blue-700 dark:text-blue-400 underline ml-1 hover:text-blue-900 dark:hover:text-blue-300"
            >
              Complete now
            </Link>
          </div>
        </div>

        <section className="ml-auto mr-12 w-full bg-[var(--card)] p-8 rounded-xl shadow-md border border-[var(--border)] dark:shadow-lg">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-[var(--text)]">
              Contact Details
            </h1>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="px-4 py-1 border border-red-400 dark:border-red-500 text-red-500 dark:text-red-400 font-semibold rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition"
            >
              Cancel
            </button>
          </div>

          <UpdateProfileForm />
        </section>
      </section>
    </>
  );
};

export default UpdateProfilePage;
