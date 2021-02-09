import React, { useCallback, useState } from "react";
import FibonacciNumber from "./FibonacciNumber";

const useNControls = () => {
  const [n, setN] = useState(0);

  // const increase = () => setN(n => n + 1);
  // const decrease = () => setN(n => Math.max(0, n - 1));

  const increase = useCallback(
    () => setN(n => n + 1),
    [setN],
  );
  const decrease = useCallback(
    () => setN(n => Math.max(0, n - 1)),
    [setN],
  );

  return {
    n,
    setN,
    increase,
    decrease,
  };
};

const FibController = ({ n, increase, decrease, withMemo }) => {
  const Component = withMemo
    ? FibonacciNumberMemoized
    : FibonacciNumber;

  return (
    <div>
      <Component n={n} />
      <button onClick={increase}>add</button>
      <button onClick={decrease}>sub</button>
    </div>
  );
};

const FibonacciNumberMemoized = React.memo(FibonacciNumber);
const FibControllerMemoized = React.memo(FibController);

const App = () => {
  const [withMemoController, setWithMemoController] = useState(false);
  const [withMemoNumber, setWithMemoNumber] = useState(false);
  const n0 = useNControls();
  const n1 = useNControls();

  const Component = withMemoController ? FibControllerMemoized : FibController;

  return (
    <div>
      <div>
        withMemoControleer<input type={"checkbox"} checked={withMemoController} onChange={(event) => {
        setWithMemoController(event.target.checked);
      }} />
      </div>
      <div>
        withMemoNumber<input type={"checkbox"} checked={withMemoNumber} onChange={(event) => {
        setWithMemoNumber(event.target.checked);
      }} />
      </div>
      <Component {...n0} withMemo={withMemoNumber} />
      <Component {...n1} withMemo={withMemoNumber} />
    </div>
  );
};

export default App;