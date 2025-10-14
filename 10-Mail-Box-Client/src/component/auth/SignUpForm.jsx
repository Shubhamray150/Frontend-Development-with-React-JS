import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setShowSignup } from "../../Store/Auth";
import { useNavigate } from "react-router-dom";
import Modal from "../../Ui/Modal";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState({ title: "", message: "" });
  const state = useSelector((state) => state.auth);

  const dispath = useDispatch();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputChangeHandler = (event) => {
    const { value, name } = event.target;
    setUserInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    if (state.showSignUp) {
      if (
        userInput.email.trim().length === 0 ||
        userInput.password.trim().length === 0 ||
        userInput.confirmPassword.trim().length === 0
      ) {
        setError({
          title: "Please fill all fields ",
          message: "Some fields are Empty",
        });
        setShowModal(true);
        return;
      }
      if (userInput.password !== userInput.confirmPassword) {
        setError({
          title: "Password do not Match",
          message: "Enter same password",
        });
        setShowModal(true);
        return;
      }
    } else {
      if (
        userInput.email.trim().length === 0 ||
        userInput.password.trim().length === 0
      ) {
        setError({
          title: "Please Fill email and password",
          message: "Enter valid Email and password for Login",
        });
        setShowModal(true);
        return;
      }
    }

    try {
      const response = await fetch(
        state.showSignUp
          ? "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAmNzZHgpzW8H0G3yGk0jW9wyL2eogbERk"
          : "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAmNzZHgpzW8H0G3yGk0jW9wyL2eogbERk",
        {
          method: "POST",
          body: JSON.stringify({
            email: userInput.email,
            password: userInput.password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message || "Authentication failed");
      } else {
        dispath(setLogin({ token: data.idToken, email: data.email }));
        localStorage.setItem("token", data.idToken);
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert(error.message);
    }
    setUserInput({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal((prev) => !prev);
          }}
          error={error}
        />
      )}
      <div className="flex flex-col items-center top-50 ">
        <div className="border rounded p-4 border-gray-300 w-[350px] max-w-[350px] mt-40 w-full">
          <h3 className="mb-4 text-center font-semibold text-[24px] my-4">
            {state.showSignUp ? "Signup" : "Login"}
          </h3>
          <form className="flex flex-col gap-4" onSubmit={formSubmitHandler}>
            <input
              type="email"
              onChange={inputChangeHandler}
              value={userInput.email}
              name="email"
              placeholder="Enter Email"
              className="border border-gray-300 rounded p-2"
            />

            <input
              type="password"
              onChange={inputChangeHandler}
              value={userInput.password}
              name="password"
              placeholder="Enter Password"
              className="border border-gray-300 rounded p-2"
            />

            {state.showSignUp && (
              <input
                type="password"
                onChange={inputChangeHandler}
                value={userInput.confirmPassword}
                name="confirmPassword"
                placeholder="Enter Confirm Password"
                className="border border-gray-300 rounded p-2"
              />
            )}
            <div>
              <button className="bg-blue-500 mb-4 mt-2 text-white rounded-2xl px-2 py-1 font-semibold w-full">
                {state.showSignUp ? "Signup" : "Login"}
              </button>
            </div>
          </form>
        </div>
        <button
          onClick={() => {
            dispath(setShowSignup());
          }}
          className="mt-3 bg-[#d4fed4ff] py-2 max-w-[350px] w-[350px] rounded border border-gray-300 "
        >
          {state.showSignUp
            ? "Have an account? Login"
            : "Don't have an account? Signup"}
        </button>
      </div>
    </>
  );
};

export default SignUpForm;
