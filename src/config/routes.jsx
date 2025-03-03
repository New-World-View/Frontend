import React from "react";
import { Home } from "../modules/Home/Home";
import { Courses } from "../modules/Courses/Courses";
import About from "../modules/About/About";
import Contacts from "../modules/Contacts/Contacts";
import { PageOfCource } from "../modules/Courses/PageOfCource";

export const routes = () => {
  return [
    {
      id: 1,
      path: "/",
      element: <Home />,
    },
    {
      id: 2,
      path: "/courses/*",
      element: <Courses />,
    },
    {
      id: 3,
      path: "/about",
      element: <About />,
    },
    {
      id: 4,
      path: "/contacts",
      element: <Contacts />,
    },
    {
      id: 5,
      path: "/courses/info/:id",
      element: <PageOfCource />,
    },
  ];
};
