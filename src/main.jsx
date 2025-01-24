import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import Home from "./pages/Home";
import About from "./pages/About";
import Expenses from "./pages/Expenses";
import Incomes from "./pages/Incomes";
import Companies from "./pages/Companies";

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "expenses", element: <Expenses /> },
      { path: "incomes", element: <Incomes /> },
      { path: "companies", element: <Companies />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
