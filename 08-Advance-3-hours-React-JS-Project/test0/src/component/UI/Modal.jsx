import { useContext } from "react";
import { createPortal } from "react-dom";
import cartContext from "../../store/CartContext";
import CartItem from "./CartItem";

const Overlay = ({ onClose }) => {
  const cartCtx = useContext(cartContext);

  const totalCartValue = cartCtx.cartItem.reduce((sum, item) => {
    const totalQuantity = item.large + item.small + item.medium;
    return sum + totalQuantity * item.price;
  }, 0);

  return (
    <div className="fixed w-[50%] top-1/2 text-center left-1/2 -translate-x-1/2 -translate-y-1/2 z-90 rounded-xl p-4 bg-white flex flex-col gap-6">
      <h1 className="font-bold text-xl">Shoping Cart</h1>
      <div className="">
        {cartCtx.cartItem.map((item) => {
          return <CartItem key={item._id} item={item} />;
        })}
      </div>
      <div className="flex justify-between  px-6 py-2 border-y-1">
        <h1 className="font-semibold text-xl">Total</h1>
        <span>₹ {totalCartValue}</span>
      </div>
      <div className=" flex justify-end">
        <button onClick={onClose} className="border rounded-md px-4 py-1">
          CLOSE
        </button>
      </div>
    </div>
  );
};

const Backdrop = ({ onClose }) => {
  return <div onClick={onClose} className="fixed inset-0 bg-black/50"></div>;
};

const Modal = ({ onClose }) => {
  return (
    <>
      {createPortal(
        <Overlay onClose={onClose} />,
        document.getElementById("Backdrop")
      )}
      {createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("Overlay")
      )}
    </>
  );
};

export default Modal;
