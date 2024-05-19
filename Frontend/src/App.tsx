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
      <div className="mt-[--header-height]">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
