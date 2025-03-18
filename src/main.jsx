import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./App";
import "./styles/index.css";
import {RouterProvider,createBrowserRouter } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {path: "/",element: <Body/>},
  {path: "/login" , element:<LoginForm/>},
  {path: "/signup" , element:<Signup/>}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);
