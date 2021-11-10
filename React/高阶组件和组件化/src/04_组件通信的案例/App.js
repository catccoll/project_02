import React, { Component } from 'react'
import TabControl from './Tabcontrol'
export default class App extends Component {
    state={
           currentTitle:'流行'
    }
    render() {
   
        return (
            <div>
                {/*传递数组时这样传递的 */}
               <TabControl  itemClick={(index)=>{this.itemClick(index)}} titles={['流行','经典','精选']}/>
               <h2>{this.state.currentTitle}</h2>
            </div>
        )
    }
    itemClick(index){
        const title=['流行','经典','精选']
      this.setState({
        currentTitle:title[index]
      })
    }
}
