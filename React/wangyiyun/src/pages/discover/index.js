import React, { memo, useEffect } from "react";
import { DiscoverWrapper, TopMenu } from "./style";
import { discoverMenu } from "../../common/local-data";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

export default memo(function (props) {
  useEffect(() => {}, []);
  const { route } = props;
  return (
    <DiscoverWrapper>
      <div className=" top ">
        <TopMenu className="wrap-v1">
          {discoverMenu.map((item) => {
            return (
              <div key={item.link} className="item">
                <NavLink key={item.link} to={item.link}>
                  {item.title}
                </NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>

      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  );
});
