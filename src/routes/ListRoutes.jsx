import { Error, Home, Start } from "../pages";
import { Module1, Module2, Module3 } from "../pages/Modules";

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
    path: "/start/module3",
    component: <Module3 />,
  },
  {
    path: "*",
    component: <Error />,
  },
];
