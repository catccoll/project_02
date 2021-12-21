  import React, { memo } from 'react'
  import Son from './Son.js'
  export default memo(function Father() {
  
      return (
          <div>
              <Son render={(x,y)=><h1>鼠标的x.y值分别为{x},{y}</h1>}></Son>
          </div>
      )
  })
  