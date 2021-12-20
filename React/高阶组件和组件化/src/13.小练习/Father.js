 import React, { PureComponent } from 'react'
import Son from './Son'
 
 export default class App extends PureComponent {
     state={
         list:''
     }
     render() {
         const {list}=this.state
         return (
             <div>
                 <Son HobbyList={(list)=>{this.addHobby(list)}}/>
                 {list?list.map((item,index)=>{
                     return <h1 key={index}>{item}</h1>
                 }):''}
             </div>
         )
     }
     addHobby(list){
           this.setState({
               list
           })
           console.log(list);
     }
 }
 