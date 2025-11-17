import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { useSelector } from "react-redux";

const UpdateProfilePage = () => {
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);

  const fullNameRef = useRef();
  const photoUrlRef = useRef();

  const cancelHandler = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!token) return;

    const fetchData = async () => {
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
        if (data.users && data.users.length > 0) {
          fullNameRef.current.value = data.users[0].displayName || "";
          photoUrlRef.current.value = data.users[0].photoUrl || "";
        }
      } catch (error) {
        console.error("Profile fetch failed:", error);
      }
    };

    fetchData();
  }, [token]);

  const updateButtonHandler = async (event) => {
    event.preventDefault();

    const updateProfile = {
      idToken: token,
      displayName: fullNameRef.current.value.trim(),
      photoUrl: photoUrlRef.current.value.trim(),
      returnSecureToken: true,
    };

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDUlPrtzieL1-rYuqMB5AbB4njY95OiyqI",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updateProfile),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        console.error("Update failed:", data.error?.message);
      } else {
        alert("Profile updated successfully!");
      }
    } catch (error) {
      console.error("Profile update error:", error);
    }
  };

  return (
    <>
      <section className="px-2 w-full bg-[var(--bg)] text-[var(--text)] h-full">
        <div className="flex items-center justify-between w-full p-4 mb-6 bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-900 dark:to-purple-800 border-b border-[var(--border)] rounded-md shadow-sm dark:shadow-md">
          <h1 className="text-lg font-medium italic text-[var(--text)]">
            Winners never quit, Quitters never win.
          </h1>

          <div className="italic bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-4 py-2 rounded-lg text-sm shadow-sm">
            Your profile is 64% complete. Complete it to improve visibility.
            <Link
              to="/update"
              className="text-blue-700 dark:text-blue-400 underline ml-1 hover:text-blue-900 dark:hover:text-blue-300"
            >
              Complete now
            </Link>
          </div>
        </div>

        <section className="ml-auto mr-12 w-full bg-[var(--card)] p-8 rounded-xl shadow-md border border-[var(--border)] dark:shadow-lg">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-[var(--text)]">
              Contact Details
            </h1>
            <button
              onClick={cancelHandler}
              className="px-4 py-1 border border-red-400 dark:border-red-500 text-red-500 dark:text-red-400 font-semibold rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition"
            >
              Cancel
            </button>
          </div>

          <form onSubmit={updateButtonHandler} className="space-y-8">
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
                  ref={fullNameRef}
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
                  ref={photoUrlRef}
                  type="text"
                  id="profileUrl"
                  className="border rounded-lg px-4 py-2 bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--text)] focus:ring-2 focus:ring-purple-500 focus:outline-none shadow-sm transition"
                />
              </div>
            </div>

            <div>
              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-700 dark:to-purple-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg dark:hover:shadow-xl transition hover:from-purple-700 hover:to-purple-800">
                Update Profile
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default UpdateProfilePage;
