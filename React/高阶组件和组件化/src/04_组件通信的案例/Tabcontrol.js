import React, { Component } from "react";
import PropTypes from "prop-types";

// export default class TabControl extends Component {
//   state = {
//     currentIndex: 0,
//   };
//   render() {
//     const { titles } = this.props;
//     const { currentIndex } = this.state;
//     return (
//       <div className="tab-control">
//         {titles.map((item, index) => {
//           return (
//             <div
//               onClick={() => {
//                 this.change(index);
//               }}
//             //  想要在className里面有两个属性 ，就用加号连接
//               className={"tab-item " + (currentIndex === index ? "show" : "")}
//               key={item}
//             >
                
//              <span> {item}</span>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
//   // 这里是利用函数来向父元素传递东西，父元素传递过来一个函数，然后在子组件调用传递过来的函数，通过传递参数，将数据传递给父组件
//   change(index) {
//     this.setState({
//       currentIndex: index,
//     });
//     const {itemClick}=this.props
//     itemClick(index)
//   }
    

//   static propTypes = {
//     titles: PropTypes.array.isRequired,
//   };
// }
  export default  class TabControl extends Component{

    render(){
      const {title,itemClick}=this.props
      return(
         <ul >
              {title.map((item,index)=>{
                return <li  onClick={()=>{itemClick(item)}} key={item}>{item}</li>
              })}
         </ul>
      )
    }
  }