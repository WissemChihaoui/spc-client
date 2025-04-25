import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import LayoutTheme from "../layouts/layout";
import LoadingScreen from "../components/loading-screen/loading-screen";

const Index = lazy(() => import("../pages/home/index"));
const Details = lazy(() => import("../pages/details/index"));
const ViewProduct = lazy(() => import("../pages/product/index"));

const layoutContent = (
  <LayoutTheme>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </LayoutTheme>
);
export const routes = [
  {
    path: "/",
    element: layoutContent,
    children: [
      { element: <Index />, index: true },
      {
        element: <Details />,
        path: "spa",
      },
      {
        element: <ViewProduct />,
        path: "spa/:id",
      },
    ],
  },
];
