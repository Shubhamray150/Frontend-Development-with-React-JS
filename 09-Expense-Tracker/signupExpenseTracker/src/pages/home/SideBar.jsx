import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/redux/authReducer";

export default function Sidebar() {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className="w-64 bg-[var(--card)] text-[var(--text)] pt-10 h-full border-r border-[var(--border)] px-6 flex flex-col dark:shadow-lg">
      <div className="flex flex-col items-center mb-10">
        <img
          src={`${auth.photo || null}`}
          alt="user"
          className="w-32 h-32 rounded-full mb-3 object-cover  border-4 border-purple-500 shadow-lg"
        />
        <h3 className="text-lg font-medium text-[var(--text)]">{`${auth.name}`}</h3>
      </div>

      <nav className="flex flex-col gap-2">
        <Link
          to="/"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base transition
              ${
                pathname === "/"
                  ? "bg-purple-700 text-white shadow-md"
                  : "text-[var(--text)] hover:bg-[var(--card-hover)] dark:hover:bg-slate-700"
              }`}
        >
          <MdDashboard className="text-xl" />
          Dashboard
        </Link>
        <Link
          to="/income"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base transition
              ${
                pathname === "/income"
                  ? "bg-purple-700 text-white shadow-md"
                  : "text-[var(--text)] hover:bg-[var(--card-hover)] dark:hover:bg-slate-700"
              }`}
        >
          <FaWallet className="text-xl" />
          Income
        </Link>

        <Link
          to="/expense"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base transition
              ${
                pathname === "/expense"
                  ? "bg-purple-700 text-white shadow-md"
                  : "text-[var(--text)] hover:bg-[var(--card-hover)] dark:hover:bg-slate-700"
              }`}
        >
          <FaMoneyBillWave className="text-xl" />
          Expense
        </Link>

        <Link
          to="/update"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base transition
              ${
                pathname === "/update"
                  ? "bg-purple-700 text-white shadow-md"
                  : "text-[var(--text)] hover:bg-[var(--card-hover)] dark:hover:bg-slate-700"
              }`}
        >
          <MdOutlineSecurityUpdateGood className="text-xl" />
          Update
        </Link>

        <button
          onClick={logoutHandler}
          className="flex items-center gap-3 px-4 py-3 cursor-pointer rounded-lg  text-base transition text-[var(--text)] hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 hover:text-white w-full shadow-sm hover:shadow-md"
        >
          <IoLogOut className="text-xl" />
          Logout
        </button>
      </nav>
    </div>
  );
}
