import React, { memo, Suspense } from "react";
import { renderRoutes } from "react-router-config";
import { withRouter } from "react-router";
import routes from "./router/index";
import SGAppHeader from "./components/app-header";
import SGAppFooter from "./components/app-footer";
import SGaAppPlayBar from "./pages/play/app-play-bar/index";
const App = memo(function () {
  return (
    <div>
      <SGAppHeader />
      <Suspense fallback={<div>page loading </div>}>
        {renderRoutes(routes)}
      </Suspense>
      <SGAppFooter />
      <SGaAppPlayBar />
    </div>
  );
});
export default withRouter(App);
/**
 * 第一先导入第三方库
 * 第二先导入工具类的模块，比如路由，createActions等等
 * 第三再导入组件
 */
