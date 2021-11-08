import React, { PureComponent } from 'react'
// 定义组件
 function withValid(WrappedComponent){
    const NewComponent= props=>{
         const {isLogin}=props
         if(isLogin){
            return <WrappedComponent  />
         }
         else{
             return <LoginPage/>
         }//太他妈牛逼了，登录鉴权
    

     }
     NewComponent.displayName='AuthCpn'
     return NewComponent
 }

// 购物车组件

class CartPage extends PureComponent{
    render(){       
  return(
      <h2>欢迎</h2>
  )     
    }
}
class LoginPage extends PureComponent{
    render(){      
  return(
      <h2>请登录</h2>
  )
        
    }
}

const WithValid=withValid(CartPage)
export default class App extends PureComponent {
    render() {
        return (
            <div>
                <WithValid isLogin={false}/>
            </div>
        )
    }
}
