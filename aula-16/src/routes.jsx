import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/home";

import DashboardPage from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard/:id",
    element: <DashboardPage />,
  },
]);

function Routes() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Routes;
