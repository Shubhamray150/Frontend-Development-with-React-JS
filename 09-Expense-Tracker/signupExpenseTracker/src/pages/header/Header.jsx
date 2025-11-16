import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const token = useSelector((state) => state.auth.token);
  const [isVerified, setIsVerified] = useState(false);
  const [activatePremium, setActivatePremium] = useState(false);

  const expenseItems = useSelector((state) => state.expense.expenseItems);
  const changeThemeHandler = () => {};

  useEffect(() => {
    const totalExpenses = expenseItems.reduce(
      (sum, item) => sum + Number(item.amount),
      0
    );
    if (totalExpenses > 500) {
      setActivatePremium(true);
    } else {
      setActivatePremium(false);
    }
  }, [expenseItems]);

  const premuimBtnHandler = () => {
    setActivatePremium(false);
  };

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

  return (
    <header className=" w-full flex items-center justify-between h-16 px-6 bg-white shadow-sm border-b border-gray-200">
      <h1 className="text-2xl font-semibold italic text-gray-800">
        Expense Tracker
      </h1>

      <div className="flex items-center gap-4">
        <button
          onClick={verificationBtnHandler}
          className={`px-4 py-1 rounded-lg text-sm font-medium transition 
          ${
            isVerified
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-500 text-white hover:bg-red-600"
          }`}
        >
          {isVerified ? "Verified" : "Verify Email"}
        </button>

        {activatePremium && (
          <button
            onClick={premuimBtnHandler}
            className="px-4 py-1 rounded-lg bg-yellow-300 border border-yellow-500 
                     text-black font-medium hover:bg-yellow-400 transition"
          >
            Activate Premium
          </button>
        )}

        <button
          onClick={changeThemeHandler}
          className="px-4 py-1 rounded-lg bg-gray-900 text-white hover:bg-gray-700 
                   transition font-medium"
        >
          Toggle Theme
        </button>
      </div>
    </header>
  );
};

export default Header;
