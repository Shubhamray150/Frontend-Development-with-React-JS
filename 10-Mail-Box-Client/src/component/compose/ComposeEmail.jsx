import React, { useRef, useState } from "react";
import Editors from "./Editors";
import { useNavigate } from "react-router-dom";

const ComposeEmail = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const titleRef = useRef();
  const [letter, setLetter] = useState(null);
  const buttonClickHandler = async (event) => {
    event.preventDefault();
    if (emailRef.current.value.trim().length == 0) {
      return;
    }

    const response = await fetch(
      "https://mailboxclient-d6e39-default-rtdb.firebaseio.com/mail.json",
      {
        method: "POST",
        body: JSON.stringify({
          sender: "sskk91015@gmail.com",
          receiver: emailRef.current.value,
          title: titleRef.current.value,
          body: letter,
          time: new Date(),
          read: Math.random() < 0.5,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await response.json();
    console.log(data);
  };
  const letterText = (data) => {
    setLetter(data);
  };

  return (
    <div className="w-[98%] mx-auto bg-white my-4 border border-gray-300 shadow-lg px-5 py-3 rounded-2xl">
      <div className="flex justify-between items-center mb-2 pb-2">
        <h2 className="text-xl font-semibold text-gray-800">Compose</h2>
        <button
          type="button"
          onClick={() => {
            navigate("/inbox");
          }}
          className="text-gray-500 hover:text-red-500 font-bold text-lg hover:bg-gray-100 hover:rounded-lg cursor-pointer"
        >
          X
        </button>
      </div>
      <form>
        <div className=" mb-3 flex items-center border-gray-400 border-b-2">
          <label htmlFor="to" className=" text-gray-500 text-sm w-10 my-2">
            To
          </label>
          <input
            ref={emailRef}
            type="email"
            placeholder="recipient@example.com"
            id="to"
            className="flex-1 focus:outline-none "
          />
          <span className="text-gray-400">Cc/Bcc</span>
        </div>
        <div className="flex border-gray-400 border-b-2 my-2">
          <label htmlFor="title" className="text-gray-500 text-sm w-10 mb-2">
            Title
          </label>
          <input
            ref={titleRef}
            type="text"
            placeholder="Email subject"
            id="title"
            className="flex-1 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <Editors onData={letterText} />
        </div>
      </form>
      <div className="flex justify-between items-center">
        <button
          onClick={buttonClickHandler}
          className="border bg-blue-600 text-white rounded-lg px-6 py-2 hover:bg-blue-700 transition font-semibold"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ComposeEmail;
