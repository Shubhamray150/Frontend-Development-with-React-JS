import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { toggleTheme } from "../../store/redux/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const ToggleTheme = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const changeThemeHandler = () => {
    dispatch(toggleTheme());
  };
  return (
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
  );
};

export default ToggleTheme;
