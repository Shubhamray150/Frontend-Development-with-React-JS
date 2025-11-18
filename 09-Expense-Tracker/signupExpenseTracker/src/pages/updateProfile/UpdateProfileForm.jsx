import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserProfile,
  updateUserProfile,
} from "../../services/authService";
import { authActions } from "../../store/redux/authReducer";

const UpdateProfileForm = () => {
  const [userInput, setUserInput] = useState({
    fullName: "",
    photoUrl: "",
  });

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.token) return;
    const loadProfile = async () => {
      const data = await fetchUserProfile(auth.token);

      setUserInput({
        fullName: data.users[0].displayName || "",
        photoUrl: data.users[0].photoUrl || "",
      });
      dispatch(
        authActions.updateProfile({
          name: data.users[0].displayName || "",
          photo: data.users[0].photoUrl || "",
        })
      );
    };
    loadProfile();
  }, [auth.token]);

  const updateHandler = async (event) => {
    event.preventDefault();
    const profileData = {
      idToken: auth.token,
      displayName: userInput.fullName,
      photoUrl: userInput.photoUrl,
      returnSecureToken: true,
    };

    const data = await updateUserProfile(profileData);

    if (data.error) {
      alert(data.error.message);
      return;
    }
    dispatch(
      authActions.updateProfile({
        name: userInput.fullName,
        photo: userInput.photoUrl,
      })
    );
    alert("Profile updated successfully");
  };

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <form onSubmit={updateHandler} className="space-y-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="fullname"
              className="font-semibold flex items-center gap-2 text-[var(--text)]"
            >
              <FaGithub className="text-xl" />
              Full Name
            </label>
            <input
              type="text"
              onChange={inputChangeHandler}
              name="fullName"
              value={userInput.fullName}
              id="fullname"
              className="border rounded-lg px-4 py-2 bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--text)] focus:ring-2 focus:ring-purple-500 focus:outline-none shadow-sm transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="profileUrl"
              className="font-semibold flex items-center gap-2 text-[var(--text)]"
            >
              <TbWorld className="text-xl" />
              Profile Photo URL
            </label>
            <input
              type="text"
              onChange={inputChangeHandler}
              name="photoUrl"
              value={userInput.photoUrl}
              id="profileUrl"
              className="border rounded-lg px-4 py-2 bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--text)] focus:ring-2 focus:ring-purple-500 focus:outline-none shadow-sm transition"
            />
          </div>
        </div>

        <div>
          <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-700 dark:to-purple-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg dark:hover:shadow-xl transition hover:from-purple-700 hover:to-purple-800 cursor-pointer">
            Update Profile
          </button>
        </div>
      </form>
    </>
  );
};

export default UpdateProfileForm;
