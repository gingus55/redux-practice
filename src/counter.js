import React from "react";
import { connect } from "react-redux";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h2> Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

const mapSateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
};

export default connect(mapSateToProps, mapDispatchToProps)(Counter);
