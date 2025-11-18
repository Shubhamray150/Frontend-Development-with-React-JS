import ToggleTheme from "./ToggleTheme";
import PremiumBtn from "./PremiumBtn";
import VarificationBtn from "./VerificationBtn";
import CsvDownload from "./CsvDownload";
import { useSelector } from "react-redux";

const Header = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <header className="w-full h-16 px-6 flex items-center justify-between bg-[var(--card)] text-[var(--text)] border-b border-[var(--border)] shadow-sm">
      <h1 className="text-2xl font-semibold italic">Expense Tracker</h1>
      <div className="flex items-center gap-3">
        <VarificationBtn />
        <PremiumBtn />
        {theme.premium && (
          <>
            <ToggleTheme />
            <CsvDownload />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
