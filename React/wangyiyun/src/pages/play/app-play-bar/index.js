import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { PlayBarWrapper, Control, PlayInfo, Operator } from "./style";
import { Slider } from "antd";
import { getSongsDetailAxios } from "../store/createActions";
import {
  getSizeImage,
  formatDate,
  getPlaySong,
} from "../../../util/format-utils";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const SGAppPlayBar = memo(function (props) {
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [flag, setFlag] = useState(true);
  const [isPlay, setIsPlay] = useState(true);
  const { currentSongs } = useSelector(
    (state) => ({
      currentSongs: state.getIn(["player", "currentSongs"]),
    }),
    shallowEqual
  );
  const audioRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongsDetailAxios(1892583113));
  }, [dispatch]);

  const { al = {} } = currentSongs;
  //   数据太深的话，一定要采取这种格式获取数据才不会出错
  const singerName = (currentSongs.ar && currentSongs.ar[0].name) || "";
  const { dt } = currentSongs;
  const Timer = formatDate(dt, "mm:ss");
  let Time = formatDate(currentTime, "mm:ss");
  const playMusic = useCallback(() => {
    // if (isPlay) {
    //   audioRef.current.play();
    //   setIsPlay(false);
    // } else {
    //   audioRef.current.pause();
    //   setIsPlay(true);
    // }
    isPlay ? audioRef.current.play() : audioRef.current.pause();
    setIsPlay(!isPlay);
  }, [isPlay]);
  const timeUpdate = function (e) {
    if (flag) {
      setCurrentTime(e.target.currentTime * 1000);
      setProgress((currentTime / dt) * 100);
    }
  };

  // 当你把一函数传到自定义组件 是组件   的时候，要用useCallback
  const sliderChange = useCallback(
    (value) => {
      setFlag(false);
      //  console.log(value);//27
      setCurrentTime((value / 100) * dt);
      setProgress(value);
      if (isPlay) {
        playMusic();
      }
    },
    [dt, isPlay, playMusic]
  );
  // 当你要依赖某个东西的时候，一定要设置useState，这样才能形成依赖 不要简简单单的设置成变量像这样形式const progress，一定要设置成useState，这样依赖了progress才能重绘页面，这样才叫做，写在useState才有依赖的资格
  const sliderAfter = useCallback(
    (value) => {
      audioRef.current.currentTime = ((value / 100) * dt) / 1000; //得到是秒
      setCurrentTime(audioRef.current.currentTime * 1000); //这个要设置成毫秒，好转化为分秒，记住这两个别搞混了
      setFlag(true);
    },
    [dt]
  );

  return (
    <PlayBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlay}>
          <button className="sprite_player prev"></button>
          <button
            className="sprite_player play"
            onClick={(e) => {
              playMusic();
            }}
          ></button>

          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to={{ pathname: "/discover/player", currentSongs }}>
              {" "}
              <img src={getSizeImage(al.picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSongs.name}</span>
              <a href="/#" className="singer-name">
                {singerName}
              </a>
            </div>
            <div className="progress">
              <Slider
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfter}
              />
              <div className="time">
                <span className="now-time">{Time}</span>
                <span className="divider">/</span>
                <span className="duration">{Timer}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio
        ref={audioRef}
        src={getPlaySong(currentSongs.id)}
        onTimeUpdate={timeUpdate}
      />
    </PlayBarWrapper>
  );
});
export default withRouter(SGAppPlayBar);
