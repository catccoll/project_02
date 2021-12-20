import React from "react";
import { Redirect } from "react-router-dom";
// 只要是有组件   就有React
const SGMine = React.lazy(() => import("../pages/mine/index"));
const SGFriends = React.lazy(() => import("../pages/discover"));
const SGDiscover = React.lazy(() =>
  import("../pages/discover/c-pages/recommend")
);
const Recommend = React.lazy(() => import("../pages/mine/index"));
const Songs = React.lazy(() => import("../pages/discover/c-pages/songs"));
const Ranking = React.lazy(() => import("../pages/discover/c-pages/ranking"));
const Album = React.lazy(() => import("../pages/discover/c-pages/album"));
const Artist = React.lazy(() => import("../pages/discover/c-pages/artist"));
const DjRadio = React.lazy(() => import("../pages/discover/c-pages/djradio"));
// 懒加载方式
const routes = [
  {
    path: "/",
    exact: true,
    // component: SGDiscover,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: SGDiscover,
    routes: [
      // 这里全都要写全称，不和vue一样  是有区别的
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        component: Recommend,
      },
      {
        path: "/discover/ranking",
        component: Ranking,
      },
      {
        path: "/discover/songs",
        component: Songs,
      },
      {
        path: "/discover/djradio",
        component: DjRadio,
      },
      {
        path: "/discover/artist",
        component: Artist,
      },
      {
        path: "/discover/album",
        component: Album,
      },
      {
        path: "/discover/player",
      },
    ],
  },
  {
    path: "/mine",

    component: SGMine,
  },
  {
    path: "/friend",

    component: SGFriends,
  },
];
export default routes;
