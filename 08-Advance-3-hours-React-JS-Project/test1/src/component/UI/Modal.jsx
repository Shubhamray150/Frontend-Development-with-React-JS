import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div onClick={props.onclose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
};
const backdropPortal = document.getElementById("backdrop-root");
const modalPortal = document.getElementById("modal-root");

const Modal = (props) => {
  <>
    {ReactDOM.createPortal(
      <ModalOverlay>{props.children}</ModalOverlay>,
      modalPortal
    )}
    {ReactDOM.createPortal(
      <Backdrop onClose={props.onHideCart} />,
      backdropPortal
    )}
  </>;
};

export default Modal;
