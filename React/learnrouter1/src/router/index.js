import About, { Content, Culture, History, Join } from "../../src/pages/About";
import Detail from "../../src/pages/Detail";
import Detail2 from "../../src/pages/Detail2";
import Detail3 from "../../src/pages/Detail3";
import Home from "../../src/pages/Home";
import Profile from "../../src/pages/Profile";
import User from "../../src/pages/User";
import Products from "../pages/Products";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/about",
    component: About,
    routes: [
      {
        path: "/about",
        component: Culture,
        exact: true,
      },
      { path: "/about/culture", component: Content },
      { path: "/about/content", component: History },
      { path: "/about/join", component: Join },
    ],
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/detail/:id",
    component: Detail,
  },
  {
    path: "/user",
    component: User,
  },
  {
    path: "/detail2",
    component: Detail2,
  },
  {
    path: "/detail3",
    component: Detail3,
  },
  {
    path: "/products",
    component: Products,
  },
];
export default routes;
