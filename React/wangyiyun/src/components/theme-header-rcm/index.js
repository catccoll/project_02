import React, { memo } from "react";
import { HeaderWrapper } from "./style";
import PropTypes from "prop-types";
const SGThemeHeaderRCM = memo(function (props) {
  const { title, keywords } = props;
  return (
    <HeaderWrapper className="sprite">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keywords.map((item, index) => {
            return (
              <div className="item" key={item}>
                <a href="todo">{item}</a>
                <span className="divider"></span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  );
});
SGThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
};
SGThemeHeaderRCM.defaultProps = {
  keywords: [],
};
export default SGThemeHeaderRCM;
