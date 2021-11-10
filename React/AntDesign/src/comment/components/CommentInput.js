import React, { PureComponent } from 'react'
import { Input,Button } from 'antd';
import moment from 'moment'
const { TextArea } = Input;
export default class CommentInput extends PureComponent {
    state={
        content:''
    }
    render() {
        return (
            <div>
              <TextArea onChange={(e)=>{this.handleChange(e)}}  row={4}  col={30}   value={this.state.content}/>
              <Button onClick={()=>{this.addComment()}} type='primary' style={{marginTop:'20px'}}>添加评论</Button>
            </div>
        )
    }
    addComment(){
       const commentInfo={
           id:moment().valueOf(),
           avatar:'https://img1.baidu.com/it/u=3246628741,3439955235&fm=26&fmt=auto',
           nickname:'codewhy',
           datetime:moment(),
           content:this.state.content

       }
       this.state.content=''
       this.props.addCommnetInfo(commentInfo)
    }

    handleChange(e){
        this.setState({
            content: e.target.value
        })
    }
}
