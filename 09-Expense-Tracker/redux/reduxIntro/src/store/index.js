import { createStore } from "redux";

function counterReducer(state = { counter: 0 }, action) {
  if (action.type === "increment") {
    return { counter: state.counter + 2 };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 2 };
  }
  return state;
}

const store = createStore(counterReducer);

const latestCounter = () => {
  console.log(store.getState());
};
store.subscribe(latestCounter);

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
