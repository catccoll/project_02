import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { AxiosBanner } from "../../store/actionCreate";
import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl,
} from "./style.js";
import { Carousel } from "antd";
export default memo(function TopBanner() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0);

  // 使用hooks调用dispatch和获取redux里面的数据
  const { banners } = useSelector(
    (state) => ({
      // banners: state.get('recommend').get('topBanners'),
      banners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  //   其他hooks
  const bannerRef = useRef();
  useEffect(() => {
    dispatch(AxiosBanner());
  }, [dispatch]);
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);
  // 这做法好牛逼
  const bgImage =
    banners[currentIndex] &&
    banners[currentIndex].imageUrl + "?imageView&blur=40x20";

  // 业务逻辑
  return (
    // 这样可以传到你的style  DOM里面  牛逼
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt="" />
                </div>
              );
            })}
          </Carousel>
          ,
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={(e) => {
              bannerRef.current.prev();
            }}
          ></button>
          <button
            className="btn right"
            onClick={(e) => {
              bannerRef.current.next();
            }}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});

//   下面是一般的做法  上面是使用hooks
// const Recommend = memo(function (props) {
//   const { bannerRequest, banner } = props;
//   useEffect(() => {
//     bannerRequest();
//   }, [bannerRequest]);
//   return <div>55</div>;
// });
// const mapStateToProps = (state) => {
//   return {
//     banner: state.recommend.topBanners,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     bannerRequest() {
//       dispatch(AxiosBanner());
//     },
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
