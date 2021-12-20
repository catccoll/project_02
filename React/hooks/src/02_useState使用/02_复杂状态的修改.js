import React, { useState } from "react";

export default function App() {
  const [friends, setFriends] = useState(["kobe", "liLei"]);

  const [student, setStudent] = useState([
    { id: 110, name: "李四", age: 20 },
    { id: 111, name: "网二", age: 25 },
    { id: 112, name: "王五", age: 30 },
  ]);
    return(
      <div>
        {friends.map((item,index)=>{
          return <li key={index}>{item}</li>
        })}
        <button onClick={e=>setFriends([...friends,'sai'])}>添加新朋友</button>
        {student.map((item,index)=>{
          return <li key={item.id}>{item.name}--{item.age} <button onClick={()=>{add(index)}}>年龄+1</button>  </li>
        })}
      </div>
    )
    function add(index){
    const students=[...student]
students[index].age+=1
// 在setState里面只能出现具体的数 ，不能写表达式  //这里为啥不能吧表达式写在里面
    setStudent(students)
    }
}























// return (
//   <div>
//     <h2>好友列表</h2>
//     <ul>
//       {friends.map((item, index) => {
//         return <li key={index}>{item}</li>;
//       })}
//     </ul>
//     <button onClick={(e) => setFriends([...friends, "saigao"])}>
//       添加朋友
//     </button>
//     <button onClick={(e) => addFriend()}>添加新朋友 </button>
//     <ul>
//       {student.map((item, index) => {
//         return (
//           <li key={item.id}>
//             {item.name} : {item.age}{" "}
//             <button onClick={(e) => changeAge(index)}>年龄+1</button>
//           </li>
//         );
//       })}
//     </ul>

//     {/* <button onClick={e=>addFriend}>添加好朋友</button> */}
//   </div>
// );
// //   错误的做法，记得 永远不要去改变元数据
// function addFriend() {
//   friends.push("hmm");
//   setFriends(friends);
// }
// function changeAge(index) {
//   const newStudent = [...student];
//   newStudent[index].age += 1;
//   setStudent(newStudent);
// }