import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import Error from "./components/Error";
import CountryDetails from "/components/CountryDetails";
import Header from "/components/Header";
// using the react-router in react js
// we will also implement the dynamic routing in this project.
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    // children: [
    //   {
    //     path: "/countryDetails",
    //     element: <CountryDetails />,
    //   },
    // ],
  },
  {
    // we are going to do the dynamic routing in the country route.
    path: "/:country",
    element: <CountryDetails />,
  }
]);

const root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);
