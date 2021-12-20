import React, { memo } from 'react'
import { PlayerWrapper,PlayerLeft,PlayerRight} from './style'
export default memo(function SGPlayer(props) {
    return (
        <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>HYPlayerInfo</h2>
          <h2>HYSongContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>HYSimiPlaylist</h2>
          <h2>HYSimiSong</h2>
          <h2>Download</h2>
          <h2>{console.log(props.location)}</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
    )
})
