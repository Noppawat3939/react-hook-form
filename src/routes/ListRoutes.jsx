import { Error, Home, Start } from "../pages";
import { Module1, Module2 } from "../pages/Modules";

export const ListRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/start",
    component: <Start />,
  },
  {
    path: "/start/module1",
    component: <Module1 />,
  },
  {
    path: "/start/module2",
    component: <Module2 />,
  },
  {
    path: "*",
    component: <Error />,
  },
];
