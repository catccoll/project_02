import React, { memo } from "react";
import TopBanner from "./c-cpns/top-banner/index";
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";
import SGHotRecommend from "./c-cpns/hot-recommend";
import SGNewAlbum from "./c-cpns/new-album";
import RCMRanking from "./c-cpns/rcm-ranking";
export default memo(function () {
  return (
    <RecommendWrapper>
      <TopBanner />

      <Content className="wrap-v2">
        <RecommendLeft>
          <SGHotRecommend />
          <SGNewAlbum />
          <RCMRanking />
        </RecommendLeft>

        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
});
