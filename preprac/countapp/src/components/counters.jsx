import React from "react";
import Counter from "./counter";

//destructuring
const Counters = ({
  onDecrement,
  onDelete,
  onIncrement,
  counters,
  onReset
}) => {
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary m-2">
        Reset
      </button>
      {counters.map(counter => (
        <Counter
          key={counter.id}
          onDelete={onDelete}
          counter={counter}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </div>
  );
};

export default Counters;
