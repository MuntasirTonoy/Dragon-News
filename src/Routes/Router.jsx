import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>error</h1>,
    children: [
      { path: "news", element: <h1>i am news</h1> },
      { path: "auth", element: <h1>i am auth</h1> },
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
export default Router;
