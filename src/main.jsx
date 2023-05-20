import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "semantic-ui-css/semantic.min.css";
import store from "./Redux/Store/store";
import { Provider } from "react-redux";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventDetails from "./Component/Events/EventDetails.jsx";
import Navbar from "./Component/Header/Navbar.jsx";
// import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: `/eventDetails`,
    element: <>
    <Navbar />
    <EventDetails />,
    </>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <RouterProvider router={router} /> */}

      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
