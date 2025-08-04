import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const BackDrop = (props) => (
  <div className="backdrop" onClick={props.onClose}></div>
);

const OverLay = (props) => <div className="overlay">{props.children}</div>;

const backdropPortal = document.getElementById("root-backdrop");
const overlayPortal = document.getElementById("root-overlay");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        backdropPortal
      )}
      {ReactDOM.createPortal(
        <OverLay>{props.children}</OverLay>,
        overlayPortal
      )}
    </>
  );
};

export default Modal;
