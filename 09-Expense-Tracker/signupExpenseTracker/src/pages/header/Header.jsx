import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/redux/themeSlice";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const theme = useSelector((state) => state.theme.theme);
  const token = useSelector((state) => state.auth);
  const expenseItems = useSelector((state) => state.expense.expenseItems);
  const dispatch = useDispatch();

  const [isVerified, setIsVerified] = useState(false);
  const [activatePremium, setActivatePremium] = useState(false);

  const changeThemeHandler = () => {
    dispatch(toggleTheme());
  };

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
    if (!token.token) return;
    const fetchVerificationStatus = async () => {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDUlPrtzieL1-rYuqMB5AbB4njY95OiyqI",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ idToken: token.token }),
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
  }, [token.token]);

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
            idToken: token.token,
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
    <header className="w-full h-16 px-6 flex items-center justify-between bg-[var(--card)] text-[var(--text)] border-b border-[var(--border)] shadow-sm">
      <h1 className="text-2xl font-semibold italic">Expense Tracker</h1>

      <div className="flex items-center gap-3">
        <button
          onClick={verificationBtnHandler}
          className={`px-4 py-2 rounded-3xl text-sm font-medium transition 
        ${
          isVerified
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-red-600 text-white hover:bg-red-700"
        }`}
        >
          {isVerified ? "Verified" : "Verify Email"}
        </button>

        {activatePremium && (
          <button
            onClick={premuimBtnHandler}
            className="px-4 py-1.5 rounded-lg text-sm font-medium 
                     bg-yellow-400 text-black hover:bg-yellow-500 transition"
          >
            Activate Premium
          </button>
        )}

        <button
          onClick={changeThemeHandler}
          className="px-3 cursor-pointer py-1.5 rounded-lg text-sm font-medium bg-gray-100 text-black dark:bg-gray-800 dark:text-white border border-gray-500 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-center gap-2"
        >
          {theme === "light" ? (
            <FaMoon className="text-gray-900 " size={18} />
          ) : (
            <FaSun className="text-yellow-400" size={18} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
