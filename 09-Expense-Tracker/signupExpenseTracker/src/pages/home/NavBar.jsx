import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/redux/authReducer";

export default function Sidebar() {
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className="w-64 pt-10 h-full border bg-white border-r border-gray-200 px-6 flex flex-col">
      <div className="flex  flex-col items-center mb-10">
        <img
          src="https://i.pinimg.com/200x/0c/0f/f8/0c0ff85e02cf0c98758fa3dbbefb3481.jpg"
          alt="user"
          className="w-28 h-28 rounded-full mb-3 object-cover"
        />
        <h3 className="text-lg font-medium">Shubham Ray</h3>
      </div>

      <nav className="flex flex-col gap-3">
        <Link
          to="/"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-[16px] transition
              ${
                pathname === "/"
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
        >
          <MdDashboard className="text-xl" />
          Dashboard
        </Link>
        <Link
          to="/income"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-[16px] transition
              ${
                pathname === "/income"
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
        >
          <FaWallet className="text-xl" />
          Income
        </Link>

        <Link
          to="/expense"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-[16px] transition
              ${
                pathname === "/expense"
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
        >
          <FaMoneyBillWave className="text-xl" />
          Expense
        </Link>

        <Link
          to="/update"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-[16px] transition
              ${
                pathname === "/update"
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
        >
          <MdOutlineSecurityUpdateGood className="text-xl" />
          Update
        </Link>

        <button
          onClick={logoutHandler}
          className={`flex items-center  gap-3 px-4 py-3 cursor-pointer rounded-lg text-[16px] transition hover:bg-purple-600 hover:text-white`}
        >
          <IoLogOut className="text-xl" />
          Logout
        </button>
      </nav>
    </div>
  );
}
