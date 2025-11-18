import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToggleTheme from "./ToggleTheme";
import PremiumBtn from "./PremiumBtn";
import VarificationBtn from "./VerificationBtn";

const Header = () => {
  const token = useSelector((state) => state.auth);
  const [isVerified, setIsVerified] = useState(false);

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

  return (
    <header className="w-full h-16 px-6 flex items-center justify-between bg-[var(--card)] text-[var(--text)] border-b border-[var(--border)] shadow-sm">
      <h1 className="text-2xl font-semibold italic">Expense Tracker</h1>

      <div className="flex items-center gap-3">
        <VarificationBtn />
        <PremiumBtn />
        <ToggleTheme />
      </div>
    </header>
  );
};

export default Header;
