import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/redux/authReducer";

const HomePage = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (!token) return;
    const fetchVerificationStatus = async () => {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDUlPrtzieL1-rYuqMB5AbB4njY95OiyqI",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ idToken: token }),
          }
        );

        const data = await response.json();
        if (!response.ok) {
          console.error("Verification lookup failed:", data.error?.message);
          return;
        }

        setIsVerified(data.users[0].emailVerified);
      } catch (error) {
        console.error("Error fetching verification:", error);
      }
    };

    fetchVerificationStatus();
  }, [token]);

  const verificationBtnHandler = async () => {
    if (isVerified) {
      alert("User is already Verified");
      return;
    }

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDUlPrtzieL1-rYuqMB5AbB4njY95OiyqI",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            idToken: token,
            requestType: "VERIFY_EMAIL",
          }),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        console.error("Verification request failed:", data.error?.message);
      } else {
        alert("Verification email sent successfully!");
      }
    } catch (error) {
      console.error("Error sending verification email:", error);
    }
  };

  const logOutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className="flex w-full justify-between items-center mt-4 mb-4 p-2 border-b border-gray-400">
      <h1 className="text-xl italic">Welcome to Expense Tracker</h1>

      <div className="flex w-full justify-center">
        <button
          onClick={verificationBtnHandler}
          className="bg-red-400 text-white p-2 rounded-xl hover:bg-red-600 hover:font-semibold"
        >
          {isVerified ? "Verified" : "Verify Email"}
        </button>
      </div>

      <button
        onClick={logOutHandler}
        className="ml-auto mr-5 bg-red-500 rounded-xl px-2 py-1 text-white font-semibold hover:bg-red-700"
      >
        LogOut
      </button>

      <div className="italic rounded-xl text-center px-3 bg-red-100 py-1 text-sm">
        Your profile is Incomplete.{" "}
        <Link to="/update" className="text-blue-800 ml-1">
          Complete now
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
