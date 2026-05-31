import React, { useState } from "react";

function CounterForm() {
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setCount(Number(e.target.value));
  };

  const increase = () => {
    setCount(prev => prev + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Enter Value:</label><br />
        <input
          type="number"
          value={count}
          onChange={handleChange}
          style={{ padding: "8px", width: "100px" }}
        />
        <br /><br />

        <button type="button" onClick={increase}>
          Increase
        </button>

        <button
          type="button"
          onClick={decrease}
          style={{ marginLeft: "10px" }}
        >
          Decrease
        </button>

        <button
          type="button"
          onClick={reset}
          style={{ marginLeft: "10px" }}
        >
          Reset
        </button>
      </form>

      <h2 style={{ marginTop: "20px" }}>Current Count: {count}</h2>
    </div>
  );
}

export default CounterForm;