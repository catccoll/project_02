import React, {
    Component
} from 'react'
export default class App extends Component {
    state = {
        message: '你好呀'
    }
    render() {
        const {
            message
        } = this.state
        return (
             <div>
             <h1> 我是组件 </h1>
             <h2 > {message} </h2> 
             </div>
        )
    }
}
// export default function App(){
//     return(
//         <div>我是function组件
//             <h2>弄好呀</h2>
//         </div>

//     )
// }
 