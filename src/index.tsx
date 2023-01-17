import React from "react";
import ReactDOM from "react-dom/client";
import Root from './routes/root';
import Contact from './routes/contact';
import ErrorPage from './error-page';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "contact",
        element: <Contact />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);