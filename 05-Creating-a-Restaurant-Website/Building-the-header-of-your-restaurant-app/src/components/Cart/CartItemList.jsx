import React, { useContext } from "react";
import classes from "./CartItemList.module.css";
import cartContext from "../../store/cart-context";

const CartItemList = (props) => {
  const cartCtx = useContext(cartContext);
  console.log(cartCtx);

  const minusBtnHandler = () => {
    cartCtx.removeItem(props.item.id);
  };

  const addBtnHandler = () => {};

  return (
    <>
      <div className={classes.cartItem}>
        <div className={classes.name}>
          <h3>{props.item.name}</h3>
          <p>{`$${props.item.price}`}</p>
        </div>

        <span className={classes.meals}>{`x${props.item.meals}`}</span>

        <div>
          <button onClick={minusBtnHandler} className={classes.minusBtn}>
            -
          </button>
          <button onClick={addBtnHandler} className={classes.addBtn}>
            +
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartItemList;
