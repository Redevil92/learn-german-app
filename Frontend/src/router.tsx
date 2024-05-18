import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      let YourComponent = await import("./pages/HomePage");
      return { Component: YourComponent.default };
    },
  },
  {
    path: "/grammar",
    async lazy() {
      let YourComponent = await import("./pages/GrammarPage");
      return { Component: YourComponent.default };
    },
  },
]);

export default router;
