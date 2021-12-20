import React, { Component } from 'react'
import TabControl from './Tabcontrol'
// export default class App extends Component {
//     state={
//            currentTitle:'流行'
//     }
//     render() {
   
//         return (
//             <div>
//                 {/*传递数组时这样传递的 */}
//                <TabControl  itemClick={(index)=>{this.itemClick(index)}} titles={['流行','经典','精选']}/>
//                <h2>{this.state.currentTitle}</h2>
//             </div>
//         )
//     }
//     itemClick(index){
//         const title=['流行','经典','精选']
//       this.setState({
//         currentTitle:title[index]
//       })
//     }
// }

export default  class App extends Component{
    state={
       currentTitle:'流行'
    }
    render() {
      const arr=['流行','经典','潮流']
      return (
        <div>
          <TabControl   title={arr}
          itemClick={(item)=>{this.add(item)}}
          />
          <h1>{this.state.currentTitle}</h1>
        </div>
      )
    }
    add(item){
      this.setState({
        currentTitle:item
      })
    }
}