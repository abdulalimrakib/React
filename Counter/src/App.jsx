import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>COUNTER IN REACT</h1>
      <h3>count: 0</h3>

      <button>add count</button>
      <button>remove count</button>
    </>
  );
}

export default App;
