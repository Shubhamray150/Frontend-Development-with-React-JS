import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const UpdateProfilePage = () => {
  const history = useHistory();
  const token = useSelector((state) => state.auth.token);

  const fullNameRef = useRef();
  const photoUrlRef = useRef();

  const cancelHandler = () => {
    history.push("/");
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
      <div className="flex w-full justify-between items-center mt-4 mb-4 p-2 border-b border-gray-400">
        <h1 className="text-base font-normal italic">
          Winners never quit, Quitters never win.
        </h1>
        <div className="italic rounded-xl px-3 bg-red-100 w-[24%] py-1 text-sm">
          Your profile is 64% complete. A complete Profile has higher chances of
          landing a job.
          <Link to="/update" className="text-blue-800 ml-1">
            Complete now
          </Link>
        </div>
      </div>

      <section className="ml-auto mr-12 w-[65%] border-b border-gray-600 p-6 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Contact Details</h1>
          <button
            onClick={cancelHandler}
            className="border border-red-500 rounded px-3 py-1 text-sm font-bold text-red-500 hover:bg-red-100"
          >
            Cancel
          </button>
        </div>

        <form onSubmit={updateButtonHandler}>
          <div className="flex gap-8">
            <div className="flex flex-col w-1/2 gap-2">
              <label
                htmlFor="fullname"
                className="flex items-center gap-2 font-semibold"
              >
                <FaGithub className="text-2xl text-black hover:text-gray-600" />
                Full Name
              </label>
              <input
                type="text"
                ref={fullNameRef}
                id="fullname"
                className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div className="flex flex-col w-1/2 gap-2">
              <label
                htmlFor="profileUrl"
                className="flex items-center gap-2 font-semibold"
              >
                <TbWorld className="text-2xl text-black hover:text-gray-600" />
                Profile Photo URL
              </label>
              <input
                ref={photoUrlRef}
                type="text"
                id="profileUrl"
                className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
          </div>

          <div className="mt-6">
            <button className="bg-red-400 border border-red-600 font-semibold text-white px-4 py-2 rounded hover:bg-red-600">
              Update
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default UpdateProfilePage;
