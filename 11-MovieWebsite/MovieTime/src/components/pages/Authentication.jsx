import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { posterImage } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../../store/adminAuthSlice";

const Authentication = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState(0);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => (prev === posterImage.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    const api = isLogin
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAH82MCf2edch9kvPlyJd5qoumRWlAEWcg"
      : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAH82MCf2edch9kvPlyJd5qoumRWlAEWcg";
    e.preventDefault();
    try {
      const res = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userInput.email,
          password: userInput.password,
          returnSecureToken: true,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(loginAdmin({ email: data.email, token: data.idToken }));
        navigate("/admin");
      } else {
        alert(data.error?.message || "Authentication failed");
        return;
      }
      console.log(data);
    } catch (error) {}
  };

  return (
    <>
      <div className="fixed inset-0 bg-[#030c17] ">
        <div className="flex flex-row border w-[65%] bg-[#071526] overflow-hidden mx-auto mt-8 rounded-2xl h-[90%] shadow-xl shadow-gray-500/10 ">
          <div className="h-full">
            <img
              src={posterImage[data]?.image}
              className="object-cover h-full w-110 object-top"
              alt=""
            />
          </div>
          <div className="p-16 flex-1">
            <div className="flex flex-col gap-4">
              <span className="text-white font-semibold text-4xl">
                {isLogin ? "Welcome Back," : "Create Account,"}
              </span>
              <span className="text-white">
                {isLogin ? "Sign in to your account" : "Sign up to get started"}
              </span>
            </div>
            <form
              onSubmit={submitHandler}
              className="w-full my-8 flex flex-col gap-8"
            >
              <div className="text-gray-400 w-full">
                <label className="text-lg" htmlFor="email">
                  Email
                </label>
                <input
                  onChange={inputChangeHandler}
                  type="email"
                  name="email"
                  id="email"
                  className="border border-gray-400 w-full rounded-lg px-1 py-3 block mt-2"
                />
              </div>
              <div className="text-gray-400 w-full">
                <label htmlFor="password">Password</label>
                <input
                  onChange={inputChangeHandler}
                  type="password"
                  name="password"
                  id="password"
                  className="border border-gray-400 w-full rounded-lg px-1 py-3 block mt-2"
                />
              </div>
              {!isLogin && (
                <div className="text-gray-400 w-full">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    onChange={inputChangeHandler}
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="border border-gray-400 w-full rounded-lg px-1 py-3 block mt-2"
                  />
                </div>
              )}
              {isLogin && (
                <div className="text-gray-500 ml-auto">
                  <Link to={"/forgot-password"}>Forgot password?</Link>
                </div>
              )}
              <div className="text-white">
                <button className="w-full bg-red-500 py-2 rounded-md font-semibold cursor-pointer">
                  {isLogin ? "Sign In" : "Sign Up"}
                </button>
              </div>
            </form>
            <div className="text-center">
              <button
                onClick={() => setIsLogin((prev) => !prev)}
                className="text-gray-500 cursor-pointer"
              >
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <span className="text-red-600 font-semibold">
                  {isLogin ? " Sign up" : " Sign in"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authentication;
