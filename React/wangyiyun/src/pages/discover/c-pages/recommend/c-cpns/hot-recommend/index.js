import React, { memo } from "react";
import { useSelector, useDispatch ,shallowEqual } from "react-redux";
import { HotRecommendWrapper } from "./style";
import SGThemeHeaderRCM from "../../../../../../components/theme-header-rcm/index";
import SGSongCover from '../../../../../../components/songs-cover/index'
import { useEffect } from "react";
import { HotRecommendAxios } from "../../store/actionCreate";
export default memo(function SGHotRecommend() {
  const dispatch = useDispatch();
  const { hotRecommend } = useSelector((state) => ({
    hotRecommend: state.getIn(["recommend", "hotRecommend"]),
  }),shallowEqual);
  useEffect(() => {
    dispatch(HotRecommendAxios());
  }, [dispatch]);
  return (
    <HotRecommendWrapper>
      <SGThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "明谣", "摇滚", "电子"]}
      ></SGThemeHeaderRCM>
      <div className='recommend-list'>{hotRecommend.map((item,index)=>{
          return <SGSongCover key={item.id} info={item}  />
      })}</div>
    </HotRecommendWrapper>
  );
});
