import React from "react";
import fibonacci from "./fibonacci";

const FibonacciNumber = ({ n }) => (
  <div>
    {n}: {fibonacci(n)}
  </div>
);

export default FibonacciNumber;
