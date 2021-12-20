import React, { PureComponent ,createRef,forwardRef} from 'react'
// forwardRef  这个是定义好的一个高阶组件

// export default class App extends PureComponent {
//     myRef=createRef()
//     homeRef=createRef()
//     ProfileRef=createRef()
//     render() {
//         return (
//             <div>
//                 <h2 ref={this.myRef}>你好</h2>
//                 <Home  ref={this.homeRef}/>
//                 <Profile ref={this.ProfileRef}/>
//                 <button onClick={()=>{this.change()}}>打印Ref</button>
//             </div>
//         )
//     }
//     change(){
//         console.log(this.myRef.current);
//         console.log(this.homeRef.current);
//         console.log(this.ProfileRef.current);
//     }
// }


// class Home extends PureComponent {
//     render() {
//         return (
//             <div>
//                 1
//             </div>
//         )
//     }
// }
// const Profile=forwardRef(function(props,ref){
//     return <p ref={ref}>profile</p>
// })
// 总结：ref可以转发，意思是我们可以在子组件里面写一个ref，当你的需求不满足只操作子组件，你还更希望操作子组件里面的DOM元素 ，那就可以引入一个高阶组件，然后在把传过来的ref赋值给DOM元素里面的ref


 export default  class App extends  PureComponent{
    state={
        title:''
    }
    inputRef=createRef()
        render() {
            return (
                <div>
                    <Input ref={this.inputRef}/>
                    <h1>{this.state.title}</h1>
                    <button onClick={()=>{this.add()}}>获取子组件的input内容</button>

                </div>
            )
        }
        add(){
            console.log(this.inputRef.current.value);
        }
        componentDidMount(){
            this.setState({
                title:this.inputRef.current.value
            })
        }
}



const Input=forwardRef((props,ref)=>{
    return(
        <div>
            <input type="text"  ref={ref}/>
        </div>
    )
})
