import React, { memo } from "react";
import { SongsCoverWrapper } from "./style";
import {getSizeImage,getCount} from '../../util/format-utils'
export default memo(function SGSongCover(props) {
  const { info } = props;
  const {creator=[]}=info
  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl,140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
      <div className="cover-source text-nowrap">
        by {info.copywriter || creator.nickname}
      </div>
    </SongsCoverWrapper>
  );
});
// param=100×100可以设置请求过来的图片大小
