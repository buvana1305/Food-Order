import React, { lazy, Suspense } from "react";
import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComponents from "./components/header";
import FooterComponents from "./components/footer";
import MainComponents from "./components/maincomponents";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/Errorpage";
import HomePage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/Contactus";
import Help from "./components/help";
import Offers from "./components/offers";
import RestaurantDetails from "./components/RestaurantDetails";
import Groceries from "./components/groceries";

const Application = () => {
  return (
    <div className="main-container">
      <HeaderComponents />
      <Outlet />
      <FooterComponents />
    </div>
  );
};
const Groceries = lazy(() => import("./components/groceries"));

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Application />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainComponents />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },

      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/details/:id",
        element: <RestaurantDetails />,
      },
      {
        path: "/grocery",
        // element: <Groceries />,
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Groceries />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("mainPage"));
root.render(<RouterProvider router={appRoute}></RouterProvider>);
