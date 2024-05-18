import "./App.css";

import Navbar from "./components/Layout/Navbar";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
      </BrowserRouter>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
