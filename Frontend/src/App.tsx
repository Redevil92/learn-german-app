import { useState } from "react";
import "./App.css";

import HomePage from "../../Frontend/src/pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomePage></HomePage>
    </>
  );
}

export default App;
