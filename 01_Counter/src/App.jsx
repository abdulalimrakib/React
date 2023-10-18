import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1);
  }

  function removeCount() {
    if (count <=0 ) {
      setCount(0);
      return;
    }
    setCount(count - 1);
  }

  return (
    <>
      <h1>COUNTER IN REACT</h1>
      <h3>count: {count}</h3>

      <button onClick={addCount}>add count</button>
      <button onClick={removeCount}>remove count</button>
    </>
  );
}

export default App;
