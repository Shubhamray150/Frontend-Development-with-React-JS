import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import ExpenseContext from "../store/expenseContext";

const HomePage = () => {
  const expenseCtx = useContext(ExpenseContext);
  let varification = false;

  useEffect(() => {
    if (!expenseCtx.token) return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDUlPrtzieL1-rYuqMB5AbB4njY95OiyqI",
          {
            body: JSON.stringify({ idToken: expenseCtx.token }),
            method: "POST",
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await response.json();
        if (!response.ok) {
          console.log(data.error.message);
        }

        varification = data.users[0].emailVerified;
      } catch (error) {}
    };
    fetchData();
  }, []);

  const verificationBtnHandler = async () => {
    if (!varification) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDUlPrtzieL1-rYuqMB5AbB4njY95OiyqI",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: expenseCtx.token,
            requestType: "VERIFY_EMAIL",
          }),
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("User is already Verified");
    }
  };
  return (
    <>
      <div className="flex w-full justify-between items-center mt-4 mb-4 p-2 border-b border-gray-400">
        <h1 className="text-xl italic">Welcome to Expense Tracker</h1>

        <div className="italic rounded-xl text-center px-3 bg-red-100 py-1 text-sm">
          Your profile is Incomplete.{" "}
          <Link to="/update" className="text-blue-800 ml-1">
            Complete now
          </Link>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <button
          onClick={verificationBtnHandler}
          className="bg-red-400 text-white p-2 rounded-xl hover:bg-red-600 hover:font-semibold"
        >
          Verify Email
        </button>
      </div>
    </>
  );
};

export default HomePage;
