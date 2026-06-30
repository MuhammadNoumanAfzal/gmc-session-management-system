import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { ROUTES } from "../shared/constants/routes";
import HomePage from "../features/home/pages/HomePage";
import SessionsPage from "../features/sessions/pages/SessionsPage";
import AboutPage from "../features/about/pages/AboutPage";
import NotFoundPage from "../features/not-found/pages/NotFoundPage";

const routeConfig = [
  {
    path: ROUTES.home,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.sessions.slice(1),
        element: <SessionsPage />,
      },
      {
        path: ROUTES.about.slice(1),
        element: <AboutPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routeConfig);
