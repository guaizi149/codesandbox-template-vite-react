import { useState } from "react";
import { ThemeProvider } from "antd-style";
import Test from "./Test";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Test />
      </div>
    </ThemeProvider>
  );
}

export default App;
