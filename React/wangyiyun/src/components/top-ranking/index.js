import React, { memo } from "react";
import { TopRankingWrapper } from "./style";
import { getSizeImage } from "../../util/format-utils";
export default memo(function index(props) {
  const { info } = props;
  const { tracks = [] } = info;
  //  生命周期调用顺序，先是执行render里面的函数，然后再去拿数据，所以说当你从一个数组为undefined里面去取数据的话，那肯定是会报错的  你可以给个默认值，或者判断一下  ，
  // 这两种办法都是可以的

  const addSongs = function (item) {
    console.log(item);
  };

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl)} alt="" />
          <a href="/todo" className="image_cover">
            ranking
          </a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div key={item.id} className="list-item">
              <div className="rank">{index + 1}</div>
              <div className="info">
                <span className="name text-nowrap">{item.name}</span>
                <div className="operate">
                  <button
                    className="btn sprite_02 play"
                    onClick={(e) => {
                      addSongs(item);
                    }}
                  ></button>
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  );
});
