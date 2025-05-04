import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Private/PrivateRoute";

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
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails />,
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
  },
]);
export default Router;
