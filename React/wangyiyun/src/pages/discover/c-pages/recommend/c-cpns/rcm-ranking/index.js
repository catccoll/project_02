import React, { memo, useEffect } from "react";
import SGThemeHeaderRCM from "../../../../../../components/theme-header-rcm";
import SGTopRanking from "../../../../../../components/top-ranking";
import { RankingWrapper } from "./style";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { RecommendRankingAxios } from "../../store/actionCreate";
export default memo(function RCMRanking() {
  const dispatch = useDispatch();
  const { recommendRanking1, recommendRanking2, recommendRanking3 } =
    useSelector(
      (state) => ({
        recommendRanking1: state.getIn(["recommend", "recommendRanking1"]),
        recommendRanking2: state.getIn(["recommend", "recommendRanking2"]),
        recommendRanking3: state.getIn(["recommend", "recommendRanking3"]),
      }),
      shallowEqual
    );
  useEffect(() => {
    dispatch(RecommendRankingAxios(0));
    dispatch(RecommendRankingAxios(2));
    dispatch(RecommendRankingAxios(3));
  }, [dispatch]);
  // 这个dispatch必须写，百分之百要写,不然会很容易出错

  return (
    <RankingWrapper>
      <SGThemeHeaderRCM title="榜单" />
      <div className="tops">
        <SGTopRanking info={recommendRanking1} />
        <SGTopRanking info={recommendRanking2} />
        <SGTopRanking info={recommendRanking3} />
      </div>
    </RankingWrapper>
  );
});
