import React, { memo, useEffect, useRef } from "react";
import { Carousel } from "antd";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import SGThemeHeaderRCM from "../../../../../../components/theme-header-rcm";
import SGAlbumCover from "../../../../../../components/album-cover/index";
import { TopAlbumAxios } from "../../store/actionCreate";
import { AlbumWrapper } from "./style";
export default memo(function SGNewAlbum() {
  const dispatch = useDispatch();
  const { topNewAlbum } = useSelector(
    (state) => ({
      topNewAlbum: state.getIn(["recommend", "topNewAlbum"]),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(TopAlbumAxios());
  }, [dispatch]);
  const newAlbumRef = useRef();
  return (
    <AlbumWrapper>
      <SGThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => {
            newAlbumRef.current.prev();
          }}
        >
          {" "}
        </button>
        <div className="album">
          <Carousel   ref={newAlbumRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {/* 这个用法那是相当的牛逼，要善于玩数据，推导出为什么这么做*/}
                  {topNewAlbum.slice(item * 5, (item + 1) * 5).map((iten) => {
                    return (
                      <SGAlbumCover
                        key={iten.id}
                        info={iten}
                        size={100}
                        width={118}
                        bgp="-570px"
                      />
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => {
            newAlbumRef.current.next();
          }}
        ></button>
      </div>
    </AlbumWrapper>
  );
});
