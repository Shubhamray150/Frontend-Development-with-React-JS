import { createPortal } from "react-dom";

const Overlay = ({ onClose, error }) => {
  return (
    <div className="fixed z-50 bg-white w-[40%] h-[40%] rounded-md text-center  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className="p-4 bg-violet-800 text-white font-bold mt-4">
        {error.title}
      </h1>
      <p className="p-4 italic">{error.message}</p>
      <button
        className="bg-blue-500 text-white rounded-md px-4 py-2"
        onClick={() => {
          onClose();
        }}
      >
        close
      </button>
    </div>
  );
};

const Backdrop = ({ onClose }) => {
  return (
    <div onClick={onClose} className="fixed inset-0 z-30 bg-black/50"></div>
  );
};

const Modal = ({ onClose, error }) => {
  return (
    <>
      {createPortal(
        <Overlay onClose={onClose} error={error} />,
        document.getElementById("overlay")
      )}
      {createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("backdrop")
      )}
    </>
  );
};

export default Modal;
