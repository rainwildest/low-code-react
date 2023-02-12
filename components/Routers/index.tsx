import { lazy } from "react";
// import {
//   RouterProvider,
//   createHashRouter as createRouter
// } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Layout = lazy(() => import("../Layout"));
const Home = lazy(() => import("views/home"));
const Tables = lazy(() => import("views/tables"));
const Users = lazy(() => import("views/users"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/tables",
        element: <Tables />
      },
      {
        path: "/users",
        element: <Users />
      }
    ]
  }
]);

export default function MyRouter() {
  return <RouterProvider router={router}></RouterProvider>;
}
