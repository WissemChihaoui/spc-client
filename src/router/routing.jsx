import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import LayoutTheme from "../layouts/layout";

const Index = lazy(() => import("../pages/home/index"));

export const routes = [
  {
    path: "/",
    element: (
      <LayoutTheme>
        <Outlet />
      </LayoutTheme>
    ),
    children: [{ element: <Index />, index: true }],
  },
];
