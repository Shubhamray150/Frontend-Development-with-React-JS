import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const VarificationBtn = () => {
  const [isVerified, setIsVerified] = useState(false);
  const token = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token.token) return;
    const savedToken = localStorage.getItem("token");
    const checkVerification = async () => {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDUlPrtzieL1-rYuqMB5AbB4njY95OiyqI",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ idToken: savedToken }),
        }
      );
      const responseData = await response.json();

      if (responseData.users[0].emailVerified) {
        setIsVerified(true);
      }
    };

    checkVerification();
  }, []);

  const verificationBtnHandler = async () => {
    if (isVerified) {
      alert("User is already Verified");
      return;
    }
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDUlPrtzieL1-rYuqMB5AbB4njY95OiyqI",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            idToken: token.token,
            requestType: "VERIFY_EMAIL",
          }),
        }
      );

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        console.error("Verification request failed:", data.error?.message);
      } else {
        alert("Verification email sent successfully!");
      }
    } catch (error) {
      console.error("Error sending verification email:", error);
    }
  };
  return (
    <button
      onClick={verificationBtnHandler}
      className={`px-4 py-2 rounded-3xl text-sm  font-medium transition 
        ${
          isVerified
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-red-600 text-white hover:bg-red-700"
        }`}
    >
      {isVerified ? "Verified" : "Verify Email"}
    </button>
  );
};

export default VarificationBtn;
