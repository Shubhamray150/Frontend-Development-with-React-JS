import React, { useContext } from "react";
import classes from "./CartItemList.module.css";
import cartContext from "../../store/cart-context";

const CartItemList = (props) => {
  const cartCtx = useContext(cartContext);
  console.log(cartCtx);

  const minusBtnHandler = () => {
    const quantity = props.item.meals - 1;
    if (quantity > 0) {
      cartCtx.updateItemHandler({ ...props.item, meals: quantity });
    } else {
      cartCtx.removeItem(props.item);
    }
  };

  const addBtnHandler = () => {
    cartCtx.updateItemHandler({ ...props.item, meals: props.item.meals + 1 });
  };

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
