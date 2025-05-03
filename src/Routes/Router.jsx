import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Root";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>error</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <h1>i am about</h1> },
      { path: "career", element: <h1>i am career</h1> },
      { path: "category/:id", element: <h1>im category</h1> },
    ],
  },
  {
    path: "/login",
    element: <h1>i am login</h1>,
  },
]);
export default Router;
