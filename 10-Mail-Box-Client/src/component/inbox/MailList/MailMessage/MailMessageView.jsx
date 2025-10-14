import React, { useEffect, useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import { PiArrowBendDoubleUpLeftDuotone } from "react-icons/pi";
import { TiArrowForward } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

const MailMessageView = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [mail, setMail] = useState(null);

  useEffect(() => {
    const fetchMail = async () => {
      const response = await fetch(
        `https://mailboxclient-d6e39-default-rtdb.firebaseio.com/mail/${id}.json`
      );
      const data = await response.json();
      setMail(data);
    };
    fetchMail();
  }, [id]);

  const deleteHandler = async () => {
    const response = await fetch(
      `https://mailboxclient-d6e39-default-rtdb.firebaseio.com/mail/${id}.json`,
      {
        method: "DELETE",
      }
    );
    console.log(response);
    navigate("/");
  };

  return (
    <>
      {!mail ? (
        <p className="p-4">Loading...</p>
      ) : (
        <div className="p-4">
          <div className="flex justify-between items-center my-4 p-2">
            <h1 className="font-semibold">{mail.title}</h1>
            <span className="text-gray-500">{}</span>
          </div>
          <div className="mb-4 text-gray-400">
            <p>{mail.sender}</p>
          </div>

          <div>
            <p>{mail.body}</p>
          </div>
          <div className="flex items-center w-40 w-[50%] my-8 rounded-xl mx-auto border-2 px-2 py-1 border-gray-300 justify-around">
            <button
              onClick={deleteHandler}
              className="flex items-center border border-gray-400 rounded-md px-2 py-1 hover:border-red-400 hover:bg-red-500 hover:text-white hover:cursor-pointer"
            >
              <MdDeleteForever size={20} />
              Delete
            </button>
            <TiArrowBack size={20} />
            <PiArrowBendDoubleUpLeftDuotone size={20} />
            <TiArrowForward size={20} />
          </div>
        </div>
      )}
    </>
  );
};

export default MailMessageView;
