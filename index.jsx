import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import Error from "./components/Error";
import CountryDetails from "/components/CountryDetails";
import Header from "/components/Header";
// using the react-router in react js
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
    
    path: "/countryDetails",
    element: <CountryDetails />,
  }
]);

const root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);
