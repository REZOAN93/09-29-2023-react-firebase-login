import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import SignIn from "../components/Signin/SignIn";
import Details from "../components/Details/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/googleLogin",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/details",
        element: <Details />,
      },
    ],
  },
]);
