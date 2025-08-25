import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const Dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const increment = () => {
    Dispatch({ type: "increment" });
  };
  const decrement = () => {
    Dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    Dispatch({ type: "zero" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increment}>Increment by 5</button>
        <button onClick={decrement}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
