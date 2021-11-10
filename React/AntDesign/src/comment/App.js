 import React, { PureComponent } from 'react'
 import CommentInfo from './components/CommentInfo'
 import CommentInput from './components/CommentInput'
 export default class App extends PureComponent {
     state={
         commentList:[]
     }
     render() {
         return (
             <div style={{width:'300px', padding:'20px'}}>
          {
              this.state.commentList.map((item,index)=>{
                  return <CommentInfo key={item.id} comment={item} 
                  removeItem={e=>this.removeItem1(index)}  />
              })
          }
          {/* 现在基本完全懵逼了 */}
                 <CommentInput    addCommnetInfo={(info)=>{this.addCommnetInfo(info)}} />
             </div>
         )
     }
     addCommnetInfo(info){
      this.setState({//这样把对象添加到数组里面
        commentList:[...this.state.commentList,info]
      })
     }
     removeItem1(index){
       console.log(index);
         const newCommentList=[...this.state.commentList]
         newCommentList.splice(index,1)
         this.setState({
             commentList:newCommentList
         })
     }
 }
 